export const products = [
  {
    slug: 'alberello',
    name: 'The Alberello',
    tagline: 'The Original Green Tree',
    price: 249,
    description:
      'Our signature hanging holiday tree. Hand-crafted spiral rings in classic green, the Alberello brings a modern, sustainable take on the traditional Christmas tree. Made from birch plywood, laser-cut and hand-painted in Brooklyn.',
    features: [
      'Handmade in Brooklyn, NY',
      'Sustainable birch plywood',
      'Hangs from ceiling or stand',
      'Includes 24 wooden ornaments',
      'Flat-pack storage',
      'Patent pending design',
    ],
    images: [
      '/images/trees/alberello-above.jpg',
      '/images/trees/alberello-below.jpg',
      '/images/trees/alberello-above-square.jpg',
    ],
    thumbnail: '/images/trees/alberello-above-square.jpg',
  },
  {
    slug: 'the-craig',
    name: 'The Craig',
    tagline: 'Natural Wood Elegance',
    price: 249,
    description:
      'The Craig is our natural wood edition — the same beautiful spiral design in unfinished birch. Warm, minimal, and timeless. Let the beauty of the natural wood grain shine through.',
    features: [
      'Natural birch plywood finish',
      'Handmade in Brooklyn, NY',
      'Includes 24 wooden ornaments',
      'Hangs from ceiling or stand',
      'Flat-pack storage',
      'Patent pending design',
    ],
    images: [
      '/images/trees/craig-above.jpg',
      '/images/trees/craig-below.jpg',
      '/images/trees/craig-above-square.jpg',
      '/images/trees/craig-decor.jpg',
      '/images/trees/craig-decor1.jpg',
      '/images/trees/craig-decor2.jpg',
    ],
    thumbnail: '/images/trees/craig-above-square.jpg',
  },
  {
    slug: 'decorations',
    name: 'The Decorations',
    tagline: 'Laser-Cut Wooden Ornaments',
    price: 49,
    description:
      'Beautiful laser-cut birch plywood ornaments designed to hang from your Alberello. Available in natural wood or hand-painted colors. Stars, snowflakes, moons, and more.',
    features: [
      'Set of 24 ornaments',
      'Laser-cut birch plywood',
      'Available in natural or colored',
      'Multiple shapes and designs',
      'Lightweight and durable',
    ],
    images: [
      '/images/decorations/decor1.jpg',
      '/images/decorations/decor2.jpg',
      '/images/decorations/color-decor.jpg',
      '/images/decorations/color-decor1.jpg',
      '/images/decorations/color-decor2.jpg',
      '/images/decorations/color-decor4.jpg',
      '/images/decorations/color-decor5.jpg',
    ],
    thumbnail: '/images/decorations/decor1.jpg',
  },
  {
    slug: 'minitree',
    name: 'The miniTREE',
    tagline: 'Tabletop Holiday Magic',
    price: 89,
    description:
      'A smaller, tabletop version of the Alberello. Stands on its own with a star-shaped base. Perfect for desks, mantels, or small spaces. Available in natural, red, blue, or custom colors.',
    features: [
      'Freestanding tabletop design',
      'Star-shaped wooden base',
      'Multiple color options',
      'Flat-pack storage',
      'Handmade in Brooklyn',
    ],
    images: [
      '/images/mini/minitree.jpg',
      '/images/mini/plain.jpg',
      '/images/mini/red.jpg',
      '/images/mini/blue.jpg',
      '/images/mini/colored.jpg',
      '/images/mini/minitree-pack.jpg',
    ],
    thumbnail: '/images/mini/minitree.jpg',
  },
]

export const customizeInfo = {
  title: 'Customize Your Tree',
  description:
    'Make it truly yours. Choose custom colors for your rings, mix and match painted ornaments, or go fully custom with your own color scheme. Contact us to discuss your vision.',
  image: '/images/trees/customized-square.jpg',
  images: [
    '/images/trees/customized.jpg',
    '/images/trees/customized-1.jpg',
    '/images/trees/customized-square.jpg',
    '/images/decorations/color-decor-sp1.jpg',
    '/images/decorations/color-decor-sp2.jpg',
  ],
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug)
}
