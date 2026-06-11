import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { business, nav } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import useScrollSpy from '../../hooks/useScrollSpy'
import { whatsappLink, defaultBookingMessage } from '../../utils/helpers'
import Button from '../ui/Button'

const Menu = getIcon('Menu')
const X = getIcon('X')
const Mountain = getIcon('Mountain')

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const sectionIds = nav.map((n) => n.href.replace('#', ''))
  const { active, scrolled } = useScrollSpy(sectionIds)

  const closeAnd = (fn) => () => {
    setOpen(false)
    fn?.()
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/40 bg-mist/80 shadow-soft backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest text-gold shadow-soft">
            <Mountain size={22} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-semibold tracking-tight ${
                scrolled || open ? 'text-forest-900' : 'text-white'
              }`}
            >
              Asian Tour
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                scrolled || open ? 'text-forest-400' : 'text-white/70'
              }`}
            >
              and Travels
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? isActive
                        ? 'text-forest'
                        : 'text-forest-900/70 hover:text-forest'
                      : isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={whatsappLink(defaultBookingMessage)}
            newTab
            variant={scrolled ? 'forest' : 'ghostLight'}
            size="sm"
            icon="MessageCircle"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`grid h-10 w-10 place-items-center rounded-xl transition-colors lg:hidden ${
            scrolled || open ? 'bg-forest/10 text-forest' : 'bg-white/15 text-white backdrop-blur-sm'
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 pb-5 pt-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeAnd()}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-forest-900 transition-colors hover:bg-forest/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 px-1">
                <Button href={whatsappLink(defaultBookingMessage)} newTab variant="whatsapp" icon="MessageCircle">
                  WhatsApp Us
                </Button>
                <Button href={`tel:+${business.primaryCall}`} variant="outline" icon="Phone">
                  Call {business.phones[0].label}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
