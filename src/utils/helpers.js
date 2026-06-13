// ──────────────────────────────────────────────────────────────────────────
// helpers.js — link builders + shared Framer Motion variants
// ──────────────────────────────────────────────────────────────────────────
import { business } from '../data/siteContent'

/** Build a wa.me link with an optional pre-filled message. */
export function whatsappLink(message = '') {
  const base = `https://wa.me/${business.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Build a tel: link. Defaults to the primary number. */
export function telLink(number = business.primaryCall) {
  return `tel:+${number.replace(/[^\d]/g, '')}`
}

/** Build a mailto: link for email. */
export function mailtoLink(email = business.email) {
  return `mailto:${email}`
}

/** Google Maps directions link for the business address. */
export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.address.mapsQuery,
  )}`
}

/** Default booking enquiry message used by WhatsApp CTAs. */
export const defaultBookingMessage =
  `Hi ${business.name}, I'd like to book a trip / cab. Please share availability and pricing.`

// ── Shared Framer Motion variants ──────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

// Standard viewport config for scroll-reveal (animate once, slightly early).
export const viewportOnce = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' }
