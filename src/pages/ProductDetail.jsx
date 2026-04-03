import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Check, ShoppingCart, Loader } from 'lucide-react'
import { getProduct, products } from '../data/products'
import ImageGallery from '../components/ImageGallery'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const [selectedVariant, setSelectedVariant] = useState(0)

  useEffect(() => {
    setSelectedVariant(0)
  }, [slug])

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-bark">Product not found</h1>
        <Link to="/" className="mt-4 inline-block text-forest hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    )
  }

  const [loading, setLoading] = useState(false)
  const otherProducts = products.filter((p) => p.slug !== slug)
  const activeVariant = product.variants ? product.variants[selectedVariant] : null
  const displayPrice = activeVariant ? activeVariant.price : product.price

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: product.slug,
          productName: product.name,
          variantLabel: activeVariant?.label,
          price: displayPrice,
        }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else throw new Error(data.error)
    } catch (err) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-wood-dark hover:text-forest transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to All Trees
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <ImageGallery images={product.images} alt={product.name} />

          {/* Info */}
          <div className="lg:py-4">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
              {product.tagline}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-bark">
              {product.name}
            </h1>
            <p className="mt-2 text-3xl font-semibold text-forest">${displayPrice}</p>
            <p className="mt-6 text-wood-dark leading-relaxed">{product.description}</p>

            {/* Variants */}
            {product.variants && (
              <div className="mt-6">
                <p className="text-sm font-medium text-bark mb-3">Options</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedVariant === i
                          ? 'bg-forest text-white border-forest'
                          : 'bg-white text-bark border-sage-light/50 hover:border-forest'
                      }`}
                    >
                      {variant.label} — ${variant.price}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <ul className="mt-8 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-forest" />
                  </div>
                  <span className="text-sm text-bark">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Buy button */}
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="mt-10 w-full sm:w-auto px-10 py-4 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader size={18} className="animate-spin" /> : <ShoppingCart size={18} />}
              {loading ? 'Redirecting…' : `Buy Now — $${displayPrice}`}
            </button>

            <p className="mt-4 text-xs text-wood-dark/60">
              Free shipping within the US. Handmade to order.
            </p>
          </div>
        </div>
      </div>

      {/* Related products */}
      {otherProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-sage-light/20 mt-12">
          <h2 className="font-display text-2xl font-bold text-bark mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.slice(0, 3).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
