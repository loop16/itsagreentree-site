import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ImageGallery from '../components/ImageGallery'

const photos = [
  '/images/customize/custom1.jpg',
  '/images/customize/custom2.jpg',
  '/images/customize/custom3.jpg',
  '/images/customize/custom4.jpg',
  '/images/customize/custom5.jpg',
  '/images/customize/custom6.jpg',
  '/images/customize/custom7.jpg',
  '/images/customize/custom8.jpg',
]

export default function Customize() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
                Make It Yours
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-bark">
                Customize Your Tree
              </h1>
              <p className="mt-4 text-wood-dark leading-relaxed text-lg">
                Make it truly yours. Choose custom colors for your rings, mix and match painted ornaments, or go fully custom with your own color scheme.
              </p>
              <p className="mt-3 text-wood-dark leading-relaxed">
                Every tree is handmade to order in our Brooklyn workshop — so the possibilities are endless.
              </p>
            </div>
            <ImageGallery images={photos} alt="Customized Alberello" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Interested in a Custom Order?
          </h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto leading-relaxed">
            Get in touch and we'll work with you to create something unique.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:info@itsagreentree.com"
              className="px-8 py-3.5 bg-white text-forest font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-warm transition-colors shadow-lg"
            >
              Email Us
            </a>
            <Link
              to="/#products"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-white/10 transition-colors"
            >
              Browse Trees
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
