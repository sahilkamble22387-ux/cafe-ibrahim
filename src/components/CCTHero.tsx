'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Phone, BookOpen } from 'lucide-react';

function SteamParticle({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 0.4, 0.3, 0],
        y: [0, -40, -80],
        x: [0, 8, -5],
        scale: [0.8, 1.2, 1.5],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        delay,
        ease: 'easeOut',
      }}
    >
      <div className="w-3 h-3 rounded-full bg-white/40 blur-sm" />
    </motion.div>
  );
}

export default function CCTHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cct/hero.png')" }}
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 hero-gradient-cct"
        style={{ opacity: overlayOpacity }}
      />

      {/* Floating Steam Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <SteamParticle className="bottom-[30%] left-[15%]" delay={0} />
        <SteamParticle className="bottom-[35%] left-[20%]" delay={0.8} />
        <SteamParticle className="bottom-[28%] left-[18%]" delay={1.6} />
        <SteamParticle className="bottom-[32%] right-[20%]" delay={0.4} />
        <SteamParticle className="bottom-[36%] right-[17%]" delay={1.2} />
        <SteamParticle className="bottom-[25%] left-[55%]" delay={2.0} />
        <SteamParticle className="bottom-[38%] left-[65%]" delay={0.6} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ y: textY }}
      >
        {/* Since Badge */}
        <motion.div
          custom={0}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-saffron/20 backdrop-blur-sm border border-saffron/30 text-saffron-light px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
          <span className="font-body text-sm font-medium">Since 2022</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          custom={1}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-shadow-warm leading-tight"
        >
          Cafe Coffee
          <br />
          <span className="text-saffron">Treat</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-body text-lg sm:text-xl md:text-2xl text-warm-cream/90 mt-4 mb-2"
        >
          Great Food. Great Vibes. Great Prices.
        </motion.p>

        {/* Sub tagline */}
        <motion.p
          custom={3}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-body text-sm sm:text-base text-caramel-light/80 mb-8"
        >
          Your Favourite Hangout Spot near Wadia College, Pune
        </motion.p>

        {/* Price Badge */}
        <motion.div
          custom={4}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold-warm px-4 py-2 rounded-full mb-8"
        >
          <span className="font-display font-bold text-lg">₹300</span>
          <span className="font-body text-sm">for two | Budget Eats</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#menu"
            className="flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white font-display font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 pulse-glow text-lg"
          >
            <BookOpen className="w-5 h-5" />
            View Menu
          </a>
          <a
            href="tel:+918767432232"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-display font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <a href="#about" className="flex flex-col items-center text-warm-cream/60 hover:text-saffron transition-colors">
          <span className="font-body text-xs mb-2">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
