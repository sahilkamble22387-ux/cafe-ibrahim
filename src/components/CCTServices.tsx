'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PartyPopper, Armchair, Baby, Truck } from 'lucide-react';

const services = [
  {
    icon: PartyPopper,
    title: 'Birthday Celebrations',
    desc: 'Make every birthday unforgettable with our custom decorations, party setups, and special menu packages. Let us handle the celebrations while you make memories!',
    image: '/images/cct/birthday.png',
    color: 'bg-saffron/10 text-saffron border-saffron/20',
  },
  {
    icon: Armchair,
    title: 'Private Seating',
    desc: 'Need a quiet corner for study sessions, dates, or catch-ups? Our private seating areas offer the perfect ambiance for every occasion.',
    color: 'bg-caramel/10 text-caramel-dark border-caramel/20',
  },
  {
    icon: Baby,
    title: 'Kids Menu',
    desc: 'Little ones deserve yummy food too! Our specially curated kids menu has all their favourites — mini burgers, cheese sandwiches, and chocolate shakes.',
    color: 'bg-gold-warm/10 text-gold-warm border-gold-warm/20',
  },
  {
    icon: Truck,
    title: 'Home Delivery',
    desc: 'Craving CCT at home? We deliver! Order your favourite pizzas, burgers, and shakes right to your doorstep. Fast, fresh, and budget-friendly.',
    color: 'bg-coffee-light/10 text-coffee-light border-coffee-light/20',
  },
];

export default function CCTServices() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 sm:py-28 section-gradient-cream relative overflow-hidden">
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
            What Makes Us Special
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mt-2 mb-4">
            More Than Just Food
          </h2>
          <div className="section-separator-cct mx-auto mb-6" />
          <p className="font-body text-warm-grey max-w-xl mx-auto">
            From birthday parties to home delivery — we go the extra mile for our guests
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-coffee/5 card-lift group"
            >
              {/* Icon area */}
              <div className="p-6 pb-4">
                <div
                  className={`w-14 h-14 rounded-xl ${service.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-espresso mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-warm-grey text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Birthday Feature - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 bg-white rounded-2xl overflow-hidden shadow-xl shadow-coffee/5"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[250px] md:h-auto">
              <img
                src="/images/cct/birthday.png"
                alt="Birthday celebration at Cafe Coffee Treat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:bg-gradient-to-r md:from-transparent md:to-white/30" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <PartyPopper className="w-6 h-6 text-saffron" />
                <span className="font-display font-bold text-saffron text-lg">
                  Birthday Special
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-espresso mb-4">
                Celebrate Your Special Day at CCT
              </h3>
              <p className="font-body text-warm-grey mb-6 leading-relaxed">
                Birthdays are better with pizza, shakes, and your favourite people!
                We offer custom decorations, party setups, special menu packages, and
                a private corner just for your group. Book your celebration today!
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918767432232"
                  className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white font-display font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <PartyPopper className="w-4 h-4" />
                  Book a Party
                </a>
                <span className="inline-flex items-center gap-1 font-body text-sm text-warm-grey bg-peach px-4 py-3 rounded-full">
                  Call: +91 87674 32232
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
