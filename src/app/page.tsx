"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Coffee,
  Heart,
  MapPin,
  Phone,
  Clock,
  Instagram,
  ChevronDown,
  Menu,
  X,
  Star,
  Flame,
  Moon,
  Sun,
  Utensils,
  Sandwich,
  Egg,
  Soup,
  Bike,
  Users,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Cookie,
} from "lucide-react";

/* ─── Steam Particles for Hero ─── */
function FloatingSteam() {
  const steamItems = [
    { left: "10%", bottom: "20%", delay: 0, class: "steam-1" },
    { left: "30%", bottom: "15%", delay: 1, class: "steam-2" },
    { left: "50%", bottom: "25%", delay: 2, class: "steam-3" },
    { left: "70%", bottom: "10%", delay: 0.5, class: "steam-4" },
    { left: "85%", bottom: "18%", delay: 1.5, class: "steam-5" },
    { left: "20%", bottom: "30%", delay: 2.5, class: "steam-6" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {steamItems.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.class}`}
          style={{
            left: item.left,
            bottom: item.bottom,
            animationDelay: `${item.delay}s`,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-gold/20 blur-sm" />
        </div>
      ))}
    </div>
  );
}

/* ─── Spice Particles ─── */
function FloatingSpices() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute spice-float-1 text-gold/10 text-2xl"
        style={{ left: "15%", bottom: "10%" }}
      >
        ✦
      </div>
      <div
        className="absolute spice-float-2 text-spice/10 text-xl"
        style={{ left: "45%", bottom: "20%" }}
      >
        ✦
      </div>
      <div
        className="absolute spice-float-3 text-gold/10 text-lg"
        style={{ left: "75%", bottom: "15%" }}
      >
        ✦
      </div>
      <div
        className="absolute spice-float-4 text-maroon/8 text-2xl"
        style={{ left: "60%", bottom: "25%" }}
      >
        ✦
      </div>
    </div>
  );
}

/* ─── Section Reveal Wrapper ─── */
function RevealSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ─── Ornamental Divider (Arabesque inspired) ─── */
function ArabesqueDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="section-separator" />
      <div className="text-gold text-lg">✦</div>
      <div className="section-separator" />
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Late Night", href: "#latenight" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-lg shadow-espresso/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 0.5 }}>
              <Coffee size={26} className="text-gold" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold text-espresso leading-tight">
                Cafe Ibrahim
              </span>
              <span className="text-[10px] tracking-[0.25em] font-body font-semibold text-maroon uppercase">
                Est. Viman Nagar
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body font-semibold text-espresso/70 hover:text-maroon transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-maroon after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8551061614"
              className="bg-maroon hover:bg-maroon-dark text-warm-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-maroon/20"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-espresso"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-cream/98 backdrop-blur-lg border-t border-sand"
        >
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-espresso/80 hover:text-maroon font-semibold transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8551061614"
              className="block text-center bg-maroon text-warm-white py-3 rounded-full font-bold mt-2 font-body"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ibrahim/hero.png')" }}
        />
        <div className="hero-gradient-ibrahim absolute inset-0" />
      </motion.div>

      <FloatingSteam />
      <FloatingSpices />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        {/* 24 Hours Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 bg-warm-white/15 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2 mb-6 hour-glow"
        >
          <Moon size={14} className="text-gold-light" />
          <span className="text-warm-white/90 text-sm font-body font-bold tracking-wide">
            Open 24 Hours
          </span>
          <Sun size={14} className="text-gold-light" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-warm-white text-shadow-warm leading-[1.1] mb-4"
        >
          Cafe Ibrahim
        </motion.h1>

        {/* Arabic-style subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <div className="w-12 h-[1px] bg-gold/50" />
          <span className="font-display text-xl sm:text-2xl text-gold tracking-wider">
            ✦ AUTHENTIC ✦ IRANI ✦ CAFE ✦
          </span>
          <div className="w-12 h-[1px] bg-gold/50" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg sm:text-xl text-warm-white/75 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Where the aroma of Irani chai meets the warmth of freshly baked bun maska.
          <br className="hidden sm:block" />
          Late night cravings? We never close.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#menu"
            className="bg-maroon hover:bg-maroon-dark text-warm-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-maroon/30 pulse-glow-maroon flex items-center gap-2 font-body"
          >
            <Utensils size={20} />
            Explore Menu
          </a>
          <a
            href="tel:8551061614"
            className="bg-warm-white/15 hover:bg-warm-white/25 backdrop-blur-sm border border-warm-white/30 text-warm-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 font-body"
          >
            <Phone size={20} className="text-gold-light" />
            Call to Order
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "24", suffix: " Hrs", label: "Always Open" },
            { value: "₹200", suffix: "", label: "For Two" },
            { value: "4.6", suffix: "★", label: "JustDial" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gold">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="font-body text-xs sm:text-sm text-warm-white/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <ChevronDown size={28} className="text-warm-white/40" />
      </motion.div>
    </section>
  );
}

/* ─── Our Story Section ─── */
function OurStory() {
  return (
    <RevealSection id="story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-cream relative">
      <div className="mosaic-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-xl row-span-2"
              >
                <img
                  src="/images/ibrahim/irani-chai.png"
                  alt="Irani Chai at Cafe Ibrahim"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/ibrahim/shawarma.png"
                  alt="Chicken Shawarma at Cafe Ibrahim"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/ibrahim/exterior.png"
                  alt="Cafe Ibrahim Exterior"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-maroon/15 rounded-xl -z-10" />
          </div>

          {/* Right: Story */}
          <div>
            <ArabesqueDivider />
            <div className="text-center sm:text-left mb-2">
              <span className="font-body text-sm font-bold text-maroon tracking-[0.15em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mb-6 leading-tight text-center sm:text-left">
              Where Every Cup
              <br />
              <span className="text-maroon">Tells a Story</span>
            </h2>
            <p className="font-body text-espresso/65 text-lg leading-relaxed mb-6">
              Nestled in the heart of Viman Nagar, <strong className="text-espresso">Cafe Ibrahim</strong> is
              more than just a cafe — it&apos;s a late-night haven for those who believe that great food
              shouldn&apos;t have a curfew. Inspired by the timeless Irani cafe tradition, we serve
              authentic flavors that have been loved for generations.
            </p>
            <p className="font-body text-espresso/65 text-lg leading-relaxed mb-8">
              From the first sip of our legendary <strong className="text-maroon">Irani Chai</strong> to the
              last bite of our perfectly spiced <strong className="text-maroon">Chicken Shawarma</strong>, every
              dish at Cafe Ibrahim is made with love, fresh ingredients, and recipes that honor the
              Irani cafe heritage.
            </p>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Moon, label: "Open 24 Hours", desc: "Always here for you" },
                { icon: Flame, label: "Authentic Flavors", desc: "Irani cafe heritage" },
                { icon: Heart, label: "Made with Love", desc: "Fresh ingredients daily" },
                { icon: Star, label: "4.6★ Rated", desc: "Loved by Punekars" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-warm-white/60">
                  <div className="p-2 rounded-lg bg-maroon/10 shrink-0">
                    <item.icon size={18} className="text-maroon" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-espresso text-sm">{item.label}</div>
                    <div className="font-body text-xs text-espresso/45">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Menu Section ─── */
function MenuSection() {
  const [activeTab, setActiveTab] = useState<
    "breakfast" | "mains" | "shawarma" | "beverages"
  >("breakfast");

  const menuData = {
    breakfast: {
      title: "All Day Breakfast",
      icon: Egg,
      items: [
        {
          name: "Bun Maska Jam",
          desc: "Soft pav with butter & jam — the Irani classic",
          price: "₹80",
          img: "/images/ibrahim/bun-maska.png",
          tag: "Must Try",
        },
        {
          name: "Masala Omelette",
          desc: "Fluffy eggs with green chilies, onions & spices",
          price: "₹90",
          img: "/images/ibrahim/omelette.png",
          tag: "Popular",
        },
        {
          name: "Chicken Keema Paratha",
          desc: "Spiced minced chicken with flaky alishan paratha",
          price: "₹150",
          img: "/images/ibrahim/kheema.png",
          tag: "Bestseller",
        },
        {
          name: "Cheese Omelette",
          desc: "Golden omelette loaded with melted cheese",
          price: "₹110",
          img: "/images/ibrahim/omelette.png",
          tag: "",
        },
      ],
    },
    mains: {
      title: "Mains & More",
      icon: Soup,
      items: [
        {
          name: "Chicken Biryani",
          desc: "Aromatic basmati rice with tender chicken & saffron",
          price: "₹180",
          img: "/images/ibrahim/biryani.png",
          tag: "Bestseller",
        },
        {
          name: "Chicken Kheema Pav",
          desc: "Spiced minced chicken served with soft pav",
          price: "₹140",
          img: "/images/ibrahim/kheema.png",
          tag: "Must Try",
        },
        {
          name: "Masala Maggi",
          desc: "Spiced noodles — the ultimate comfort food",
          price: "₹65",
          img: "/images/ibrahim/maggi.png",
          tag: "Comfort",
        },
        {
          name: "Jumbo Crunchy Burger",
          desc: "Crispy patty with fresh veggies in a jumbo bun",
          price: "₹130",
          img: "/images/ibrahim/burger.png",
          tag: "Popular",
        },
      ],
    },
    shawarma: {
      title: "Shawarma & Rolls",
      icon: Sandwich,
      items: [
        {
          name: "Classic Chicken Shawarma",
          desc: "Tender chicken in pita with garlic sauce & veggies",
          price: "₹120",
          img: "/images/ibrahim/shawarma.png",
          tag: "Bestseller",
        },
        {
          name: "Peri Peri Shawarma",
          desc: "Spicy peri peri chicken shawarma with special sauce",
          price: "₹140",
          img: "/images/ibrahim/shawarma.png",
          tag: "Spicy",
        },
        {
          name: "Cheese Shawarma",
          desc: "Classic shawarma loaded with melted cheese",
          price: "₹150",
          img: "/images/ibrahim/shawarma.png",
          tag: "Cheesy",
        },
        {
          name: "Shawarma Roll",
          desc: "Chicken shawarma wrapped in a roomali roti",
          price: "₹100",
          img: "/images/ibrahim/shawarma.png",
          tag: "Value",
        },
      ],
    },
    beverages: {
      title: "Chai & Beverages",
      icon: Coffee,
      items: [
        {
          name: "Irani Chai",
          desc: "Rich, creamy, slow-brewed — the legendary cup",
          price: "₹40",
          img: "/images/ibrahim/irani-chai.png",
          tag: "Legendary",
        },
        {
          name: "Masala Chai",
          desc: "Spiced tea with cardamom, ginger & cloves",
          price: "₹40",
          img: "/images/ibrahim/irani-chai.png",
          tag: "Classic",
        },
        {
          name: "Cold Coffee",
          desc: "Chilled blended coffee — perfect for Pune summers",
          price: "₹90",
          img: "/images/ibrahim/irani-chai.png",
          tag: "",
        },
        {
          name: "Cookie & Chai Combo",
          desc: "Fresh-baked cookie paired with Irani chai",
          price: "₹80",
          img: "/images/ibrahim/bun-maska.png",
          tag: "Combo",
        },
      ],
    },
  };

  const currentMenu = menuData[activeTab];

  return (
    <RevealSection id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-warm-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <ArabesqueDivider />
          <span className="font-body text-sm font-bold text-maroon tracking-[0.15em] uppercase">
            Our Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mt-2 mb-4">
            Flavors That <span className="text-maroon">Never Sleep</span>
          </h2>
          <p className="font-body text-espresso/55 text-lg max-w-2xl mx-auto">
            From sunrise chai to midnight shawarma — our kitchen never stops.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-sand/50 rounded-full p-1.5 flex flex-wrap justify-center gap-1">
            {(
              Object.entries(menuData) as [keyof typeof menuData, (typeof menuData)["breakfast"]][]
            ).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full font-body font-bold text-xs sm:text-sm transition-all duration-300 ${
                  activeTab === key
                    ? "bg-maroon text-warm-white shadow-lg shadow-maroon/20"
                    : "text-espresso/60 hover:text-espresso"
                }`}
              >
                <data.icon size={15} />
                <span className="hidden sm:inline">{data.title}</span>
                <span className="sm:hidden">{data.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentMenu.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-lift group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.tag && (
                  <div className="absolute top-3 right-3 bg-maroon text-warm-white px-3 py-1 rounded-full text-xs font-bold font-body">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-espresso text-lg">{item.name}</h3>
                  <span className="font-body font-bold text-maroon text-lg">{item.price}</span>
                </div>
                <p className="font-body text-espresso/45 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <a
            href="https://www.zomato.com/pune/cafe-ibrahim-viman-nagar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-bold text-maroon hover:text-maroon-dark transition-colors group"
          >
            View Full Menu on Zomato
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="hidden sm:block text-espresso/20">|</span>
          <a
            href="https://www.swiggy.com/city/pune/cafe-ibrahim-viman-nagar-rest989024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-bold text-teal hover:text-teal-dark transition-colors group"
          >
            Order on Swiggy
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Late Night Section ─── */
function LateNight() {
  return (
    <RevealSection id="latenight" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-espresso" />
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ibrahim/late-night.png')" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="font-body text-sm font-bold text-gold tracking-[0.15em] uppercase">
                Late Night Legend
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white mb-6 leading-tight">
              Cravings Don&apos;t
              <br />
              <span className="text-gold neon-pulse">Keep Hours</span>
            </h2>
            <p className="font-body text-warm-white/65 text-lg leading-relaxed mb-8">
              When the rest of Pune goes to sleep, Cafe Ibrahim lights up.
              Whether it&apos;s a post-shift meal, a midnight shawarma run, or
              a 3 AM chai with friends — we&apos;re always here. No closing
              time. No last order. Just good food, always.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: Moon,
                  label: "Open 24/7",
                  desc: "No closing time, ever",
                },
                {
                  icon: Flame,
                  label: "Fresh at 3 AM",
                  desc: "Hot food, any hour",
                },
                {
                  icon: Users,
                  label: "Night Owls Welcome",
                  desc: "Your late-night spot",
                },
                {
                  icon: Bike,
                  label: "Late Night Delivery",
                  desc: "Via Swiggy & Zomato",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-warm-white/8 backdrop-blur-sm rounded-2xl p-4 border border-warm-white/8"
                >
                  <item.icon size={20} className="text-gold mb-2" />
                  <div className="font-body font-bold text-warm-white text-sm">{item.label}</div>
                  <div className="font-body text-xs text-warm-white/40 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>

            <a
              href="tel:8551061614"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-espresso font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-body"
            >
              <Phone size={18} />
              Call Now — We&apos;re Open
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/ibrahim/late-night.png"
                alt="Cafe Ibrahim Late Night"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </motion.div>
            {/* 24H Badge */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-gold rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="font-display text-3xl font-bold text-espresso">24</div>
              <div className="font-body text-xs font-bold text-espresso/60 uppercase tracking-wider">
                Hours
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Gallery Section ─── */
function Gallery() {
  const images = [
    { src: "/images/ibrahim/irani-chai.png", alt: "Irani Chai", span: "col-span-2 row-span-2" },
    { src: "/images/ibrahim/shawarma.png", alt: "Chicken Shawarma", span: "" },
    { src: "/images/ibrahim/kheema.png", alt: "Chicken Kheema", span: "" },
    { src: "/images/ibrahim/biryani.png", alt: "Chicken Biryani", span: "col-span-2" },
    { src: "/images/ibrahim/bun-maska.png", alt: "Bun Maska", span: "" },
    { src: "/images/ibrahim/burger.png", alt: "Jumbo Burger", span: "" },
  ];

  return (
    <RevealSection className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-sand relative">
      <div className="spice-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <ArabesqueDivider />
          <span className="font-body text-sm font-bold text-maroon tracking-[0.15em] uppercase">
            Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mt-2">
            A Taste Through <span className="text-maroon">Images</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`rounded-2xl overflow-hidden shadow-md cursor-pointer group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Reviews Section ─── */
function Reviews() {
  const reviews = [
    {
      text: "The best late night food! I am a chef and we don't have many options for dinner after our late shifts, and this place has become a go-to for the best meal.",
      author: "Chef Review",
      platform: "Zomato",
      rating: 5,
    },
    {
      text: "There are very few places open at night who offer food with great taste. All the dishes served at this cafe are up to the mark.",
      author: "Regular Customer",
      platform: "Zomato",
      rating: 5,
    },
    {
      text: "Irani chai is highly recommended. Chicken Peri Peri Shawarma and Classic Shawarma were absolutely loved. Great value for money!",
      author: "Food Lover",
      platform: "JustDial",
      rating: 5,
    },
  ];

  return (
    <RevealSection className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <ArabesqueDivider />
          <span className="font-body text-sm font-bold text-maroon tracking-[0.15em] uppercase">
            Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mt-2">
            What People <span className="text-maroon">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 card-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body text-espresso/70 text-sm leading-relaxed mb-4 italic">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-body font-bold text-espresso text-sm">{review.author}</span>
                <span className="font-body text-xs text-espresso/40 bg-sand/50 px-3 py-1 rounded-full">
                  {review.platform}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-5 shadow-md">
            <div>
              <div className="font-display text-4xl font-bold text-maroon">4.6</div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className={s <= 4 ? "text-gold fill-gold" : "text-gold/40 fill-gold/40"} />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-sand" />
            <div className="text-left">
              <div className="font-body font-bold text-espresso text-sm">599+ Reviews</div>
              <div className="font-body text-xs text-espresso/40">on JustDial</div>
            </div>
            <div className="w-px h-12 bg-sand" />
            <div className="text-left">
              <div className="font-body font-bold text-espresso text-sm">4.2 Rating</div>
              <div className="font-body text-xs text-espresso/40">on Zomato</div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Visit Us Section ─── */
function VisitUs() {
  return (
    <RevealSection id="visit" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-warm-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <ArabesqueDivider />
          <span className="font-body text-sm font-bold text-maroon tracking-[0.15em] uppercase">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mt-2 mb-4">
            Come Visit <span className="text-maroon">Ibrahim</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] sm:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1!2d73.9041!3d18.5703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14dbe56d905%3A0x37914994afe54ac5!2sCAFE%20IBRAHIM!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Ibrahim Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-cream rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-maroon/10 shrink-0">
                <MapPin size={20} className="text-maroon" />
              </div>
              <div>
                <h3 className="font-display font-bold text-espresso text-lg mb-1">Address</h3>
                <p className="font-body text-espresso/55 text-sm">
                  Survey 230 B/2, Shop 2, Near Majjid,
                  <br />
                  Sanjay Park, IAF Station, Viman Nagar, Pune
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-cream rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-gold/15 shrink-0">
                <Clock size={20} className="text-gold-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-espresso text-lg mb-1">Timings</h3>
                <div className="font-body text-espresso/55 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="font-semibold text-espresso/75">Open 24 Hours</span> — We never close!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-cream rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-teal/10 shrink-0">
                <Phone size={20} className="text-teal" />
              </div>
              <div>
                <h3 className="font-display font-bold text-espresso text-lg mb-1">Contact</h3>
                <a
                  href="tel:8551061614"
                  className="font-body text-maroon font-semibold text-sm hover:text-maroon-dark transition-colors"
                >
                  +91 85510 61614
                </a>
                <p className="font-body text-espresso/40 text-xs mt-1">
                  Call or WhatsApp for orders & reservations
                </p>
              </div>
            </div>

            {/* Social & Order Links */}
            <div className="bg-cream rounded-2xl p-5">
              <h3 className="font-display font-bold text-espresso text-lg mb-4">
                Order Online & Follow
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/cafeibrahim2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Instagram size={14} />
                  @cafeibrahim2020
                </a>
                <a
                  href="https://www.zomato.com/pune/cafe-ibrahim-viman-nagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Utensils size={14} />
                  Zomato
                </a>
                <a
                  href="https://www.swiggy.com/city/pune/cafe-ibrahim-viman-nagar-rest989024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full font-body font-bold text-xs hover:shadow-lg transition-shadow"
                >
                  <Bike size={14} />
                  Swiggy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-espresso text-warm-white/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Coffee size={22} className="text-gold" />
              <div>
                <span className="font-display text-xl font-bold text-warm-white">Cafe Ibrahim</span>
              </div>
            </div>
            <p className="font-body text-sm text-warm-white/40 leading-relaxed mb-4">
              Authentic Irani cafe in Viman Nagar, Pune. Open 24 hours —
              because cravings don&apos;t keep hours.
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/15 rounded-full px-4 py-1.5">
              <Moon size={12} className="text-gold" />
              <span className="font-body text-xs font-bold text-gold">Open 24 Hours</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-warm-white text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Menu", href: "#menu" },
                { label: "Late Night", href: "#latenight" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-warm-white/40 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Must Try */}
          <div>
            <h4 className="font-display font-bold text-warm-white text-sm mb-4 uppercase tracking-wider">
              Must Try
            </h4>
            <ul className="space-y-2">
              {[
                "Irani Chai",
                "Chicken Shawarma",
                "Bun Maska Jam",
                "Chicken Kheema",
                "Chicken Biryani",
              ].map((dish) => (
                <li key={dish} className="font-body text-sm text-warm-white/40">
                  {dish}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-warm-white text-sm mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:8551061614"
                className="flex items-center gap-2 font-body text-sm text-warm-white/40 hover:text-gold transition-colors"
              >
                <Phone size={14} />
                +91 85510 61614
              </a>
              <a
                href="https://www.instagram.com/cafeibrahim2020"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-warm-white/40 hover:text-gold transition-colors"
              >
                <Instagram size={14} />
                @cafeibrahim2020
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-warm-white/40">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                Sanjay Park, Viman Nagar, Pune
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warm-white/25">
            © {new Date().getFullYear()} Cafe Ibrahim. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Coffee size={12} className="text-gold/25" />
            <span className="font-body text-xs text-warm-white/25">
              Open 24 Hours • Viman Nagar, Pune
            </span>
            <Coffee size={12} className="text-gold/25" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function CafeIbrahimPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OurStory />
        <MenuSection />
        <LateNight />
        <Gallery />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
