import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ContactModal from './ContactModal.jsx'

export default function Layout() {
  const [contactOpen, setContactOpen] = useState(false)
  const { pathname } = useLocation()

  // Scroll to top on every route change.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="bg-black text-gray-300 min-h-screen selection:bg-yellow-400 selection:text-black">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
