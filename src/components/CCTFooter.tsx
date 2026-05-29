'use client';

import { Coffee, MapPin, Phone, Instagram, Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Why Website Matters', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

const menuHighlights = [
  'Pizza from ₹99',
  'Burgers from ₹70',
  'Pasta from ₹100',
  'Coffee from ₹45',
  'Shakes from ₹40',
];

export default function CCTFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-warm-cream/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-saffron text-white flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-warm-cream">
                  CCT
                </span>
                <span className="font-body text-xs text-caramel ml-1.5">
                  Cafe Coffee Treat
                </span>
              </div>
            </div>
            <p className="font-body text-warm-cream/50 text-sm leading-relaxed mb-4">
              Great Food, Great Vibes, Great Prices. Your favourite hangout spot
              near Wadia College since 2022.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/cafe_coffee_treat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-warm-cream/5 hover:bg-saffron/20 text-warm-cream/50 hover:text-saffron flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+918767432232"
                className="w-10 h-10 rounded-lg bg-warm-cream/5 hover:bg-saffron/20 text-warm-cream/50 hover:text-saffron flex items-center justify-center transition-all duration-300"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-warm-cream mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-warm-cream/50 hover:text-saffron transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="font-display font-semibold text-warm-cream mb-4">
              Menu Highlights
            </h4>
            <ul className="space-y-2.5">
              {menuHighlights.map((item) => (
                <li key={item} className="font-body text-sm text-warm-cream/50">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-warm-cream mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-saffron mt-0.5 shrink-0" />
                <span className="font-body text-xs text-warm-cream/50 leading-relaxed">
                  Shop No 55, 56, Connaught Place, Near Wadia College, Pune
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-saffron shrink-0" />
                <a
                  href="tel:+918767432232"
                  className="font-body text-sm text-warm-cream/50 hover:text-saffron transition-colors"
                >
                  +91 87674 32232
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-saffron shrink-0" />
                <a
                  href="https://instagram.com/cafe_coffee_treat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-warm-cream/50 hover:text-saffron transition-colors"
                >
                  @cafe_coffee_treat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-cream/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warm-cream/30 text-center sm:text-left">
            © {new Date().getFullYear()} Cafe Coffee Treat. All rights reserved.
          </p>
          <p className="font-body text-xs text-warm-cream/30 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-saffron fill-saffron" /> in Pune
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-saffron hover:bg-saffron-light text-white rounded-full shadow-lg shadow-saffron/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
