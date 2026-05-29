'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Smartphone,
  Target,
  DollarSign,
  Camera,
  Search,
  Phone,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  X,
  TrendingUp,
} from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: Smartphone,
    value: 75,
    suffix: '%',
    label: 'of customers judge a restaurant by its website',
  },
  {
    icon: Target,
    value: 40,
    suffix: '%',
    label: 'increase in foot traffic with a professional website',
  },
  {
    icon: DollarSign,
    value: 20,
    suffix: '%',
    label: 'more repeat customers with a good website',
  },
  {
    icon: Camera,
    value: 30,
    suffix: '%',
    label: 'increase in orders with high-quality food photos',
  },
];

const beforeProblems = [
  { text: 'Broken images that never load', icon: AlertTriangle },
  { text: 'Generic template — zero personality', icon: X },
  { text: 'No menu showcase or food photos', icon: X },
  { text: 'No mobile optimization', icon: X },
  { text: 'No "Call Now" button for easy ordering', icon: X },
  { text: 'Invisible on Google search', icon: X },
];

const afterSolutions = [
  { text: 'Stunning visuals that make mouths water', icon: CheckCircle2 },
  { text: 'Custom design reflecting CCT\'s warm vibe', icon: CheckCircle2 },
  { text: 'Full menu with prices & appetising photos', icon: CheckCircle2 },
  { text: 'Fully responsive on every device', icon: CheckCircle2 },
  { text: 'One-tap "Call Now" & "Order" buttons', icon: CheckCircle2 },
  { text: 'Optimized for local Google searches', icon: CheckCircle2 },
];

function AnimatedCounter({
  value,
  suffix,
  isInView: visible,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <span className="font-display text-4xl sm:text-5xl font-bold text-saffron">
      {count}
      {suffix}
    </span>
  );
}

