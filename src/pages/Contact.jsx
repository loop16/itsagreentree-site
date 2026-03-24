import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:info@itsagreentree.com?subject=${encodeURIComponent(
      form.subject || 'Website Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info side */}
        <div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl font-bold text-bark">Contact Us</h1>
          <p className="mt-4 text-wood-dark leading-relaxed">
            Have a question about our trees? Interested in a custom order? Want to carry
            Alberello in your shop? We'd love to hear from you.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-forest" size={18} />
              </div>
              <div>
                <p className="font-semibold text-bark text-sm">Email</p>
                <a
                  href="mailto:info@itsagreentree.com"
                  className="text-forest hover:underline"
                >
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

          <div className="mt-12">
            <img
              src="/images/logo.jpg"
              alt="Alberello logo"
              className="w-48 h-48 object-contain opacity-80"
            />
          </div>
        </div>

        {/* Form side */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-sage-light/10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest/10 flex items-center justify-center">
                <Send className="text-forest" size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-bark">
                Message Ready!
              </h3>
              <p className="mt-2 text-wood-dark">
                Your email app should have opened. If not, email us directly at{' '}
                <a
                  href="mailto:info@itsagreentree.com"
                  className="text-forest hover:underline"
                >
                  info@itsagreentree.com
                </a>
              </p>
              <button
                className="mt-6 text-sm text-forest hover:underline"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bark mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bark mb-2">
                  Subject
                </label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors"
                >
                  <option value="">Select a topic...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Custom Order">Custom Order</option>
                  <option value="Wholesale / Retail">Wholesale / Retail</option>
                  <option value="Press">Press</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-bark mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
