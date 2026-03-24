import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Package, Paintbrush } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, customizeInfo } from '../data/products'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/trees/threetrees.jpg"
            alt="Three Alberello trees"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="relative max-w-2xl">
            {/* Blurred glow that hugs the text area */}
            {/* Per-element blur glows that hug each text block */}
            <p className="relative z-10 text-forest text-sm font-medium tracking-[0.25em] uppercase mb-4">
              <span className="relative">
                <span className="absolute -inset-x-4 -inset-y-2 -z-10 pointer-events-none" aria-hidden="true">
                  <svg width="100%" height="100%" style={{ overflow: 'visible' }}><defs><filter id="b1" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur in="SourceGraphic" stdDeviation="18" /></filter></defs><rect width="100%" height="100%" fill="rgba(240,244,240,0.95)" filter="url(#b1)" /></svg>
                </span>
                Handmade in Brooklyn &middot; Est. 2018
              </span>
            </p>
            <h1 className="relative z-10 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-tight">
              <span className="relative inline">
                <span className="absolute -inset-x-5 -inset-y-2 -z-10 pointer-events-none" aria-hidden="true">
                  <svg width="100%" height="100%" style={{ overflow: 'visible' }}><defs><filter id="b2" x="-50%" y="-80%" width="200%" height="260%"><feGaussianBlur in="SourceGraphic" stdDeviation="22" /></filter></defs><rect width="100%" height="100%" fill="rgba(240,244,240,0.95)" filter="url(#b2)" /></svg>
                </span>
                A Modern Holiday Tree
              </span>{' '}
              <span className="relative inline">
                <span className="absolute -inset-x-5 -inset-y-2 -z-10 pointer-events-none" aria-hidden="true">
                  <svg width="100%" height="100%" style={{ overflow: 'visible' }}><defs><filter id="b3" x="-50%" y="-80%" width="200%" height="260%"><feGaussianBlur in="SourceGraphic" stdDeviation="22" /></filter></defs><rect width="100%" height="100%" fill="rgba(240,244,240,0.95)" filter="url(#b3)" /></svg>
                </span>
                <span className="text-forest italic">That Lasts Forever</span>
              </span>
            </h1>
            <p className="relative z-10 mt-6 text-lg text-[#444] max-w-lg leading-relaxed">
              <span className="relative">
                <span className="absolute -inset-y-6 -left-6 -z-10 pointer-events-none" style={{ right: '-8rem' }} aria-hidden="true">
                  <svg width="100%" height="100%" style={{ overflow: 'visible' }}><defs><filter id="b4" x="-30%" y="-60%" width="200%" height="220%"><feGaussianBlur in="SourceGraphic" stdDeviation="42" /></filter></defs><rect width="100%" height="100%" fill="rgba(240,244,240,0.97)" filter="url(#b4)" /></svg>
                </span>
                The Alberello is a sustainable, beautifully crafted alternative to the
                traditional Christmas tree. Made from birch plywood, designed to be treasured
                for generations.
              </span>
            </p>
            <div className="relative z-10 mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-8 py-3.5 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Trees
              </a>
              <span className="relative">
                <span className="absolute -inset-x-3 -inset-y-1 -z-10 pointer-events-none" aria-hidden="true">
                  <svg width="100%" height="100%" style={{ overflow: 'visible' }}><defs><filter id="b5" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur in="SourceGraphic" stdDeviation="14" /></filter></defs><rect width="100%" height="100%" fill="rgba(240,244,240,0.9)" filter="url(#b5)" /></svg>
                </span>
                <Link
                  to="/story"
                  className="px-8 py-3.5 border border-[#333]/30 text-[#1a1a1a] font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-white/30 transition-colors inline-block"
                >
                  Watch Our Story
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-white border-b border-sage-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest/10 flex items-center justify-center">
                <Leaf className="text-forest" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-bark">Sustainable</h3>
              <p className="text-sm text-wood-dark mt-2 leading-relaxed">
                No more cutting down trees every year. One Alberello lasts a lifetime.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest/10 flex items-center justify-center">
                <Package className="text-forest" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-bark">Flat-Pack</h3>
              <p className="text-sm text-wood-dark mt-2 leading-relaxed">
                Stores flat in its elegant box. No bulky storage, no mess, no needles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-forest/10 flex items-center justify-center">
                <Paintbrush className="text-forest" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-bark">Customizable</h3>
              <p className="text-sm text-wood-dark mt-2 leading-relaxed">
                Choose your colors, mix ornaments, and make it uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
            Our Collection
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-bark">
            Choose Your Tree
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Customize CTA */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={customizeInfo.image}
                  alt="Customized Alberello"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-warm hidden lg:block">
                <img
                  src="/images/decorations/color-decor.jpg"
                  alt="Colored decorations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
                Make It Yours
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-bark">
                {customizeInfo.title}
              </h2>
              <p className="mt-4 text-wood-dark leading-relaxed">
                {customizeInfo.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's in the box teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
              Thoughtfully Packaged
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-bark">
              What's in the Box
            </h2>
            <p className="mt-4 text-wood-dark leading-relaxed">
              Every Alberello arrives in a beautiful kraft paper box, flat-packed for easy
              storage. Inside you'll find your tree rings, wire supports, decorations, a
              star topper, and assembly instructions. Setup takes just minutes.
            </p>
            <Link
              to="/box"
              className="inline-flex items-center gap-2 mt-6 text-forest font-semibold text-sm tracking-wide uppercase hover:text-forest-light transition-colors"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/box/box-closed.jpg"
                alt="Alberello packaging"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-bark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage-light mb-2">
              Community
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Your Trees
            </h2>
            <p className="mt-3 text-warm/60 max-w-md mx-auto">
              See how our community decorates their Alberellos
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={`/images/your-trees/${i}.jpg`}
                  alt={`Community tree ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/your-pictures"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-white/10 transition-colors"
            >
              See All Pictures
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