export default function CCTWhyWebsite() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 bg-coffee relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, #E8924A 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-saffron font-semibold text-sm uppercase tracking-wider">
            The Truth About Your Online Presence
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-cream mt-2 mb-4">
            Why Your Website Matters
          </h2>
          <div className="section-separator-cct mx-auto mb-6" />
          <p className="font-body text-warm-grey-light max-w-2xl mx-auto text-base sm:text-lg">
            Right now, your cafe is represented online by a broken, generic website.
            Here&apos;s why that&apos;s costing you customers every single day.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
              className="bg-coffee-mid/50 backdrop-blur-sm border border-caramel/20 rounded-2xl p-6 text-center warm-glow"
            >
              <stat.icon className="w-8 h-8 text-saffron mx-auto mb-3" />
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                isInView={statsInView}
              />
              <p className="font-body text-warm-cream/70 text-sm mt-2 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before & After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-warm-cream mb-2">
              Before & After
            </h3>
            <p className="font-body text-warm-grey-light">
              See the difference a professional website makes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* BEFORE - Broken Grexa Site */}
            <div className="rounded-2xl overflow-hidden border-2 border-red-500/30">
              <div className="bg-red-500/10 px-4 py-3 flex items-center gap-2 border-b border-red-500/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="font-body text-xs text-red-400 ml-2">
                  cafe-coffee-treat.grexa.site
                </span>
              </div>
              <div className="bg-warm-cream/10 p-6 min-h-[320px] broken-site">
                {/* Simulated broken website */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded bg-gray-600/30" />
                    <div className="h-5 w-32 bg-gray-600/20 rounded" />
                  </div>
                  {/* Broken images */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square bg-gray-700/20 rounded flex flex-col items-center justify-center border border-gray-600/20">
                      <AlertTriangle className="w-8 h-8 text-red-400/50 mb-1" />
                      <span className="text-xs text-red-400/50">Image not found</span>
                    </div>
                    <div className="aspect-square bg-gray-700/20 rounded flex flex-col items-center justify-center border border-gray-600/20">
                      <AlertTriangle className="w-8 h-8 text-red-400/50 mb-1" />
                      <span className="text-xs text-red-400/50">Image not found</span>
                    </div>
                  </div>
                  {/* Generic text blocks */}
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-600/15 rounded w-full" />
                    <div className="h-3 bg-gray-600/15 rounded w-4/5" />
                    <div className="h-3 bg-gray-600/15 rounded w-3/5" />
                  </div>
                  {/* No menu, no CTA */}
                  <div className="h-8 bg-gray-600/10 rounded w-1/3 mt-4" />
                  {/* Bad layout indicators */}
                  <div className="flex gap-2 mt-3">
                    <div className="h-6 bg-gray-600/10 rounded w-16" />
                    <div className="h-6 bg-gray-600/10 rounded w-16" />
                    <div className="h-6 bg-gray-600/10 rounded w-16" />
                  </div>
                </div>
                {/* Red overlay */}
                <div className="absolute inset-0 bg-red-900/5 pointer-events-none" />
              </div>
              <div className="bg-red-500/10 px-4 py-3 border-t border-red-500/20">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="font-body text-xs text-red-400">
                    Current website — broken, generic, unprofessional
                  </span>
                </div>
              </div>
            </div>

            {/* AFTER - This Beautiful Site */}
            <div className="rounded-2xl overflow-hidden border-2 border-saffron/30 shadow-lg shadow-saffron/10">
              <div className="bg-saffron/10 px-4 py-3 flex items-center gap-2 border-b border-saffron/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="font-body text-xs text-saffron ml-2">
                  cafecoffeetreat.in ✨
                </span>
              </div>
              <div className="relative min-h-[320px]">
                <img
                  src="/images/cct/hero.png"
                  alt="Beautiful professional website for Cafe Coffee Treat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="font-body text-xs text-espresso-mid font-semibold">
                        Professional, mobile-responsive, stunning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-saffron/10 px-4 py-3 border-t border-saffron/20">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-saffron" />
                  <span className="font-body text-xs text-saffron">
                    Your new website — beautiful, fast, customer-converting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Comparison Lists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
        >
          {/* Problems */}
          <div className="bg-coffee-mid/30 rounded-2xl p-6 sm:p-8 border border-red-500/10">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h4 className="font-display text-lg font-bold text-red-400">
                Your Current Website
              </h4>
            </div>
            <ul className="space-y-3">
              {beforeProblems.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-red-400/70 mt-0.5 shrink-0" />
                  <span className="font-body text-warm-cream/60 text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-coffee-mid/30 rounded-2xl p-6 sm:p-8 border border-saffron/10">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-saffron" />
              <h4 className="font-display text-lg font-bold text-saffron">
                What You Could Have
              </h4>
            </div>
            <ul className="space-y-3">
              {afterSolutions.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-saffron/70 mt-0.5 shrink-0" />
                  <span className="font-body text-warm-cream/80 text-sm">
                    {item.text}
                  </span>
                </li>
            ))}
            </ul>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          <div className="bg-coffee-mid/30 border border-caramel/15 rounded-xl p-5 text-center">
            <Search className="w-8 h-8 text-saffron mx-auto mb-3" />
            <h5 className="font-display font-semibold text-warm-cream mb-1">
              Google Visibility
            </h5>
            <p className="font-body text-warm-grey-light text-sm">
              You&apos;re invisible on Google without a proper website. 97% of people search online before visiting.
            </p>
          </div>
          <div className="bg-coffee-mid/30 border border-caramel/15 rounded-xl p-5 text-center">
            <Phone className="w-8 h-8 text-saffron mx-auto mb-3" />
            <h5 className="font-display font-semibold text-warm-cream mb-1">
              60% More Calls
            </h5>
            <p className="font-body text-warm-grey-light text-sm">
              A &quot;Call Now&quot; button on mobile increases phone calls by 60%. Every missed call is a missed order.
            </p>
          </div>
          <div className="bg-coffee-mid/30 border border-caramel/15 rounded-xl p-5 text-center">
            <TrendingUp className="w-8 h-8 text-saffron mx-auto mb-3" />
            <h5 className="font-display font-semibold text-warm-cream mb-1">
              Competitive Edge
            </h5>
            <p className="font-body text-warm-grey-light text-sm">
              60% of restaurants still have poor websites. Stand out and capture their customers.
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-center bg-gradient-to-r from-saffron/20 via-caramel/20 to-saffron/20 border border-saffron/20 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto"
        >
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-warm-cream mb-4">
            Your Cafe Deserves Better
          </h3>
          <p className="font-body text-warm-cream/70 mb-8 max-w-lg mx-auto leading-relaxed">
            You serve amazing food at amazing prices. Shouldn&apos;t your website
            reflect that? Stop losing customers to a broken website and start
            winning them with a professional online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918767432232"
              className="inline-flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-light text-white font-display font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 pulse-glow text-lg"
            >
              <Phone className="w-5 h-5" />
              Get Your Website Today
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-warm-cream font-display font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="font-body text-warm-grey-light text-xs mt-6">
            This website is a live demonstration of what&apos;s possible for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
