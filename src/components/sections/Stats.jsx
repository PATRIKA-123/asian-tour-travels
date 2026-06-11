import { motion } from 'framer-motion'
import { stats } from '../../data/siteContent'
import useCountUp from '../../hooks/useCountUp'
import { fadeUp, stagger, viewportOnce } from '../../utils/helpers'

function StatItem({ value, suffix, label }) {
  const [count, ref] = useCountUp(value)
  return (
    <motion.div variants={fadeUp} ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold text-forest-900 sm:text-5xl">
        {count.toLocaleString('en-IN')}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-forest-400">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="relative z-10 -mt-10 md:-mt-16">
      <div className="container-px">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass mx-auto grid grid-cols-2 gap-6 rounded-3xl px-6 py-8 shadow-glass md:grid-cols-4 md:gap-4 md:px-10 md:py-10"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
