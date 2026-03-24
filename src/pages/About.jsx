import { Link } from 'react-router-dom'
import { Leaf, Recycle, Heart, TreePine, ArrowRight } from 'lucide-react'

const reasons = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    text: 'Over 30 million real trees are cut down every year in the US alone. The Alberello is a sustainable alternative that lasts a lifetime.',
  },
  {
    icon: Recycle,
    title: 'Zero Waste',
    text: 'No needles to vacuum, no dried-out tree to dispose of. Your Alberello stores flat and comes out perfect every year.',
  },
  {
    icon: Heart,
    title: 'Handmade with Love',
    text: 'Each tree is individually crafted in our Brooklyn workshop from sustainably sourced birch plywood.',
  },
  {
    icon: TreePine,
    title: 'Beautiful Design',
    text: 'The Alberello is a conversation piece. Its elegant spiral design fills a room with warmth and wonder.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/street/street1.jpeg"
            alt="Trees on the street"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage-light mb-3">
            Why Alberello
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Reasons to Go Green
          </h1>
          <p className="mt-6 text-lg text-warm/70 max-w-xl mx-auto leading-relaxed">
            We believe holiday traditions should be sustainable, beautiful, and lasting.
            Here's why we created the Alberello.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-10 shadow-sm border border-sage-light/10"
            >
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                <reason.icon className="text-forest" size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-bark">
                {reason.title}
              </h3>
              <p className="mt-3 text-wood-dark leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Story */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
                Our Story
              </p>
              <h2 className="font-display text-3xl font-bold text-bark">
                Born in Brooklyn
              </h2>
              <p className="mt-4 text-wood-dark leading-relaxed">
                The Alberello was born from a simple idea: what if your holiday tree could be
                as modern, sustainable, and unique as you are? Designed and handmade in Brooklyn
                since 2018, each tree is a labor of love.
              </p>
              <p className="mt-3 text-wood-dark leading-relaxed">
                "Alberello" means "little tree" in Italian. Our spiral design is inspired by
                the elegance of minimalism and the joy of the holiday season. Every tree is
                made from sustainably sourced birch plywood and hand-finished in our workshop.
              </p>
              <Link
                to="/story"
                className="inline-flex items-center gap-2 mt-6 text-forest font-semibold text-sm tracking-wide uppercase hover:text-forest-light transition-colors"
              >
                Watch Our Video
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/hero.jpg"
                alt="Alberello in a home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-display text-3xl font-bold text-bark">
          Ready to Make the Switch?
        </h2>
        <p className="mt-4 text-wood-dark max-w-lg mx-auto">
          Join hundreds of families who have chosen a more sustainable, more beautiful
          holiday tradition.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3.5 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors shadow-lg"
        >
          Explore Our Trees
        </Link>
      </section>
    </>
  )
}
