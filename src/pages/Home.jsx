import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import Fleet from '../components/sections/Fleet'
import Destinations from '../components/sections/Destinations'
import Gallery from '../components/sections/Gallery';
import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import BookingProcess from '../components/sections/BookingProcess'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Fleet />
      <Destinations />
      <Gallery />
      <Services />
      <WhyChooseUs />
      <BookingProcess />
      <Testimonials />
      <Contact />
    </>
  )
}
