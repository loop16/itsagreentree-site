import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is the Alberello made of?',
    a: 'The Alberello is made from sustainably sourced birch plywood. The rings and decorations are laser-cut and hand-finished in our Brooklyn workshop. The support wires are coated steel.',
  },
  {
    q: 'How big is the Alberello?',
    a: 'The full-size Alberello is approximately 5 feet tall and 3 feet wide at the base when assembled. The miniTREE is about 18 inches tall.',
  },
  {
    q: 'How does it hang?',
    a: 'The Alberello hangs from a single point on the ceiling using the included hook. It can also be used with a floor stand (sold separately). It is very lightweight — only about 8 pounds fully decorated.',
  },
  {
    q: 'How long does assembly take?',
    a: 'First-time assembly takes about 15-20 minutes. After that, you\'ll get faster each year. The rings stack in order and the wires clip in easily. Full instructions are included.',
  },
  {
    q: 'How does it store?',
    a: 'The Alberello stores flat in its original box, which is about the size of a large pizza box. Slide it under a bed, in a closet, or on a shelf. No more fighting with bulky storage bags.',
  },
  {
    q: 'Can I customize the colors?',
    a: 'Yes! We offer custom color options for both the rings and ornaments. Contact us to discuss your vision — we love creating one-of-a-kind trees.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Currently we ship within the United States. International shipping is available on request — please contact us for a quote.',
  },
  {
    q: 'What is your return policy?',
    a: 'We want you to love your Alberello. If you\'re not satisfied, contact us within 30 days of delivery and we\'ll work with you to make it right.',
  },
  {
    q: 'Can I add more decorations?',
    a: 'Absolutely! You can hang your own ornaments, lights, tinsel — anything you like. The rings have holes for attaching decorations with string or small hooks. Additional decoration sets are also available.',
  },
  {
    q: 'Is it safe for kids and pets?',
    a: 'The Alberello is lightweight and has no sharp edges. Since it hangs from the ceiling, it\'s out of reach of small children and pets. The miniTREE on a tabletop is also very stable with its star-shaped base.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-sage-light/20">
      <button
        className="w-full flex items-start justify-between py-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-lg font-semibold text-bark group-hover:text-forest transition-colors pr-8">
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 mt-1 text-sage transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-wood-dark leading-relaxed pr-12">{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-14">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-2">
          Got Questions?
        </p>
        <h1 className="font-display text-4xl font-bold text-bark">
          Frequently Asked Questions
        </h1>
      </div>
      <div>
        {faqs.map((faq) => (
          <FAQItem key={faq.q} faq={faq} />
        ))}
      </div>
      <div className="mt-12 text-center bg-warm rounded-2xl p-10">
        <p className="font-display text-lg font-semibold text-bark">
          Still have questions?
        </p>
        <p className="mt-2 text-wood-dark text-sm">
          We'd love to hear from you.
        </p>
        <a
          href="mailto:info@itsagreentree.com"
          className="inline-block mt-4 px-8 py-3 bg-forest text-white font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors"
        >
          Email Us
        </a>
      </div>
    </section>
  )
}
