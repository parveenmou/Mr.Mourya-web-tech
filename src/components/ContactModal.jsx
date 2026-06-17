import { useEffect } from 'react'
import { X } from 'lucide-react'
import ContactButtons from './ContactButtons.jsx'

export default function ContactModal({ open, onClose }) {
  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = 'auto'
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[500] flex items-start justify-center overflow-y-auto bg-black/90 backdrop-blur-md px-3 py-6"
    >
      <div className="relative w-[min(1100px,95vw)] my-auto rounded-3xl border border-gray-700 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#2a2a3e] border border-gray-600 text-white hover:bg-[#3a3a4e] hover:scale-110 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-10 mt-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            Ready to start your project? Choose your preferred way to reach out.
          </p>
        </div>

        <ContactButtons />
      </div>
    </div>
  )
}
