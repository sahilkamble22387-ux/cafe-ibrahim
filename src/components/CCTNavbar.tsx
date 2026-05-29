'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Visit Us', href: '#contact' },
];

export default function CCTNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-coffee/95 backdrop-blur-md shadow-lg shadow-coffee/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? 'bg-saffron text-white'
                  : 'bg-white/20 backdrop-blur-sm text-white'
              } group-hover:scale-110`}
            >
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span
                className={`font-display font-bold text-lg sm:text-xl transition-colors duration-300 ${
                  scrolled ? 'text-warm-cream' : 'text-white'
                }`}
              >
                CCT
              </span>
              <span
                className={`hidden sm:inline font-body text-xs ml-2 transition-colors duration-300 ${
                  scrolled ? 'text-caramel' : 'text-warm-cream/70'
                }`}
              >
                Cafe Coffee Treat
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors duration-300 hover:text-saffron ${
                  scrolled ? 'text-warm-cream/80' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+918767432232"
              className="flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white font-display font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 pulse-glow"
            >
              <Phone className="w-4 h-4" />
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-warm-cream' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-coffee/95 backdrop-blur-md border-t border-caramel/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-body text-warm-cream/80 hover:text-saffron transition-colors text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+918767432232"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 bg-saffron text-white font-display font-semibold px-6 py-3 rounded-full w-full justify-center mt-4"
              >
                <Phone className="w-4 h-4" />
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
