'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Phone, Instagram, ExternalLink, Navigation } from 'lucide-react';

export default function CCTContact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-saffron font-semibold text-sm uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mt-2 mb-4">
            Visit Us Today
          </h2>
          <div className="section-separator-cct mx-auto mb-6" />
          <p className="font-body text-warm-grey max-w-xl mx-auto">
            We&apos;re right near Wadia College — come say hi!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-warm-cream rounded-2xl p-6 flex items-start gap-4 card-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-saffron/10 text-saffron flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-espresso mb-1">Address</h4>
                <p className="font-body text-warm-grey text-sm leading-relaxed">
                  Shop No 55, 56, Connaught Place, Near Wadia College, Bund Garden
                  Road, Sangamvadi, Pune, Maharashtra 411001
                </p>
                <a
                  href="https://www.google.com/maps/search/Cafe+Coffee+Treat+Near+Wadia+College+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-saffron font-body text-sm font-semibold mt-2 hover:underline"
                >
                  <Navigation className="w-3 h-3" />
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Timings */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-warm-cream rounded-2xl p-6 flex items-start gap-4 card-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-caramel/10 text-caramel-dark flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-espresso mb-1">Timings</h4>
                <p className="font-body text-warm-grey text-sm">
                  9:45 AM – 9:45 PM
                </p>
                <p className="font-body text-warm-grey text-xs mt-0.5">
                  Open Every Day
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-warm-cream rounded-2xl p-6 flex items-start gap-4 card-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-coffee-light/10 text-coffee-light flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-espresso mb-1">Call Us</h4>
                <a
                  href="tel:+918767432232"
                  className="font-body text-saffron font-semibold text-lg hover:underline"
                >
                  +91 87674 32232
                </a>
                <p className="font-body text-warm-grey text-xs mt-0.5">
                  Orders, reservations & party bookings
                </p>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-warm-cream rounded-2xl p-6 flex items-start gap-4 card-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-saffron/10 text-pink-500 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-espresso mb-1">Follow Us</h4>
                <a
                  href="https://instagram.com/cafe_coffee_treat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-saffron font-semibold hover:underline"
                >
                  @cafe_coffee_treat
                </a>
                <p className="font-body text-warm-grey text-xs mt-0.5">
                  Daily specials, behind-the-scenes & more
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a
                href="tel:+918767432232"
                className="flex-1 flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-white font-display font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://www.zomato.com/pune/cafe-coffee-treat-bund-garden-pune/order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-coffee hover:bg-coffee-mid text-warm-cream font-display font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Order on Zomato
              </a>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-xl shadow-coffee/10 h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.88!3d18.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzQ4LjAiTiA3M8KwNTInNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Coffee Treat location on Google Maps"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
