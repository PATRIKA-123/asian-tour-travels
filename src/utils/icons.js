// ──────────────────────────────────────────────────────────────────────────
// icons.js — CURATED ICON REGISTRY
// Import only the icons we actually use, then resolve by string name from data.
// This avoids `import * as Icons` wildcard imports and keeps the bundle lean.
// ──────────────────────────────────────────────────────────────────────────
import {
  ShieldCheck,
  Car,
  Mountain,
  Clock,
  Truck,
  Bus,
  Gem,
  Users,
  Plane,
  BedDouble,
  Heart,
  Briefcase,
  MapPinned,
  Camera,
  Award,
  BadgeIndianRupee,
  UserCheck,
  SlidersHorizontal,
  Headphones,
  MapPin,
  CalendarCheck,
  PartyPopper,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowUpRight,
  Star,
  Mail,
  Send,
  Quote,
  CalendarDays,
  UserRound,
} from 'lucide-react'

const registry = {
  ShieldCheck,
  Car,
  Mountain,
  Clock,
  Truck,
  Bus,
  Gem,
  Users,
  Plane,
  BedDouble,
  Heart,
  Briefcase,
  MapPinned,
  Camera,
  Award,
  BadgeIndianRupee,
  UserCheck,
  SlidersHorizontal,
  Headphones,
  MapPin,
  CalendarCheck,
  PartyPopper,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowUpRight,
  Star,
  Mail,
  Send,
  Quote,
  CalendarDays,
  UserRound,
}

/**
 * Resolve an icon component by name from the registry.
 * Falls back to MapPin if the name is unknown so nothing ever crashes.
 */
export function getIcon(name) {
  return registry[name] || MapPin
}

export default registry
