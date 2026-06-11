import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { testimonials } from '../../data/siteContent'
import { getIcon } from '../../utils/icons'
import SectionHeading from '../ui/SectionHeading'

const Star = getIcon('Star')
const Quote = getIcon('Quote')

function ReviewCard({ t }) {
  return (
    <div className="glass flex h-full flex-col rounded-3xl p-7 shadow-glass">
      <Quote size={34} className="text-gold/70" />
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-forest-900/90">“{t.quote}”</p>

      <div className="mt-5 flex items-center gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-gold text-gold" />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-forest/10 pt-4">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-fade font-display text-lg font-semibold text-gold">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="font-semibold text-forest-900">{t.name}</p>
          <p className="text-xs text-forest-400">
            {t.location} · {t.trip}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section relative overflow-hidden bg-mist-200">
      <div className="pointer-events-none absolute inset-0 bg-mist-radial" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Travellers' Stories"
          title="Loved by Families & Groups Alike"
          subtitle="Real journeys, real memories. Here's what our travellers say after coming home."
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
          breakpoints={{
            700: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto self-stretch !flex">
              <ReviewCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
