import { Link } from 'react-router-dom'
import { isSoldOut } from '../data/products'

export default function ProductCard({ product }) {
  const soldOut = isSoldOut(product)
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-warm">
        <img
          src={product.thumbnail}
          alt={product.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            soldOut ? 'opacity-60' : ''
          }`}
        />
        {soldOut && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-bark text-white text-xs font-semibold uppercase tracking-wider shadow">
            Sold Out
          </span>
        )}
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-bark group-hover:text-forest transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-wood-dark mt-1">{product.tagline}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-semibold text-forest">${product.price}</span>
          <span className="text-xs font-medium uppercase tracking-wider text-sage opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
            {soldOut ? 'Sold Out' : 'View Details →'}
          </span>
        </div>
      </div>
    </Link>
  )
}
