import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Story() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
            Our Story
          </p>
          <h1 className="font-display text-4xl font-bold text-bark">
            The Alberello Story
          </h1>
          <p className="mt-4 text-wood-dark max-w-lg mx-auto leading-relaxed">
            Watch how the Alberello is made and see it come to life in homes across
            the world.
          </p>
        </div>

        {/* Video */}
        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
          <iframe
            src="https://player.vimeo.com/video/371690517?title=0&byline=0&portrait=0"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="The Alberello Story"
          />
        </div>

        {/* Story text */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="font-display text-2xl font-bold text-bark">
              How It All Began
            </h2>
            <p className="mt-4 text-wood-dark leading-relaxed">
              The Alberello was born in Brooklyn in 2018, from a simple question: why do we
              cut down millions of trees every year, only to throw them away weeks later?
            </p>
            <p className="mt-3 text-wood-dark leading-relaxed">
              We set out to create something different — a holiday tree that's beautiful,
              sustainable, and built to last. Using birch plywood, laser-cutting technology,
              and old-fashioned craftsmanship, we designed a tree that hangs like a mobile,
              stores flat like a book, and brings joy year after year.
            </p>
            <p className="mt-3 text-wood-dark leading-relaxed">
              "Alberello" means "little tree" in Italian — a nod to the warmth and simplicity
              at the heart of our design. Each tree is handmade in our Brooklyn workshop with
              care and attention to detail.
            </p>
            <p className="mt-3 text-wood-dark leading-relaxed">
              Today, Alberellos hang in homes across the country, each one decorated uniquely
              by its owner. We love seeing how people make them their own — with our wooden
              ornaments, with lights, with family heirlooms, or with their own hand-painted
              creations.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors shadow-lg"
            >
              Explore Our Trees
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/your-pictures"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-bark/20 text-bark font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-warm transition-colors"
            >
              See Your Pictures
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
