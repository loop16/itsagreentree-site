import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square overflow-hidden bg-warm">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-bark group-hover:text-forest transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-wood-dark mt-1">{product.tagline}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-semibold text-forest">${product.price}</span>
          <span className="text-xs font-medium uppercase tracking-wider text-sage opacity-0 group-hover:opacity-100 transition-opacity">
            View Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}
