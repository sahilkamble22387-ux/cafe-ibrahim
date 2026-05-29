'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, Armchair, PartyPopper, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    desc: '₹300 for two — the best budget cafe in Pune',
    color: 'bg-saffron/10 text-saffron',
  },
  {
    icon: Armchair,
    title: 'Private Seating',
    desc: 'Cozy private corners for study dates & catch-ups',
    color: 'bg-caramel/10 text-caramel',
  },
  {
    icon: PartyPopper,
    title: 'Birthday Parties',
    desc: 'Celebrate with custom setups & decorations',
    color: 'bg-gold-warm/10 text-gold-warm',
  },
  {
    icon: GraduationCap,
    title: 'College Hangout',
    desc: 'The go-to spot for Wadia College students',
    color: 'bg-coffee-light/10 text-coffee-light',
  },
];

export default function CCTAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 sm:py-28 section-gradient-warm relative overflow-hidden">
      {/* Coffee pattern background */}
      <div className="absolute inset-0 coffee-pattern pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-saffron font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mt-2 mb-4">
            More Than Just a Cafe
          </h2>
          <div className="section-separator-cct mx-auto mb-6" />
          <p className="font-body text-warm-grey max-w-2xl mx-auto text-base sm:text-lg">
            Since 2022, Cafe Coffee Treat has been the heart of the Wadia College
            neighborhood — a place where great food meets great company, without
            breaking the bank.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-coffee/10">
              <img
                src="/images/cct/exterior.png"
                alt="Cafe Coffee Treat exterior storefront near Wadia College, Pune"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 4.5].map((star, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-saffron fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.45.91-5.33-3.87-3.77 5.34-.78z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-body text-sm text-espresso-mid font-semibold">
                      4.5 on JustDial
                    </span>
                    <span className="font-body text-xs text-warm-grey">
                      (36 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-saffron/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-caramel/10 rounded-full blur-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-espresso mb-4">
              Where Every Rupee Counts & Every Bite Delights
            </h3>
            <p className="font-body text-warm-grey mb-6 leading-relaxed">
              Nestled near Wadia College on Bund Garden Road, Cafe Coffee Treat
              isn&apos;t just another cafe — it&apos;s a student sanctuary. With
              pizzas starting at just ₹99, shakes at ₹40, and a warm corner for
              every mood, we&apos;ve become the go-to hangout spot for Punekars
              who want flavour without the fancy price tag.
            </p>
            <p className="font-body text-warm-grey mb-8 leading-relaxed">
              Whether you&apos;re cramming for exams in our private seating area,
              celebrating a birthday with friends, or just craving a ₹45 Hazelnut
              Coffee on a rainy afternoon — CCT is where memories are made.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-md shadow-coffee/5 card-lift"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-3`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-semibold text-espresso text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-warm-grey text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
