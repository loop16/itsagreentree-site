import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const treeLinks = [
  { to: '/product/alberello', label: 'Alberello' },
  { to: '/product/the-craig', label: 'The Craig' },
  { to: '/product/decorations', label: 'Decorations' },
  { to: '/product/minitree', label: 'miniTREE' },
]

const aboutLinks = [
  { to: '/about', label: 'Reasons' },
  { to: '/faq', label: 'FAQ' },
  { to: '/your-pictures', label: 'Your Pictures' },
  { to: '/contact', label: 'Contact' },
  { to: '/story', label: 'Story / Video' },
]

function DropdownDesktop({ label, links }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-bark hover:text-forest transition-colors py-2">
        {label}
        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-xl shadow-lg border border-sage-light/30 py-2 min-w-[180px]">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-5 py-2.5 text-sm transition-colors ${
                  isActive
                    ? 'text-forest font-semibold bg-warm'
                    : 'text-bark hover:text-forest hover:bg-warm'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [treesOpen, setTreesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sage-light/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="/images/favicon-tree.png"
              alt="it's a green tree"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <span
                className="block text-[1.75rem] font-bold text-bark leading-none tracking-[0.06em]"
                style={{ fontFamily: 'var(--font-avenir)' }}
              >
                it's a green tree
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-wood-dark mt-1">
                A Holiday Tree Made in Brooklyn
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-colors py-2 ${
                  isActive ? 'text-forest' : 'text-bark hover:text-forest'
                }`
              }
            >
              Home
            </NavLink>
            <DropdownDesktop label="Trees" links={treeLinks} />
            <NavLink
              to="/box"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-colors py-2 ${
                  isActive ? 'text-forest' : 'text-bark hover:text-forest'
                }`
              }
            >
              What's in the Box
            </NavLink>
            <DropdownDesktop label="About" links={aboutLinks} />
            <a
              href="/#products"
              className="ml-2 px-6 py-2.5 bg-forest text-white text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-forest-light transition-colors shadow-md hover:shadow-lg"
            >
              Shop
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-bark"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-sage-light/20 pt-4">
            <NavLink
              to="/"
              end
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium uppercase tracking-wide text-bark"
            >
              Home
            </NavLink>

            <button
              className="flex items-center justify-between w-full py-3 text-sm font-medium uppercase tracking-wide text-bark"
              onClick={() => setTreesOpen(!treesOpen)}
            >
              Trees
              <ChevronDown
                size={16}
                className={`transition-transform ${treesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {treesOpen && (
              <div className="pl-4 space-y-1">
                {treeLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-wood-dark hover:text-forest"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink
              to="/box"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium uppercase tracking-wide text-bark"
            >
              What's in the Box
            </NavLink>

            <button
              className="flex items-center justify-between w-full py-3 text-sm font-medium uppercase tracking-wide text-bark"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
              <ChevronDown
                size={16}
                className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {aboutOpen && (
              <div className="pl-4 space-y-1">
                {aboutLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-wood-dark hover:text-forest"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}

            <a
              href="/#products"
              className="mt-4 block text-center px-6 py-3 bg-forest text-white text-sm font-semibold tracking-wide uppercase rounded-full"
            >
              Shop
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
