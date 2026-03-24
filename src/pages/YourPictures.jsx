import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const pictures = [
  { src: '/images/your-trees/1.jpg', alt: 'Community tree 1' },
  { src: '/images/your-trees/2.jpg', alt: 'Community tree 2' },
  { src: '/images/your-trees/3.jpg', alt: 'Community tree 3' },
  { src: '/images/your-trees/4.jpg', alt: 'Community tree 4' },
  { src: '/images/your-trees/5.jpg', alt: 'Community tree 5' },
  { src: '/images/your-trees/6.jpg', alt: 'Community tree 6' },
  { src: '/images/your-trees/7.jpg', alt: 'Community tree 7' },
  { src: '/images/your-trees/8.jpg', alt: 'Community tree 8' },
  { src: '/images/your-trees/9.jpg', alt: 'Community tree 9' },
  { src: '/images/hero.jpg', alt: 'Alberello in a home' },
]

export default function YourPictures() {
  const [lightbox, setLightbox] = useState(null)

  const next = () => setLightbox((i) => (i + 1) % pictures.length)
  const prev = () => setLightbox((i) => (i - 1 + pictures.length) % pictures.length)

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
            Community
          </p>
          <h1 className="font-display text-4xl font-bold text-bark">
            Your Pictures
          </h1>
          <p className="mt-3 text-wood-dark max-w-md mx-auto">
            See how Alberello owners around the world decorate their trees.
            Share yours at{' '}
            <a
              href="mailto:info@itsagreentree.com"
              className="text-forest hover:underline"
            >
              info@itsagreentree.com
            </a>
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {pictures.map((pic, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img
                  src={pic.src}
                  alt={pic.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3"
          >
            <ChevronRight size={32} />
          </button>
          <img
            src={pictures[lightbox].src}
            alt={pictures[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
