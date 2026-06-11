import { motion } from 'framer-motion'
import { whyChooseUs } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import { whatsappLink, fadeUp, stagger, viewportOnce, defaultBookingMessage } from '../../utils/helpers'
import Button from '../ui/Button'

function FeatureCard({ feature }) {
  const Icon = getIcon(feature.icon)
  return (
    <motion.div
      variants={fadeUp}
      className="glass flex gap-4 rounded-2xl p-5 transition-shadow hover:shadow-lift"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-gold">
        <Icon size={22} />
      </span>
      <div>
        <h3 className="font-display text-lg font-semibold text-forest-900">{feature.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-forest-400">{feature.desc}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section relative overflow-hidden bg-mist">
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-mountain-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gold-200/30 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: pitch */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" />
            Why Travellers Choose Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl md:text-[2.7rem]">
            North East travel, done the right way
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-forest-400">
            We are not a faceless booking app. We are a local team that has driven these roads for
            over a decade — and we treat every traveller like a guest in our own home.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#contact" variant="forest" icon="CalendarCheck">
              Plan My Trip
            </Button>
            <Button
              href={whatsappLink(defaultBookingMessage)}
              newTab
              variant="outline"
              icon="MessageCircle"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>

        {/* Right: feature grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2"
        >
          {whyChooseUs.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
