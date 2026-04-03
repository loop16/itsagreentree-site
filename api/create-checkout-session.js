const Stripe = require('stripe')

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { productName, variantLabel, price, slug, quantity = 1 } = req.body

  if (!productName || !price) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const origin = req.headers.origin || 'https://itsagreentree-site.vercel.app'

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: variantLabel ? `${productName} — ${variantLabel}` : productName,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/product/${slug}`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
