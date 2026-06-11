import { motion } from 'framer-motion'
import { fleet } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import { whatsappLink, fadeUp, stagger, viewportOnce } from '../../utils/helpers'
import SectionHeading from '../ui/SectionHeading'

const ArrowUpRight = getIcon('ArrowUpRight')

function FleetCard({ vehicle }) {
  const Icon = getIcon(vehicle.icon)
  const bookMsg = `Hi, I'd like to book a ${vehicle.name} (${vehicle.seats}). Please share the rate.`

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-mist-300 bg-white shadow-soft"
    >
      {/* Media — real photo if provided, else branded icon panel */}
      <div className="relative h-44 overflow-hidden">
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-forest-fade">
            <Icon
              size={72}
              className="text-mist/90 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.4}
            />
            <div className="absolute inset-0 bg-mist-radial opacity-40" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest shadow-soft backdrop-blur">
          {vehicle.seats}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-forest-900">{vehicle.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-forest-400">{vehicle.blurb}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {vehicle.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-mist-200 px-2.5 py-0.5 text-[11px] font-medium text-forest-600"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={whatsappLink(bookMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-between rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-mist transition-colors group-hover:bg-gold group-hover:text-forest-900"
        >
          Book Now
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  )
}

export default function Fleet() {
  return (
    <section id="fleet" className="section bg-mist">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Fleet"
          title="The Right Vehicle for Every Journey"
          subtitle="Clean, well-maintained and insured — from quick airport runs to 17-seater group tours across the hills."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {fleet.map((v) => (
            <FleetCard key={v.name} vehicle={v} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
