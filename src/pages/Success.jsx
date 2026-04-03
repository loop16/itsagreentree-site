import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export default function Success() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle className="mx-auto text-forest mb-6" size={64} />
        <h1 className="font-display text-3xl font-bold text-bark">Order Confirmed!</h1>
        <p className="mt-4 text-wood-dark leading-relaxed">
          Thank you for your order. You'll receive a confirmation email shortly. Your Alberello is being handmade in Brooklyn just for you.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3.5 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
