import { MessageCircle, Phone, Mail, Linkedin, Instagram } from 'lucide-react'
import {
  WHATSAPP,
  PHONE_TEL,
  EMAIL,
  LINKEDIN,
  INSTAGRAM,
} from '../data/contact.js'

const base =
  'group relative overflow-hidden w-44 py-4 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform text-center flex items-center justify-center gap-2'

export default function ContactButtons() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-6 max-w-4xl mx-auto">
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${base} bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700`}>
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-bold">WhatsApp</span>
        </a>
        <a href={`tel:${PHONE_TEL}`} className={`${base} bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700`}>
          <Phone className="w-5 h-5" />
          <span className="text-sm font-bold">Phone</span>
        </a>
        <a href={`mailto:${EMAIL}`} className={`${base} bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700`}>
          <Mail className="w-5 h-5" />
          <span className="text-sm font-bold">Email</span>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={`${base} bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800`}>
          <Linkedin className="w-5 h-5" />
          <span className="text-sm font-bold">LinkedIn</span>
        </a>
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={`${base} bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600`}>
          <Instagram className="w-5 h-5" />
          <span className="text-sm font-bold">Instagram</span>
        </a>
      </div>

      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-6 py-3 backdrop-blur-sm">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-gray-300 text-sm font-medium">
            ⏱️ Typically responds within 24 hours
          </span>
        </div>
      </div>
    </>
  )
}
