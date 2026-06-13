// ──────────────────────────────────────────────────────────────────────────
// siteContent.js — SINGLE SOURCE OF TRUTH
// Every piece of business copy, contact info, and section data lives here.
// To rebrand or update the site, edit this file only.
//
// IMAGES: All `image` URLs below are curated Unsplash placeholders chosen to
// match the North-East mood. Before go-live, swap them with the client's own
// licensed / owned photography of the actual destinations and fleet.
// ──────────────────────────────────────────────────────────────────────────

export const business = {
  name: 'Asian Tour and Travels',
  tagline: 'North East India Travel & Cab Specialists',
  phones: [
    { label: '+91 70021 16636', value: '7002116636' },
    { label: '+91 94028 91880', value: '9402891880' },
  ],
  // Primary number used for WhatsApp / tel actions (no spaces, country code).
  whatsapp: '917002116636',
  primaryCall: '917002116636',
  email: 'ranjuahamed86@gmail.com', // placeholder — update with real email
  address: {
    lines: ['H No. 07, City View Path', 'Nalpara, Datalpara', 'Guwahati - 781025', 'Assam, India'],
    short: 'Nalpara, Datalpara, Guwahati, Assam',
    mapsQuery: 'Nalpara, Datalpara, Guwahati, Assam 781025',
  },
  hours: 'Open 24/7 · 365 days a year',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Welcome to the Land of the Seven Sisters',
  heading: 'Explore the Beauty of North East India',
  subheading: 'Asian Tour and Travels',
  description:
    'Your trusted travel partner for unforgettable journeys across Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram and Tripura.',
  image: '/hero.jpg',
    
  badges: [
    { icon: 'ShieldCheck', label: 'Trusted Service' },
    { icon: 'Car', label: 'All Vehicle Types' },
    { icon: 'Mountain', label: 'North East Experts' },
    { icon: 'Clock', label: '24/7 Support' },
  ],
}

export const stats = [
  { value: 12, suffix: '+', label: 'Years on the Road' },
  { value: 8500, suffix: '+', label: 'Happy Travellers' },
  { value: 30, suffix: '+', label: 'Destinations Covered' },
  { value: 7, suffix: '', label: 'States Served' },
]

// ── Fleet ─────────────────────────────────────────────────────────────────
// `image` is optional. Leave empty to render the premium icon card; add a real
// photo URL to show it as the card image (object-cover, swap-safe).
export const fleet = [
  {
    name: 'Sedan',
    icon: 'Car',
    seats: '4 Seater',
    blurb: 'Comfortable city rides and airport transfers.',
    tags: ['AC', 'City', 'Airport'],
    image: '',
  },
  {
    name: 'SUV',
    icon: 'Truck',
    seats: '6–7 Seater',
    blurb: 'Built for hills, highways and rough mountain roads.',
    tags: ['AC', 'Hills', 'Long Drive'],
    image: '',
  },
  {
    name: 'Innova',
    icon: 'Car',
    seats: '6–7 Seater',
    blurb: 'The most loved choice for North East family tours.',
    tags: ['Premium', 'Family', 'Outstation'],
    image: '',
  },
  {
    name: 'Ertiga',
    icon: 'Car',
    seats: '6 Seater',
    blurb: 'Spacious yet economical for small groups.',
    tags: ['AC', 'Budget', 'Group'],
    image: '',
  },
  {
    name: 'Tempo Traveller',
    icon: 'Bus',
    seats: '9–17 Seater',
    blurb: 'Roomy comfort for large families and tour groups.',
    tags: ['Group', 'Tours', 'Luggage'],
    image: '',
  },
  {
    name: 'Luxury Cars',
    icon: 'Gem',
    seats: '4 Seater',
    blurb: 'Arrive in style for weddings and corporate travel.',
    tags: ['VIP', 'Corporate', 'Events'],
    image: '',
  },
  {
    name: 'Group Vehicles',
    icon: 'Users',
    seats: '20+ Seater',
    blurb: 'Coaches and mini-buses for large group journeys.',
    tags: ['Coach', 'Pilgrimage', 'Events'],
    image: '',
  },
]

// ── Destinations (Seven Sisters) ───────────────────────────────────────────
export const destinations = [
  {
    state: 'Assam',
    title: 'Assam',
    description:
      'One-horned rhinos at Kaziranga, the sacred Kamakhya Temple and the river island of Majuli — the gateway to the North East.',
    spots: ['Kaziranga National Park', 'Kamakhya Temple', 'Majuli Island', 'Haflong', 'Guwahati'],
    image:
      'assam.jpg',
  },
  {
    state: 'Meghalaya',
    title: 'Meghalaya',
    description:
      'The abode of clouds — living root bridges, the wettest village on earth and the crystal-clear waters of Dawki.',
    spots: ['Shillong', 'Cherrapunji', 'Dawki', 'Mawlynnong', 'Laitlum Canyon'],
    // Local image (place file at `public/meghalaya.jpg`)
    image: '/Meghalaya.jpg',
  },
  {
    state: 'Arunachal Pradesh',
    title: 'Arunachal Pradesh',
    description:
      'The land of the dawn-lit mountains — high passes, the grand Tawang Monastery and the untouched Ziro Valley.',
    spots: ['Tawang', 'Bomdila', 'Dirang', 'Ziro Valley', 'Sela Pass'],
    // Local image (place file at `public/arunachal.jpg`)
    image: '/Arunachal.jpg',
  },
  {
    state: 'Nagaland',
    title: 'Nagaland',
    description:
      'Rich tribal heritage and rolling valleys — Kohima, the breathtaking Dzukou Valley and the green village of Khonoma.',
    spots: ['Kohima', 'Dzukou Valley', 'Mon', 'Khonoma Village'],
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    state: 'Manipur',
    title: 'Manipur',
    description:
      'A jewelled land of floating islands — the famous Loktak Lake and the only floating national park on earth.',
    spots: ['Loktak Lake', 'Imphal', 'Keibul Lamjao National Park'],
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
  },
  {
    state: 'Mizoram',
    title: 'Mizoram',
    description:
      'Gentle blue hills and warm hospitality — the capital Aizawl, scenic Reiek and the tallest falls in the state.',
    spots: ['Aizawl', 'Reiek', 'Vantawng Falls'],
    image:
      '/Mizoram.jpg',
  },
  {
    state: 'Tripura',
    title: 'Tripura',
    description:
      'Royal heritage and hidden carvings — the Ujjayanta Palace, the lake palace of Neermahal and ancient Unakoti.',
    spots: ['Ujjayanta Palace', 'Neermahal', 'Unakoti', 'Jampui Hills'],
    image:
      'tripura.jpg',
  },
]

