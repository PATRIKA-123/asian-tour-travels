import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/helpers'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mx-auto mb-12 flex max-w-2xl flex-col gap-3 md:mb-16 ${alignment}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-gold-400' : ''}`}>
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.7rem] ${
          light ? 'text-mist' : 'text-forest-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-1 text-base leading-relaxed ${light ? 'text-mist/70' : 'text-forest-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
