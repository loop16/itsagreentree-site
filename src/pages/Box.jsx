import { Link } from 'react-router-dom'
import { Package, ArrowRight } from 'lucide-react'
import ImageGallery from '../components/ImageGallery'

const boxContents = [
  {
    title: 'Tree Rings',
    description: '7 graduated birch plywood rings that form the tree silhouette.',
  },
  {
    title: 'Wire Supports',
    description: 'Coated steel wires to connect and suspend the rings.',
  },
  {
    title: 'Wooden Ornaments',
    description: '24 laser-cut birch decorations — stars, snowflakes, moons, and more.',
  },
  {
    title: 'Star Topper',
    description: 'A beautiful star for the top of your tree.',
  },
  {
    title: 'Assembly Instructions',
    description: 'Step-by-step guide. Assembly takes about 15 minutes.',
  },
  {
    title: 'Hanging Hook',
    description: 'Ceiling hook for suspending your Alberello.',
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
      {/* Hero */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 mb-6 rounded-full bg-forest/10 flex items-center justify-center">
                <Package className="text-forest" size={24} />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-bark">
                What's in the Box
              </h1>
              <p className="mt-4 text-wood-dark leading-relaxed text-lg">
                Every Alberello arrives beautifully packaged in a custom kraft paper box.
                Everything you need is inside — just open, assemble, and enjoy.
              </p>
              <p className="mt-3 text-wood-dark leading-relaxed">
                The flat-pack design means your tree stores in just a few centimeters of space.
                No attic, no garage, no mess. Slide it under a bed or tuck it in a closet.
              </p>
            </div>
            <ImageGallery images={boxImages} alt="Alberello box" />
          </div>
        </div>
      </section>

      {/* Contents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
            Everything Included
          </p>
          <h2 className="font-display text-3xl font-bold text-bark">
            Inside Your Alberello Box
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boxContents.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-sage-light/10"
            >
              <h3 className="font-display text-lg font-semibold text-bark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-wood-dark leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customize CTA */}
      <section className="bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Want to Customize?
          </h2>
          <p className="mt-4 text-sage-light/80 max-w-lg mx-auto leading-relaxed">
            Choose custom colors for your rings and ornaments. Mix natural wood with painted
            accents, or go fully custom with your own color scheme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-forest font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-warm transition-colors shadow-lg"
            >
              Contact Us to Customize
            </Link>
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
