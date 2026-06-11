import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingButtons from './components/layout/FloatingButtons'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="relative min-h-screen bg-mist">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future pages (e.g. /packages, /about) can be added here */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
