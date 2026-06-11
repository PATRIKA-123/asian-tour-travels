import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { destinations } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import { whatsappLink } from '../../utils/helpers'
import SectionHeading from '../ui/SectionHeading'
import MountainDivider from '../ui/MountainDivider'

const MapPin = getIcon('MapPin')
const ArrowRight = getIcon('ArrowRight')

function DestinationCard({ d }) {
  const msg = `Hi, I'm interested in a ${d.state} tour package. Please share details.`
  return (
    <article className="group relative h-[460px] overflow-hidden rounded-3xl">
      <img
        src={d.image}
        alt={`${d.state} — North East India`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/40 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-forest-900">
          <MapPin size={13} /> North East
        </span>
        <h3 className="font-display text-3xl font-semibold text-white">{d.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-mist/80">{d.description}</p>

        {/* Spots reveal on hover (always visible on touch) */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {d.spots.slice(0, 4).map((spot) => (
            <span
              key={spot}
              className="rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 text-[11px] text-white backdrop-blur-sm"
            >
              {spot}
            </span>
          ))}
        </div>

        <a
          href={whatsappLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest-900 transition-all hover:gap-3 hover:bg-gold"
        >
          Explore {d.state}
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  )
}

export default function Destinations() {
  return (
    <section id="destinations" className="relative bg-forest-900">
      <MountainDivider tone="mist" flip className="-mt-px" />

      <div className="section pb-24">
        <div className="container-px">
          <SectionHeading
            light
            eyebrow="The Seven Sisters"
            title="Where Will the Mountains Take You?"
            subtitle="Seven states, one breathtaking region. Tap any destination to plan a custom journey on WhatsApp."
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="destinations-swiper px-5 sm:px-8 lg:px-12"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={false}
            grabCursor
            keyboard={{ enabled: true }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: true, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 1.6, spaceBetween: 22 },
              900: { slidesPerView: 2.3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 26 },
            }}
            className="!pb-14"
          >
            {destinations.map((d) => (
              <SwiperSlide key={d.state}>
                <DestinationCard d={d} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
