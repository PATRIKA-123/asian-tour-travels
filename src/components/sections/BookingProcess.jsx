import { motion } from 'framer-motion'
import { bookingSteps } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import { fadeUp, stagger, viewportOnce } from '../../utils/helpers'
import SectionHeading from '../ui/SectionHeading'
import MountainDivider from '../ui/MountainDivider'

export default function BookingProcess() {
  return (
    <section className="relative bg-mountain-900 text-mist">
      <MountainDivider tone="mountain" flip className="-mt-px" />

      <div className="section">
        <div className="container-px">
          <SectionHeading
            light
            eyebrow="How It Works"
            title="Four Steps to the Hills"
            subtitle="No endless forms, no waiting. From idea to journey in a single conversation."
          />

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative grid gap-8 md:grid-cols-4 md:gap-5"
          >
            {/* connecting line (desktop) */}
            <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />

            {bookingSteps.map((step, i) => {
              const Icon = getIcon(step.icon)
              return (
                <motion.li key={step.title} variants={fadeUp} className="relative text-center">
                  <div className="relative mx-auto grid h-20 w-20 place-items-center">
                    <span className="absolute inset-0 rounded-full bg-white/5" />
                    <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-mountain-900 text-gold">
                      <Icon size={26} />
                    </span>
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gold text-xs font-bold text-forest-900">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-mist">{step.title}</h3>
                  <p className="mx-auto mt-1.5 max-w-[220px] text-sm leading-relaxed text-mist/65">
                    {step.desc}
                  </p>
                </motion.li>
              )
            })}
          </motion.ol>
        </div>
      </div>

      <MountainDivider tone="mountain" className="-mb-px" />
    </section>
  )
}
