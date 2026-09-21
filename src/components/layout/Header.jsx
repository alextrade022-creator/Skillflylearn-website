import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/site';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import Button from '../ui/Button';

/**
 * Fixed site header. Renders transparent over the home hero and switches to a
 * solid, blurred bar once the page is scrolled or on any inner page.
 * Collapses into a hamburger menu on narrow screens.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollPosition(40);
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const onDark = isHome && !scrolled; // light text over the hero
  const solid = scrolled || !isHome;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-80 backdrop-blur-[14px] transition-[background,box-shadow] duration-300 ${
        solid
          ? 'bg-white/95 shadow-[0_8px_30px_rgba(43,20,145,0.1)]'
          : 'bg-transparent shadow-none'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center gap-6 px-4 py-3.5 sm:px-6">
        <Link to="/" onClick={closeMenu} className="flex flex-none items-center">
          <img
            src="/assets/logo-blue.png"
            alt="Skillfly logo"
            className={`h-11 w-auto transition-[filter] duration-300 ${
              onDark ? 'brightness-0 invert' : ''
            }`}
          />
        </Link>

        <nav className="ml-auto flex items-center gap-1.5">
          {/* Desktop links */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-[10px] px-3.5 py-2.5 font-display text-[15px] tracking-[-0.01em] transition-colors hover:bg-primary/10 ${
                    onDark
                      ? isActive
                        ? 'font-bold text-white'
                        : 'font-medium text-white/80'
                      : isActive
                        ? 'font-bold text-primary-dark'
                        : 'font-medium text-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Button to="/contact" className="ml-2.5 flex-none whitespace-nowrap px-5 py-3">
            Enroll Now
          </Button>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 text-[22px] lg:hidden ${
              onDark ? 'text-white' : 'text-primary-dark'
            }`}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="flex animate-[sf-slidein_0.25s_ease_both] flex-col border-t border-ink/10 bg-white px-4 pb-4.5 pt-2 lg:hidden">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeMenu}
              className="border-b border-ink/5 px-2 py-3.5 font-display text-[17px] font-semibold text-ink"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
