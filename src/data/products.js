export const products = [
  {
    slug: 'alberello',
    name: 'The Alberello',
    tagline: 'The Original Hanging Tree',
    price: 275,
    variants: [
      { label: 'Plain', price: 275 },
      { label: 'With 1 Set of Decorations', price: 340 },
      { label: 'With 2 Sets of Decorations', price: 390 },
    ],
    description:
      'The Alberello is our signature hanging holiday tree — the original. Beautiful spiral rings crafted from natural birch plywood, laser-cut and hand-assembled in Brooklyn. A modern, sustainable alternative to the traditional Christmas tree that hangs like a mobile and stores flat like a book.',
    features: [
      'Handmade in Brooklyn, NY',
      'Natural birch plywood',
      'Hangs from ceiling or stand',
      'Flat-pack storage',
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
    tagline: 'Painted Green Edition',
    price: 315,
    variants: [
      { label: 'Plain', price: 315 },
      { label: 'With 1 Set of Decorations', price: 375 },
      { label: 'With 2 Sets of Decorations', price: 425 },
    ],
    description:
      'The Craig is our green-painted edition — the same beautiful Alberello spiral design, hand-painted in a rich green finish. Bold, festive, and eye-catching. Each ring is carefully painted by hand in our Brooklyn workshop.',
    features: [
      'Hand-painted green finish',
      'Handmade in Brooklyn, NY',
      'Hangs from ceiling or stand',
      'Flat-pack storage',
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
    price: 120,
    variants: [
      { label: '1 Set (24 ornaments)', price: 120 },
      { label: '2 Sets (48 ornaments)', price: 200 },
    ],
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
    price: 115,
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
      '/images/mini/plain.jpg',
      '/images/mini/red.jpg',
      '/images/mini/blue.jpg',
      '/images/mini/colored.jpg',
    ],
    thumbnail: '/images/mini/plain.jpg',
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
