import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { business, destinationOptions } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import {
  whatsappLink,
  telLink,
  mapsLink,
  fadeUp,
  viewportOnce,
} from '../../utils/helpers'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const Phone = getIcon('Phone')
const MapPin = getIcon('MapPin')
const Clock = getIcon('Clock')
const Send = getIcon('Send')

const fieldBase =
  'w-full rounded-xl border border-mist-300 bg-mist-100 px-4 py-3 text-sm text-forest-900 placeholder:text-forest-300 transition-colors focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/40'

function ErrorText({ children }) {
  return <p className="mt-1 text-xs font-medium text-red-600">{children}</p>
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const onSubmit = (data) => {
    const lines = [
      `*New Booking Enquiry — ${business.name}*`,
      '',
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      `*Destination:* ${data.destination}`,
      `*Travel Date:* ${data.travelDate || 'Flexible'}`,
      `*Travellers:* ${data.travelers}`,
      data.message ? `*Message:* ${data.message}` : null,
    ].filter(Boolean)

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
    reset()
  }

  const contactCards = [
    {
      Icon: Phone,
      title: 'Call Us',
      lines: business.phones.map((p) => p.label),
      href: telLink(),
    },
    {
      Icon: MapPin,
      title: 'Visit Us',
      lines: business.address.lines,
      href: mapsLink(),
      newTab: true,
    },
    {
      Icon: Clock,
      title: 'Working Hours',
      lines: [business.hours],
    },
  ]

  return (
    <section id="contact" className="section bg-mist">
      <div className="container-px">
        <SectionHeading
          eyebrow="Start Your Journey"
          title="Let's Plan Your North East Escape"
          subtitle="Tell us a little about your trip and we'll reply on WhatsApp with availability and pricing."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Left — contact info + actions */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            <div className="rounded-3xl bg-forest-fade p-7 text-mist shadow-soft">
              <h3 className="font-display text-2xl font-semibold">{business.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/75">
                Reach out any time — we are on the road {business.hours.toLowerCase()} and reply fast.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={whatsappLink(`Hi ${business.name}, I'd like to book a trip.`)}
                  newTab
                  variant="whatsapp"
                  icon="MessageCircle"
                  className="flex-1"
                >
                  WhatsApp
                </Button>
                <Button href={telLink()} variant="primary" icon="Phone" className="flex-1">
                  Call Now
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              {contactCards.map(({ Icon, title, lines, href, newTab }) => {
                const inner = (
                  <div className="flex gap-4 rounded-2xl border border-mist-300 bg-white p-5 shadow-soft transition-shadow hover:shadow-lift">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest/5 text-forest">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-forest-900">{title}</p>
                      {lines.map((l) => (
                        <p key={l} className="text-sm text-forest-400">
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                )
                return href ? (
                  <a
                    key={title}
                    href={href}
                    target={newTab ? '_blank' : undefined}
                    rel={newTab ? 'noopener noreferrer' : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={title}>{inner}</div>
                )
              })}
            </div>
          </motion.div>

          {/* Right — booking form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-3xl border border-mist-300 bg-white p-6 shadow-soft sm:p-8"
          >
            {/* noValidate: RHF handles validation. No <form> backend — submits to WhatsApp. */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-forest-900">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className={fieldBase}
                  {...register('name', { required: 'Please enter your name' })}
                />
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-forest-900">Phone</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  className={fieldBase}
                  {...register('phone', {
                    required: 'Please enter your phone number',
                    pattern: {
                      value: /^[0-9+\-\s]{10,15}$/,
                      message: 'Enter a valid phone number',
                    },
                  })}
                />
                {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-forest-900">Destination</label>
                <select
                  className={fieldBase}
                  defaultValue=""
                  {...register('destination', { required: 'Please choose a destination' })}
                >
                  <option value="" disabled>
                    Select a destination
                  </option>
                  {destinationOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                  <option value="Multiple / Not sure">Multiple / Not sure</option>
                </select>
                {errors.destination && <ErrorText>{errors.destination.message}</ErrorText>}
              </div>

              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-sm font-medium text-forest-900">Travel Date</label>
                <input type="date" className={fieldBase} {...register('travelDate')} />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-forest-900">
                  Number of Travellers
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 4"
                  className={fieldBase}
                  {...register('travelers', {
                    required: 'How many are travelling?',
                    min: { value: 1, message: 'At least 1 traveller' },
                  })}
                />
                {errors.travelers && <ErrorText>{errors.travelers.message}</ErrorText>}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-forest-900">Message</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your plans, preferred vehicle, hotels…"
                  className={`${fieldBase} resize-none`}
                  {...register('message')}
                />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" variant="forest" size="lg" iconRight="Send" className="w-full">
                  Book Now
                </Button>
                {isSubmitSuccessful && (
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-forest-600">
                    <Send size={14} /> Opening WhatsApp with your details…
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
