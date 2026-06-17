import { Link } from 'react-router-dom'
import { ChevronUp } from 'lucide-react'
import ContactButtons from './ContactButtons.jsx'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        {/* Let's Connect */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Connect
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Choose your preferred way to reach out.
          </p>
        </div>

        <ContactButtons />

        {/* Divider */}
        <div className="relative mb-12 mt-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 bg-black text-gray-500">
              <ChevronUp className="w-6 h-6" />
            </span>
          </div>
        </div>

        {/* Brand */}
        <div className="text-center mb-12">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-4">
            <span className="text-white">Mr. Parveen Kumar</span>
          </div>
          <p className="text-gray-400 text-lg font-medium italic max-w-2xl mx-auto">
            Building digital experiences that drive real revenue
          </p>
        </div>

        {/* Quick links */}
        <div className="mb-12">
          <h4 className="text-center text-gray-400 text-sm font-bold mb-6 uppercase tracking-wider">
            Quick Links
          </h4>
          <div className="flex justify-center items-center gap-6 text-gray-300 text-base flex-wrap">
            <Link to="/" className="hover:text-yellow-400 transition-colors font-medium">Home</Link>
            <span className="text-gray-600 text-sm">•</span>
            <Link to="/about" className="hover:text-yellow-400 transition-colors font-medium">About</Link>
            <span className="text-gray-600 text-sm">•</span>
            <Link to="/projects" className="hover:text-yellow-400 transition-colors font-medium">Work</Link>
            <span className="text-gray-600 text-sm">•</span>
            <Link to="/projects" className="hover:text-yellow-400 transition-colors font-medium">Projects</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700/50">
          <p className="text-gray-500 text-sm">
            © 2026 Mr. Parveen Kumar. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed &amp; Developed with <span className="text-red-400">❤️</span> by Parveen Kumar
          </p>
        </div>
      </div>
    </footer>
  )
}
