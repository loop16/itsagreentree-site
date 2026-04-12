import { Link } from 'react-router-dom'
import { Package, ArrowRight, Check } from 'lucide-react'
import ImageGallery from '../components/ImageGallery'

const boxContents = [
  {
    title: 'Tree Rings',
    description: '7 graduated birch plywood rings that form the tree silhouette.',
  },
  {
    title: 'Cord Supports',
    description: 'Cords to connect and suspend the rings.',
  },
  {
    title: 'Assembly Instructions',
    description: 'Step-by-step guide. Assembly takes about 15 minutes.',
  },
  {
    title: 'Hanging Hook',
    description: 'Ceiling hook for suspending your Alberello.',
  },
  {
    title: 'Wall Anchor',
    description: 'Wall anchor to secure your tree in place.',
  },
]

const boxImages = [
  '/images/box/box-closed.jpg',
  '/images/box/box-corners.jpg',
  '/images/box/box-endcorners.jpg',
  '/images/box/bag-on-rings.webp',
  '/images/box/in-the-bag.webp',
]

export default function Box() {
  return (
    <>
      {/* Main section */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: info + contents */}
            <div>
              <div className="w-14 h-14 mb-6 rounded-full bg-forest/10 flex items-center justify-center">
                <Package className="text-forest" size={24} />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-bark">
                What's in the Box
              </h1>
              <p className="mt-4 text-wood-dark leading-relaxed">
                Every Alberello arrives beautifully packaged in a custom kraft paper box.
                Everything you need is inside — just open, assemble, and enjoy.
              </p>

              <ul className="mt-8 space-y-4">
                {boxContents.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="mt-0.5 w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-forest" />
                    </div>
                    <div>
                      <p className="font-semibold text-bark">{item.title}</p>
                      <p className="text-sm text-wood-dark mt-0.5">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: image gallery */}
            <ImageGallery images={boxImages} alt="Alberello box" />
          </div>
        </div>
      </section>

      {/* Customize CTA */}
      <section className="bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Want to Customize?
          </h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto leading-relaxed">
            Choose custom colors for your rings and ornaments. Mix natural wood with painted
            accents, or go fully custom with your own color scheme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:info@itsagreentree.com"
              className="px-8 py-3.5 bg-white text-forest font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-warm transition-colors shadow-lg"
            >
              Email Us to Customize
            </a>
            <Link
              to="/"
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
