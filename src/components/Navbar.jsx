import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', emoji: '🏠' },
  { to: '/about', label: 'About', emoji: '👤' },
  { to: '/projects', label: 'Work', emoji: '💼' },
]

export default function Navbar({ onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 50)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <nav
        id="navbar"
        ref={navRef}
        className="fixed w-full top-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col" onClick={() => setMobileOpen(false)}>
            <div className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-white">Mr. Parveen Kumar</span>
            </div>
            <span className="text-xs text-gray-500">Web Developer &amp; Meta Ads Manager</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition-all hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          >
            <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-20 right-4 bg-gray-800 rounded-2xl shadow-2xl z-[100] w-64 border border-gray-700 transition-all duration-300 ${
          mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-[calc(100%+2rem)] opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {LINKS.map((l, i) => (
            <div key={l.to}>
              <Link
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white hover:text-yellow-400 transition-colors flex items-center gap-3"
              >
                <span>{l.emoji}</span> {l.label}
              </Link>
              <div className="border-t border-gray-700 mt-4"></div>
            </div>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false)
              onOpenContact()
            }}
            className="text-base font-medium text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-3 text-left"
          >
            <span>💬</span> Let's Connect
          </button>
        </div>
      </div>
    </header>
  )
}
