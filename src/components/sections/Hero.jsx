import { motion } from 'framer-motion'
import { hero } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import { whatsappLink, defaultBookingMessage } from '../../utils/helpers'
import Button from '../ui/Button'
import MountainDivider from '../ui/MountainDivider'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image + cinematic overlays */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={hero.image}
          alt="Misty mountains of North East India"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/75 via-forest-900/45 to-forest-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/70 to-transparent" />
      </div>

      <div className="container-px relative w-full pb-28 pt-28 md:pb-36">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200 backdrop-blur-sm"
          >
            ★ {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-xl italic text-gold-400 sm:text-2xl"
          >
            {hero.subheading}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Button href="#destinations" variant="primary" size="lg" iconRight="ArrowRight">
              Explore Packages
            </Button>
            <Button href="#contact" variant="glass" size="lg" icon="CalendarCheck">
              Book Now
            </Button>
            <Button
              href={whatsappLink(defaultBookingMessage)}
              newTab
              variant="whatsapp"
              size="lg"
              icon="MessageCircle"
            >
              WhatsApp
            </Button>
          </motion.div>

          {/* Floating glass badges */}
          <motion.ul variants={item} className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {hero.badges.map((badge, i) => {
              const Icon = getIcon(badge.icon)
              return (
                <motion.li
                  key={badge.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                  className="glass-dark flex items-center gap-2.5 rounded-2xl px-3.5 py-3 text-sm text-white"
                >
                  <Icon size={18} className="shrink-0 text-gold-400" />
                  <span className="font-medium leading-tight">{badge.label}</span>
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.div>
      </div>

      {/* Signature ridge at the base of the hero */}
      <div className="absolute inset-x-0 bottom-0">
        <MountainDivider tone="mist" />
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#destinations"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 text-white/60 hover:text-white md:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <span className="h-2 w-1 rounded-full bg-white/70" />
        </span>
      </motion.a>
    </section>
  )
}
