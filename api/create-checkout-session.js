import { getProduct, isSoldOut } from '../src/data/products.js'

const ALL_COUNTRIES = [
  'AC','AD','AE','AF','AG','AI','AL','AM','AO','AQ','AR','AT','AU','AW','AX','AZ',
  'BA','BB','BD','BE','BF','BG','BH','BI','BJ','BL','BM','BN','BO','BQ','BR','BS',
  'BT','BV','BW','BY','BZ','CA','CD','CF','CG','CH','CI','CK','CL','CM','CN','CO',
  'CR','CV','CW','CY','CZ','DE','DJ','DK','DM','DO','DZ','EC','EE','EG','EH','ER',
  'ES','ET','FI','FJ','FK','FO','FR','GA','GB','GD','GE','GF','GG','GH','GI','GL',
  'GM','GN','GP','GQ','GR','GS','GT','GU','GW','GY','HK','HN','HR','HT','HU','ID',
  'IE','IL','IM','IN','IO','IQ','IS','IT','JE','JM','JO','JP','KE','KG','KH','KI',
  'KM','KN','KR','KW','KY','KZ','LA','LB','LC','LI','LK','LR','LS','LT','LU','LV',
  'LY','MA','MC','MD','ME','MF','MG','MK','ML','MM','MN','MO','MQ','MR','MS','MT',
  'MU','MV','MW','MX','MY','MZ','NA','NC','NE','NG','NI','NL','NO','NP','NR','NU',
  'NZ','OM','PA','PE','PF','PG','PH','PK','PL','PM','PN','PR','PS','PT','PY',
  'QA','RE','RO','RS','RU','RW','SA','SB','SC','SD','SE','SG','SH','SI','SJ','SK','SL',
  'SM','SN','SO','SR','SS','ST','SV','SX','SZ','TA','TC','TD','TF','TG','TH','TJ',
  'TK','TL','TM','TN','TO','TR','TT','TV','TW','TZ','UA','UG','US','UY','UZ','VA',
  'VC','VE','VG','VN','VU','WF','WS','XK','YE','YT','ZA','ZM','ZW',
]

async function stripeRequest(path, params, secretKey) {
  const body = new URLSearchParams()
  function encode(obj, prefix) {
    for (const [k, v] of Object.entries(obj)) {
      const key = prefix ? `${prefix}[${k}]` : k
      if (Array.isArray(v)) {
        v.forEach((item, i) => {
          if (item !== null && typeof item === 'object') {
            encode(item, `${key}[${i}]`)
          } else {
            body.append(`${key}[${i}]`, String(item))
          }
        })
      } else if (v !== null && typeof v === 'object') {
        encode(v, key)
      } else if (v !== undefined && v !== null) {
        body.append(key, String(v))
      }
    }
  }
  encode(params, '')

  const res = await fetch(`https://api.stripe.com/v1${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  })
  return res.json()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { productName, variantLabel, price, slug, description, shippingZone, quantity = 1, skipShipping = false } = req.body

  if (!productName || !price) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const catalogProduct = getProduct(slug)
  if (catalogProduct && isSoldOut(catalogProduct)) {
    return res.status(409).json({ error: 'This item is sold out.' })
  }

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return res.status(500).json({ error: 'Stripe key not configured' })
  }

  const origin = req.headers.origin || 'https://itsagreentree-site.vercel.app'
  const isUS = shippingZone !== 'international'
  const allowedCountries = isUS ? ['US', 'CA'] : ALL_COUNTRIES

  try {
    const sessionParams = {
      payment_method_types: ['card'],
      mode: 'payment',
      customer_creation: 'always',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: variantLabel ? `${productName} — ${variantLabel}` : productName,
            ...(description ? { description } : {}),
          },
          unit_amount: Math.round(price * 100),
        },
        quantity,
      }],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/product/${slug}`,
    }

    if (!skipShipping) {
      const shippingRate = await stripeRequest('/shipping_rates', {
        display_name: isUS ? 'US Shipping' : 'International Shipping',
        type: 'fixed_amount',
        fixed_amount: { amount: isUS ? 3500 : 5000, currency: 'usd' },
      }, secretKey)

      if (shippingRate.error) {
        return res.status(500).json({ error: shippingRate.error.message })
      }

      sessionParams.shipping_options = [{ shipping_rate: shippingRate.id }]
      sessionParams.shipping_address_collection = { allowed_countries: allowedCountries }

      if (isUS) {
        sessionParams.custom_text = {
          shipping_address: {
            message: 'This shipping option covers the US and Canada only. If you need international shipping, please go back and select International Shipping.',
          },
        }
      }
    }

    const session = await stripeRequest('/checkout/sessions', sessionParams, secretKey)

    if (session.error) {
      return res.status(500).json({ error: session.error.message })
    }

    res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    res.status(500).json({ error: err.message })
  }
}
