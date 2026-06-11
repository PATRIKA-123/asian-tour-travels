import { motion } from 'framer-motion'
import { services } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import { fadeUp, stagger, viewportOnce } from '../../utils/helpers'
import SectionHeading from '../ui/SectionHeading'

function ServiceCard({ service }) {
  const Icon = getIcon(service.icon)
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl border border-mist-300 bg-white p-6 shadow-soft"
    >
      {/* gold wash on hover */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />

      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-forest-fade text-gold transition-transform duration-300 group-hover:scale-105">
        <Icon size={24} />
      </span>
      <h3 className="relative mt-4 font-display text-lg font-semibold text-forest-900">
        {service.title}
      </h3>
      <p className="relative mt-1.5 text-sm leading-relaxed text-forest-400">{service.desc}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section bg-mist-100">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything for a Seamless Trip"
          subtitle="One trusted partner for cabs, transfers, stays and fully-planned holidays across the North East."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
