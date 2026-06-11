import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getIcon } from '../../utils/icons'
import { telLink, whatsappLink, defaultBookingMessage } from '../../utils/helpers'

const MessageCircle = getIcon('MessageCircle')
const Phone = getIcon('Phone')
const CalendarCheck = getIcon('CalendarCheck')

const actions = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    Icon: MessageCircle,
    href: whatsappLink(defaultBookingMessage),
    newTab: true,
    className: 'bg-[#25D366] text-white',
  },
  {
    key: 'call',
    label: 'Call Now',
    Icon: Phone,
    href: telLink(),
    newTab: false,
    className: 'bg-mountain-500 text-white',
  },
  {
    key: 'book',
    label: 'Book Now',
    Icon: CalendarCheck,
    href: '#contact',
    newTab: false,
    className: 'bg-gold text-forest-900',
  },
]

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-6"
        >
          {actions.map(({ key, label, Icon, href, newTab, className }) => (
            <a
              key={key}
              href={href}
              target={newTab ? '_blank' : undefined}
              rel={newTab ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className={`group flex items-center justify-end overflow-hidden rounded-full shadow-lift transition-all ${className}`}
            >
              <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:pl-4 group-hover:opacity-100">
                {label}
              </span>
              <span className="grid h-14 w-14 shrink-0 place-items-center">
                <Icon size={22} />
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
