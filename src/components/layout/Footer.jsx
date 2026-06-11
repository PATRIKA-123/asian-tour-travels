import { business, nav, serviceList, destinations } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import { telLink, whatsappLink, mapsLink, defaultBookingMessage } from '../../utils/helpers'
import MountainDivider from '../ui/MountainDivider'

const Mountain = getIcon('Mountain')
const Phone = getIcon('Phone')
const MapPin = getIcon('MapPin')
const Mail = getIcon('Mail')
const MessageCircle = getIcon('MessageCircle')

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-forest-900 text-mist/80">
      <MountainDivider tone="forest" className="-mt-px" />

      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-fade text-forest-900">
              <Mountain size={22} />
            </span>
            <span className="font-display text-xl font-semibold text-mist">{business.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-mist/65">
            Your trusted travel partner across the Seven Sisters of North East India — cabs, tours
            and customised holiday packages, available {business.hours.toLowerCase()}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={whatsappLink(defaultBookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-mist transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={telLink()}
              aria-label="Call"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-mist transition-colors hover:bg-gold hover:text-forest-900"
            >
              <Phone size={18} />
            </a>
            <a
              href={`mailto:${business.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-mist transition-colors hover:bg-mountain-500 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-lg font-semibold text-mist">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg font-semibold text-mist">Our Services</h4>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm">
            {serviceList.slice(0, 8).map((s) => (
              <li key={s} className="text-mist/65">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold text-mist">Get in Touch</h4>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {business.address.lines.join(', ')}
              </a>
            </li>
            {business.phones.map((p) => (
              <li key={p.value} className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <a href={telLink(p.value)} className="hover:text-gold">
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Destinations strip — SEO + quick scan */}
      <div className="border-t border-white/10">
        <div className="container-px py-6">
          <p className="text-xs uppercase tracking-[0.18em] text-mist/45">North East Tour Packages</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-mist/60">
            {destinations.map((d) => (
              <a key={d.state} href="#destinations" className="hover:text-gold">
                {d.state} Tour
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-mist/50 sm:flex-row sm:text-left">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Best Travel Agency in Guwahati · North East India Tour & Cab Specialists</p>
        </div>
      </div>
    </footer>
  )
}
