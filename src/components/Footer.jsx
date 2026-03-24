import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bark text-warm/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/images/logo-black.png"
              alt="it's a green tree"
              className="h-16 w-16 brightness-0 invert opacity-80 mb-4"
            />
            <p className="font-display text-lg text-white">it's a green tree</p>
            <p className="text-xs tracking-[0.15em] uppercase mt-1 opacity-60">
              A Holiday Tree Made in Brooklyn
            </p>
            <p className="text-xs mt-1 opacity-60">Est. 2018 &middot; Patent Pending</p>
          </div>

          {/* Trees */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Trees
            </h4>
            <ul className="space-y-2">
              <li><Link to="/product/alberello" className="text-sm hover:text-white transition-colors">Alberello</Link></li>
              <li><Link to="/product/the-craig" className="text-sm hover:text-white transition-colors">The Craig</Link></li>
              <li><Link to="/product/decorations" className="text-sm hover:text-white transition-colors">Decorations</Link></li>
              <li><Link to="/product/minitree" className="text-sm hover:text-white transition-colors">miniTREE</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">Reasons</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/your-pictures" className="text-sm hover:text-white transition-colors">Your Pictures</Link></li>
              <li><Link to="/story" className="text-sm hover:text-white transition-colors">Story / Video</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@itsagreentree.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  info@itsagreentree.com
                </a>
              </li>
              <li className="text-sm opacity-60">Brooklyn, New York</li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 px-5 py-2 border border-warm/30 text-sm text-white rounded-full hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} it's a green tree. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs opacity-50 hover:opacity-100 transition-opacity"
            >
              Facebook
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs opacity-50 hover:opacity-100 transition-opacity"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
