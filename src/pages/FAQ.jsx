import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

function FAQItem({ q, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-sage-light/20">
      <button
        className="w-full flex items-start justify-between py-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-lg font-semibold text-bark group-hover:text-forest transition-colors pr-8">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 mt-1 text-sage transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="pb-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

function Bubble({ children }) {
  return (
    <div className="bg-warm rounded-2xl px-6 py-5 text-wood-dark leading-relaxed">
      {children}
    </div>
  )
}

function TextAnswer({ children }) {
  return <Bubble><p>{children}</p></Bubble>
}

export default function FAQ() {
  return (
    <>
      {/* Hero image */}
      <div className="w-full h-64 sm:h-80 overflow-hidden">
        <img
          src="/images/trees/threetrees.jpg"
          alt="Alberello trees"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
            Got Questions?
          </p>
          <h1 className="font-display text-4xl font-bold text-bark">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Image strip */}
        <div className="grid grid-cols-3 gap-3 mb-14 rounded-xl overflow-hidden">
          <img src="/images/trees/alberello-below.jpg" alt="Alberello" className="w-full aspect-square object-cover" />
          <img src="/images/decorations/color-decor.jpg" alt="Decorations" className="w-full aspect-square object-cover" />
          <img src="/images/box/box-closed.jpg" alt="Box" className="w-full aspect-square object-cover" />
        </div>

        {/* FAQ list */}
        <div>

          <FAQItem q="What is the Alberello made of?">
            <TextAnswer>
              The Alberello is made from sustainably sourced 0.25 inch / 5 mm thick birch plywood. The rings and decorations are laser-cut and hand-finished in our Brooklyn workshop. The support wires are coated steel.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="How tall is the Alberello? How much does it weigh?">
            <div className="space-y-4">
              <img
                src="/images/faq/size-chart.jpg"
                alt="Alberello size chart — 78 inches / 188cm tall, 36 inch / 92cm bottom ring"
                className="w-full rounded-2xl object-contain bg-[#efefef]"
              />
              <Bubble>
                <p>The Alberello is made from 0.25 inch / 5 mm thick Birch Plywood. It is <strong>54 inches / 137 cm</strong> from top hook to the bottom ring. With ornaments on top and bottom it averages 12 inches / 30 cm more in height, making a total of about <strong>78 inches / 188 cm</strong>. The bottom ring has a diameter of <strong>36 inches / 92 cm</strong>.</p>
                <p className="mt-3">The tree weighs <strong>4 lb / 1.8 kg</strong> without decorations. With 2 sets of decorations it goes up to <strong>6.5 lb / 2.8 kg</strong>. We have tested the tree and it comfortably held <strong>8 lb / 3.6 kg</strong> of decorations, but we do not recommend going much beyond that.</p>
                <p className="mt-3">The miniTREE stands <strong>24 in / 61 cm</strong> tall without the star topper, and <strong>28 in / 71 cm</strong> with the star topper.</p>
              </Bubble>
            </div>
          </FAQItem>

          <FAQItem q="How long does assembly take?">
            <TextAnswer>
              No more than ten minutes to string the rings together, and five minutes to put the anchor and screw in the ceiling. After your first time, you'll be even faster.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="Do you have a smaller tree for apartment living?">
            <TextAnswer>
              Yes — the miniTREE is our tabletop model, perfect for smaller spaces. You can also reduce the full Alberello's size by removing the bottom ring, or additional rings for even smaller dimensions. Photos of this are available on our Your Pictures page.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="How does it hang? Can I use a floor stand?">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
                <img src="/images/faq/tree-on-stand.jpg" alt="Alberello on floor stand" className="w-full aspect-square object-cover object-top" />
                <img src="/images/faq/tree-stand-base.jpg" alt="Floor stand base" className="w-full aspect-square object-cover" />
              </div>
              <Bubble>
                <p>The Alberello hangs from a single point on the ceiling using the included hook and screw. It can also be displayed using a floor stand made from a 6 ft. pine square stick or wooden curtain rod with a standard Christmas tree stand from any hardware store.</p>
              </Bubble>
            </div>
          </FAQItem>

          <FAQItem q="Some rings arrived slightly warped. Is this normal?">
            <TextAnswer>
              Yes — wood naturally responds to moisture and temperature changes. Once hanging and decorated, any warping becomes invisible. If warping seems unreasonable, contact us with photos and we'll make it right.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="How does it store?">
            <TextAnswer>
              The Alberello stores flat in its original box (36 × 36 × 1 in), about the size of a large pizza box. Slide it under a bed, in a closet, or on a shelf. Store in a dry room, laying flat if possible — humid conditions may cause warping.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="What paints should I use to decorate?">
            <TextAnswer>
              Use thin washes of water-based paints — acrylics work best. Let the tree and decorations dry between coats. Do not use too much water as it may cause the wood to warp. Collage and glitter are also great, and it's a wonderful activity with children.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="Can I customize the colors?">
            <TextAnswer>
              Yes! We offer custom color options for both the rings and ornaments. Contact us to discuss your vision — we love creating one-of-a-kind trees.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="Do you ship internationally?">
            <TextAnswer>
              Currently we ship within the United States. International shipping is available on request — please contact us for a quote.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="What is your return policy?">
            <TextAnswer>
              We want you to love your Alberello. If you're not satisfied, contact us within 30 days of delivery and we'll work with you to make it right.
            </TextAnswer>
          </FAQItem>

          <FAQItem q="Is it safe for kids and pets?">
            <TextAnswer>
              The Alberello is lightweight and has no sharp edges. Since it hangs from the ceiling, it's naturally out of reach of small children and pets. The miniTREE on a tabletop is also very stable with its star-shaped base.
            </TextAnswer>
          </FAQItem>

        </div>

        {/* Image break */}
        <div className="grid grid-cols-2 gap-3 mt-14 rounded-xl overflow-hidden">
          <img src="/images/trees/craig-decor1.jpg" alt="Decorated Craig" className="w-full aspect-video object-cover" />
          <img src="/images/trees/customized.jpg" alt="Customized tree" className="w-full aspect-video object-cover" />
        </div>

        <div className="mt-12 text-center bg-warm rounded-2xl p-10">
          <p className="font-display text-lg font-semibold text-bark">Still have questions?</p>
          <p className="mt-2 text-wood-dark text-sm">We'd love to hear from you.</p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-8 py-3 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}