// ── Services ───────────────────────────────────────────────────────────────
export const services = [
  { icon: 'Car', title: 'Cab Booking', desc: 'On-demand cabs and rentals for any distance.' },
  { icon: 'Plane', title: 'Airport Transfer', desc: 'Punctual pickup & drop, day or night.' },
  { icon: 'BedDouble', title: 'Hotel Booking', desc: 'Hand-picked stays across the North East.' },
  { icon: 'Users', title: 'Group Tours', desc: 'Curated journeys for groups of every size.' },
  { icon: 'Heart', title: 'Family Packages', desc: 'Relaxed, well-paced trips for the whole family.' },
  { icon: 'Briefcase', title: 'Corporate Travel', desc: 'Reliable fleets for business and events.' },
  { icon: 'MapPinned', title: 'Holiday Planning', desc: 'Custom itineraries built around you.' },
  { icon: 'Camera', title: 'Local Sightseeing', desc: 'Half-day and full-day local experiences.' },
]

// ── Why Choose Us ──────────────────────────────────────────────────────────
export const whyChooseUs = [
  { icon: 'Award', title: 'Experienced Team', desc: 'Over a decade guiding travellers across all seven states.' },
  { icon: 'BadgeIndianRupee', title: 'Affordable Pricing', desc: 'Transparent rates with no hidden charges, ever.' },
  { icon: 'ShieldCheck', title: 'Safe Travel', desc: 'Well-maintained, sanitised and insured vehicles.' },
  { icon: 'UserCheck', title: 'Professional Drivers', desc: 'Local, verified drivers who know every route.' },
  { icon: 'SlidersHorizontal', title: 'Customized Packages', desc: 'Every itinerary tailored to your pace and budget.' },
  { icon: 'Headphones', title: 'Reliable Support', desc: 'Real humans on call 24/7 through your journey.' },
]

// ── Booking Process ────────────────────────────────────────────────────────
export const bookingSteps = [
  { icon: 'MapPin', title: 'Choose Destination', desc: 'Tell us where in the North East you dream of going.' },
  { icon: 'Car', title: 'Select Vehicle', desc: 'Pick the perfect ride for your group and route.' },
  { icon: 'CalendarCheck', title: 'Confirm Booking', desc: 'Lock in your dates with a quick confirmation.' },
  { icon: 'PartyPopper', title: 'Enjoy Your Journey', desc: 'Sit back while we handle every detail.' },
]

// ── Testimonials (sample copy — replace with real client reviews) ──────────
export const testimonials = [
  {
    name: 'Ananya Sharma',
    location: 'Delhi',
    trip: 'Meghalaya Family Tour',
    rating: 5,
    quote:
      'From the Dawki river to the root bridges, every day was planned perfectly. Our driver felt like family by the end of the trip.',
  },
  {
    name: 'Rohit Mehta',
    location: 'Mumbai',
    trip: 'Tawang Expedition',
    rating: 5,
    quote:
      'Sela Pass in the snow was unreal. The SUV handled the mountains beautifully and the team checked on us the whole way.',
  },
  {
    name: 'Priya Nair',
    location: 'Bengaluru',
    trip: 'Kaziranga Safari',
    rating: 5,
    quote:
      'Booked last minute and they still arranged everything — safari, stay and cab. Saw rhinos within the first hour. Highly recommend.',
  },
  {
    name: 'Debojit Das',
    location: 'Kolkata',
    trip: 'Corporate Group Travel',
    rating: 5,
    quote:
      'Moved a team of 30 across three cities without a single hiccup. Punctual, professional and genuinely affordable.',
  },
  {
    name: 'Sneha & Arjun',
    location: 'Pune',
    trip: 'Honeymoon Package',
    rating: 5,
    quote:
      'They turned our honeymoon into something magical. Loktak Lake at sunrise is a memory we will keep forever.',
  },
]

// ── Service list for the footer / SEO ──────────────────────────────────────
export const serviceList = [
  'All Types of Vehicles',
  'Cab Rental',
  'Airport Pickup & Drop',
  'Local Sightseeing',
  'Outstation Trips',
  'Family Tours',
  'Group Tours',
  'Corporate Travel',
  'Holiday Packages',
  'Customized Tour Packages',
]

// Options for the contact form's Destination select
export const destinationOptions = destinations.map((d) => d.state)
