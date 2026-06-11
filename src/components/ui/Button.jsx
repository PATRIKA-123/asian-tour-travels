import { motion } from 'framer-motion'
import { getIcon } from '../../utils/icons'

const variants = {
  primary:
    'bg-gold-fade text-forest-900 shadow-gold hover:shadow-lift font-semibold',
  forest:
    'bg-forest text-mist hover:bg-forest-600 shadow-soft font-semibold',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-soft font-semibold',
  outline:
    'border border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-mist font-semibold',
  glass:
    'glass text-forest hover:bg-white/80 font-semibold',
  ghostLight:
    'border border-white/40 text-white hover:bg-white/15 backdrop-blur-sm font-semibold',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-7 py-3.5 text-base',
}

/**
 * Polymorphic button. Renders an <a> when `href` is supplied, else a <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  href,
  onClick,
  type = 'button',
  className = '',
  newTab = false,
  ...rest
}) {
  const Icon = icon ? getIcon(icon) : null
  const IconRight = iconRight ? getIcon(iconRight) : null

  const classes = `group inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && <Icon size={18} className="shrink-0" />}
      <span>{children}</span>
      {IconRight && (
        <IconRight
          size={18}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps} {...rest}>
      {content}
    </motion.button>
  )
}
