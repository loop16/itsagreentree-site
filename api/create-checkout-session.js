import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { productName, variantLabel, price, slug, description, quantity = 1 } = req.body

  if (!productName || !price) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const origin = req.headers.origin || 'https://itsagreentree-site.vercel.app'

  try {
    const [usRate, intlRate] = await Promise.all([
      stripe.shippingRates.create({
        display_name: 'US Shipping',
        type: 'fixed_amount',
        fixed_amount: { amount: 3500, currency: 'usd' },
      }),
      stripe.shippingRates.create({
        display_name: 'International Shipping',
        type: 'fixed_amount',
        fixed_amount: { amount: 5000, currency: 'usd' },
      }),
    ])

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: variantLabel ? `${productName} — ${variantLabel}` : productName,
              description: description || undefined,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity,
        },
      ],
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['ZZ'],
      },
      shipping_options: [
        { shipping_rate: usRate.id },
        { shipping_rate: intlRate.id },
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/product/${slug}`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
