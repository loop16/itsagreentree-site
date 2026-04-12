import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
        Get in Touch
      </p>
      <h1 className="font-display text-4xl font-bold text-bark">Contact Us</h1>
      <p className="mt-4 text-wood-dark leading-relaxed">
        Have a question about our trees? We'd love to hear from you.
      </p>

      <div className="mt-8 mb-10">
        <img
          src="/images/alberello-logo.png"
          alt="Alberello logo"
          className="w-[576px] h-[576px] object-contain"
        />
      </div>

      <div className="mt-10 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
            <Mail className="text-forest" size={18} />
          </div>
          <div>
            <p className="font-semibold text-bark text-sm">Email</p>
            <a href="mailto:info@itsagreentree.com" className="text-forest hover:underline">
              info@itsagreentree.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="text-forest" size={18} />
          </div>
          <div>
            <p className="font-semibold text-bark text-sm">Location</p>
            <p className="text-wood-dark">Brooklyn, New York</p>
          </div>
        </div>
      </div>
    </section>
  )
}
