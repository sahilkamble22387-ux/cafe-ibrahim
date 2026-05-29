"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  PawPrint,
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
  Shield,
  Scissors,
  ShoppingBag,
  Home as HomeIcon,
  ArrowRight,
  Sparkles,
  Dog,
  Cat,
  Utensils,
  Cake,
  GlassWater,
  Pizza,
  Sandwich,
  Cookie,
  Baby,
  Users,
  Mail,
  ExternalLink,
} from "lucide-react";

/* ─── Paw Print SVG Component ─── */
function PawSVG({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <ellipse cx="9" cy="4.5" rx="2.5" ry="3" />
      <ellipse cx="15" cy="4.5" rx="2.5" ry="3" />
      <ellipse cx="5" cy="10" rx="2" ry="2.5" />
      <ellipse cx="19" cy="10" rx="2" ry="2.5" />
      <ellipse cx="12" cy="15" rx="5" ry="4.5" />
    </svg>
  );
}

/* ─── Dog Silhouette SVG ─── */
function DogSVG({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
    >
      <path d="M25 30 C20 20, 15 15, 20 10 C25 5, 30 15, 35 20 C40 15, 45 12, 55 12 C65 12, 72 18, 75 25 C80 18, 85 10, 88 15 C92 20, 85 28, 80 32 C85 38, 88 48, 85 58 C82 68, 75 75, 70 80 L68 90 C67 95, 62 98, 58 95 L55 85 C50 87, 45 87, 40 85 L37 95 C35 98, 30 97, 28 93 L27 82 C22 78, 18 72, 17 62 C16 52, 18 40, 25 30Z" />
    </svg>
  );
}

/* ─── Floating Paw Particles ─── */
function FloatingPaws() {
  const paws = [
    { left: "8%", bottom: "20%", delay: 0, size: 28, class: "paw-float-1" },
    { left: "25%", bottom: "15%", delay: 1.2, size: 22, class: "paw-float-2" },
    { left: "45%", bottom: "25%", delay: 2.5, size: 32, class: "paw-float-3" },
    { left: "65%", bottom: "10%", delay: 0.8, size: 24, class: "paw-float-4" },
    { left: "82%", bottom: "18%", delay: 1.8, size: 20, class: "paw-float-5" },
    { left: "55%", bottom: "30%", delay: 3, size: 18, class: "paw-float-1" },
    { left: "15%", bottom: "35%", delay: 2, size: 26, class: "paw-float-3" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {paws.map((paw, i) => (
        <div
          key={i}
          className={`absolute ${paw.class}`}
          style={{
            left: paw.left,
            bottom: paw.bottom,
            animationDelay: `${paw.delay}s`,
          }}
        >
          <PawSVG size={paw.size} className="text-paw-gold/20" />
        </div>
      ))}
    </div>
  );
}

/* ─── Section Wrapper with Reveal ─── */
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
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);
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
    { label: "Services", href: "#services" },
    { label: "Adopt", href: "#adopt" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-cream/95 backdrop-blur-md shadow-lg shadow-bark/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <PawSVG size={28} className="text-terra" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold text-bark leading-tight">
                The Pet Cafe
              </span>
              <span className="text-[10px] sm:text-xs text-terra tracking-[0.2em] font-semibold uppercase">
                Pune
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body font-semibold text-bark/70 hover:text-terra transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-terra after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9595224965"
              className="bg-terra hover:bg-terra-dark text-soft-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-terra/20"
            >
              Book a Visit
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-bark"
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
          className="md:hidden bg-warm-cream/98 backdrop-blur-lg border-t border-peach"
        >
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-bark/80 hover:text-terra font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9595224965"
              className="block text-center bg-terra text-soft-white py-3 rounded-full font-bold mt-2"
            >
              Book a Visit
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/petcafe/hero.png')" }}
        />
        <div className="hero-gradient-pet absolute inset-0" />
      </motion.div>

      {/* Floating Paws */}
      <FloatingPaws />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        {/* Paw Print Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 bg-soft-white/15 backdrop-blur-sm border border-soft-white/20 rounded-full px-5 py-2 mb-6"
        >
          <PawSVG size={16} className="text-paw-gold" />
          <span className="text-soft-white/90 text-sm font-body font-semibold tracking-wide">
            Pune&apos;s First Cage-Free Pet Cafe
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-soft-white text-shadow-warm leading-[1.1] mb-4"
        >
          A Pet Cafe
          <br />
          <span className="text-paw-gold">That&apos;s Human</span>
          <br />
          Friendly
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg sm:text-xl text-soft-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Where your furry friends roam free while you sip artisan coffee.
          <br className="hidden sm:block" />
          Cage-free. Leash-free. Full of love.
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
            className="bg-terra hover:bg-terra-dark text-soft-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-terra/30 pulse-glow-warm flex items-center gap-2"
          >
            <Utensils size={20} />
            Explore Menu
          </a>
          <a
            href="#adopt"
            className="bg-soft-white/15 hover:bg-soft-white/25 backdrop-blur-sm border border-soft-white/30 text-soft-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2"
          >
            <Heart size={20} className="text-coral-light" />
            Adopt a Friend
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
            { value: "783+", label: "Adoptions" },
            { value: "12K+", label: "Instagram Family" },
            { value: "4.2★", label: "Google Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-paw-gold">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-soft-white/60 mt-1">
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
        <ChevronDown size={28} className="text-soft-white/50" />
      </motion.div>
    </section>
  );
}

/* ─── Our Story Section ─── */
function OurStory() {
  return (
    <RevealSection
      id="story"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-cream relative"
    >
      <div className="paw-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-xl row-span-2"
              >
                <img
                  src="/images/petcafe/pets.png"
                  alt="Adorable pets at The Pet Cafe"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/images/petcafe/coffee.png"
                  alt="Artisan coffee at The Pet Cafe"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/images/petcafe/outdoor.png"
                  alt="Outdoor seating at The Pet Cafe"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
            {/* Floating Paw */}
            <div className="absolute -top-6 -right-6 bg-terra rounded-2xl p-4 shadow-xl hidden lg:block">
              <PawSVG size={36} className="text-soft-white" />
            </div>
          </div>

          {/* Right: Story Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="section-separator" />
              <span className="font-body text-sm font-bold text-terra tracking-[0.15em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bark mb-6 leading-tight">
              Where Every Tail
              <br />
              <span className="text-terra">Wags with Joy</span>
            </h2>
            <p className="font-body text-bark/70 text-lg leading-relaxed mb-6">
              Founded by <strong className="text-bark">Devesh Baheti</strong>, The Pet Cafe
              Pune was born from a simple belief — that our four-legged friends
              deserve a space where they can be themselves. Not caged. Not
              leashed. Just free.
            </p>
            <p className="font-body text-bark/70 text-lg leading-relaxed mb-8">
              Tucked away in the leafy lanes of Koregaon Park, we created a
              space where pets roam freely while their humans enjoy artisan
              coffee and gourmet food. With <strong className="text-terra">783+ successful
              adoptions</strong>, we&apos;re not just a cafe — we&apos;re a movement.
            </p>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Cage-Free", desc: "Safe open space" },
                { icon: Heart, label: "783+ Adoptions", desc: "Rescue first" },
                { icon: Coffee, label: "Artisan Menu", desc: "Humans & pets" },
                { icon: Sparkles, label: "Leash-Free", desc: "Freedom to play" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-soft-white/60"
                >
                  <div className="p-2 rounded-lg bg-terra/10 shrink-0">
                    <item.icon size={18} className="text-terra" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-bark text-sm">
                      {item.label}
                    </div>
                    <div className="font-body text-xs text-bark/50">
                      {item.desc}
                    </div>
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
  const [activeTab, setActiveTab] = useState<"humans" | "pets">("humans");

  const humanMenu = [
    {
      name: "Artisan Cappuccino",
      desc: "Rich, velvety espresso with steamed milk foam",
      price: "₹220",
      img: "/images/petcafe/coffee.png",
      tag: "Bestseller",
    },
    {
      name: "Truffle Pasta",
      desc: "Creamy penne in truffle oil with parmesan",
      price: "₹320",
      img: "/images/petcafe/pasta.png",
      tag: "Chef's Special",
    },
    {
      name: "Gourmet Burger",
      desc: "Juicy patty with fresh lettuce, tomato & secret sauce",
      price: "₹280",
      img: "/images/petcafe/burger.png",
      tag: "Popular",
    },
    {
      name: "Wood-Fired Pizza",
      desc: "Hand-tossed pizza with fresh mozzarella & basil",
      price: "₹350",
      img: "/images/petcafe/pizza.png",
      tag: "",
    },
  ];

  const petMenu = [
    {
      name: "Pupcakes",
      desc: "Handmade dog cupcakes with peanut butter frosting",
      price: "₹120",
      img: "/images/petcafe/pupcakes.png",
      tag: "Dog Favourite",
    },
    {
      name: "Peanut Cookies",
      desc: "All-natural peanut butter treats, no sugar added",
      price: "₹100",
      img: "/images/petcafe/pet-treats.png",
      tag: "Healthy",
    },
    {
      name: "Chicken & Egg Meal",
      desc: "Fresh chicken breast with scrambled egg & rice",
      price: "₹180",
      img: "/images/petcafe/pets.png",
      tag: "Fresh Meal",
    },
    {
      name: "Pupsicles",
      desc: "Frozen yogurt treats for a hot Pune afternoon",
      price: "₹90",
      img: "/images/petcafe/pupcakes.png",
      tag: "Summer Special",
    },
  ];

  const items = activeTab === "humans" ? humanMenu : petMenu;

  return (
    <RevealSection
      id="menu"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-soft-white relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-separator" />
            <span className="font-body text-sm font-bold text-terra tracking-[0.15em] uppercase">
              Our Menu
            </span>
            <div className="section-separator" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bark mb-4">
            Made with Love,{" "}
            <span className="text-terra">
              For Both of You
            </span>
          </h2>
          <p className="font-body text-bark/60 text-lg max-w-2xl mx-auto">
            From artisan coffee to special pet meals — we&apos;ve got something
            for every member of your family.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-peach/60 rounded-full p-1.5 flex gap-1">
            <button
              onClick={() => setActiveTab("humans")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-all duration-300 ${
                activeTab === "humans"
                  ? "bg-terra text-soft-white shadow-lg shadow-terra/20"
                  : "text-bark/60 hover:text-bark"
              }`}
            >
              <Users size={16} />
              For Humans
            </button>
            <button
              onClick={() => setActiveTab("pets")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-all duration-300 ${
                activeTab === "pets"
                  ? "bg-sage text-soft-white shadow-lg shadow-sage/20"
                  : "text-bark/60 hover:text-bark"
              }`}
            >
              <PawPrint size={16} />
              For Pets
            </button>
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
          {items.map((item, i) => (
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
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                      activeTab === "pets"
                        ? "bg-sage text-soft-white"
                        : "bg-terra text-soft-white"
                    }`}
                  >
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-bark text-lg">
                    {item.name}
                  </h3>
                  <span className="font-body font-bold text-terra text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-bark/50 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.zomato.com/pune/the-pet-cafe-pune-koregaon-park"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-bold text-terra hover:text-terra-dark transition-colors group"
          >
            View Full Menu on Zomato
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Services Section ─── */
function Services() {
  const services = [
    {
      icon: Coffee,
      title: "Cafe",
      desc: "Artisan coffee, gourmet sandwiches, pasta, pizza & more. Vegan options available.",
      img: "/images/petcafe/rooftop.png",
      color: "terra",
    },
    {
      icon: HomeIcon,
      title: "Boarding",
      desc: "Safe, comfortable overnight stays for your pets while you're away. Cared for like family.",
      img: "/images/petcafe/pets.png",
      color: "sage",
    },
    {
      icon: Scissors,
      title: "Grooming",
      desc: "Professional pet grooming with gentle hands. Bath, haircut, nail trim & spa treatments.",
      img: "/images/petcafe/grooming.png",
      color: "terra",
    },
    {
      icon: ShoppingBag,
      title: "Pet Store",
      desc: "Premium pet food, toys, accessories & treats. Everything your furry friend needs.",
      img: "/images/petcafe/petstore.png",
      color: "sage",
    },
  ];

  return (
    <RevealSection
      id="services"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-sage relative"
    >
      <div className="paw-pattern absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-separator" />
            <span className="font-body text-sm font-bold text-sage-dark tracking-[0.15em] uppercase">
              What We Offer
            </span>
            <div className="section-separator" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bark mb-4">
            More Than Just a{" "}
            <span className="text-sage-dark">Cafe</span>
          </h2>
          <p className="font-body text-bark/60 text-lg max-w-2xl mx-auto">
            From your morning coffee to your pet&apos;s spa day — we&apos;re your
            one-stop destination for everything pet and people.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/40 to-transparent" />
                <div
                  className={`absolute bottom-3 left-3 p-2 rounded-xl ${
                    service.color === "terra" ? "bg-terra" : "bg-sage"
                  }`}
                >
                  <service.icon size={20} className="text-soft-white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-bark text-xl mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-bark/55 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* ─── Adoption Section ─── */
function Adoption() {
  return (
    <RevealSection
      id="adopt"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bark" />
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/petcafe/adoption.png')" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Counter & Message */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-paw-gold" />
              <span className="font-body text-sm font-bold text-paw-gold tracking-[0.15em] uppercase">
                Adopt, Love, Repeat
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-soft-white mb-6 leading-tight">
              Every Adoption
              <br />
              <span className="text-coral-light">Saves Two Lives</span>
            </h2>
            <p className="font-body text-soft-white/70 text-lg leading-relaxed mb-8">
              The one who gets a home, and the one who finds a reason to
              keep going. At The Pet Cafe, every rescue has a story, and
              every adoption writes a new beginning.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: 783, suffix: "+", label: "Adoptions", icon: Heart },
                { value: 100, suffix: "%", label: "Rescue", icon: Shield },
                { value: 0, prefix: "₹", suffix: "", label: "Adoption Fee", icon: Sparkles },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-soft-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-soft-white/10"
                >
                  <stat.icon
                    size={20}
                    className="text-coral-light mx-auto mb-2"
                  />
                  <div className="font-display text-2xl sm:text-3xl font-bold text-paw-gold">
                    {stat.prefix}
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="font-body text-xs text-soft-white/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/thepetcafepune/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-bark font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram size={18} />
              See Adoptions on Instagram
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
                src="/images/petcafe/adoption.png"
                alt="Happy adoption at The Pet Cafe Pune"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </motion.div>
            {/* Heart Beat Badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-coral rounded-2xl p-4 shadow-xl"
            >
              <Heart size={32} className="text-soft-white fill-soft-white" />
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
    { src: "/images/petcafe/hero.png", alt: "The Pet Cafe Interior", span: "col-span-2 row-span-2" },
    { src: "/images/petcafe/pets.png", alt: "Pets at the cafe", span: "" },
    { src: "/images/petcafe/grooming.png", alt: "Pet grooming service", span: "" },
    { src: "/images/petcafe/rooftop.png", alt: "Rooftop seating", span: "col-span-2" },
    { src: "/images/petcafe/coffee.png", alt: "Artisan coffee", span: "" },
    { src: "/images/petcafe/pupcakes.png", alt: "Pet pupcakes", span: "" },
  ];

  return (
    <RevealSection className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-gradient-peach relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-separator" />
            <span className="font-body text-sm font-bold text-terra tracking-[0.15em] uppercase">
              Gallery
            </span>
            <div className="section-separator" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bark mb-4">
            Life at the{" "}
            <span className="text-terra">Cafe</span>
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

/* ─── Visit Us Section ─── */
function VisitUs() {
  return (
    <RevealSection
      id="visit"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-soft-white relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-separator" />
            <span className="font-body text-sm font-bold text-terra tracking-[0.15em] uppercase">
              Find Us
            </span>
            <div className="section-separator" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-bark mb-4">
            Come Say{" "}
            <span className="text-terra">Hello</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] sm:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8!2d73.8929!3d18.5394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10579ac6855%3A0xed386e8d901a54f4!2sThe%20Pet%20Cafe%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Pet Cafe Pune Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-warm-cream rounded-2xl p-6 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-terra/10 shrink-0">
                <MapPin size={22} className="text-terra" />
              </div>
              <div>
                <h3 className="font-display font-bold text-bark text-lg mb-1">
                  Address
                </h3>
                <p className="font-body text-bark/60 text-sm">
                  Plot No. 122, 2, Lane 4, Suyojana Society,
                  <br />
                  North Main Road, Koregaon Park, Pune 411001
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-warm-cream rounded-2xl p-6 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-sage/10 shrink-0">
                <Clock size={22} className="text-sage-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-bark text-lg mb-1">
                  Timings
                </h3>
                <div className="font-body text-bark/60 text-sm space-y-1">
                  <p>
                    <span className="font-semibold text-bark/80">
                      Mon – Fri:
                    </span>{" "}
                    12:00 PM – 9:00 PM
                  </p>
                  <p>
                    <span className="font-semibold text-bark/80">
                      Sat – Sun:
                    </span>{" "}
                    9:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-warm-cream rounded-2xl p-6 flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-coral/10 shrink-0">
                <Phone size={22} className="text-coral" />
              </div>
              <div>
                <h3 className="font-display font-bold text-bark text-lg mb-1">
                  Contact
                </h3>
                <a
                  href="tel:9595224965"
                  className="font-body text-terra font-semibold text-sm hover:text-terra-dark transition-colors"
                >
                  +91 95952 24965
                </a>
                <p className="font-body text-bark/50 text-xs mt-1">
                  Call or WhatsApp for reservations
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-warm-cream rounded-2xl p-6">
              <h3 className="font-display font-bold text-bark text-lg mb-4">
                Follow Our Journey
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/thepetcafepune/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-5 py-2.5 rounded-full font-body font-bold text-sm hover:shadow-lg transition-shadow"
                >
                  <Instagram size={16} />
                  @thepetcafepune
                </a>
                <a
                  href="https://www.google.co.in/maps/place/The+Pet+Cafe+Pune/@18.539365,73.8950813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-bark text-soft-white px-5 py-2.5 rounded-full font-body font-bold text-sm hover:shadow-lg transition-shadow"
                >
                  <Star size={16} className="text-paw-gold fill-paw-gold" />
                  Google Reviews
                </a>
              </div>
              <p className="font-body text-bark/40 text-xs mt-3">
                12K+ followers on Instagram • 4.2★ on Google
              </p>
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
    <footer className="bg-bark text-soft-white/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <PawSVG size={24} className="text-paw-gold" />
              <span className="font-display text-xl font-bold text-soft-white">
                The Pet Cafe
              </span>
            </div>
            <p className="font-body text-sm text-soft-white/50 leading-relaxed mb-4">
              A pet cafe that&apos;s human friendly. Cage-free, leash-free,
              and full of love in the heart of Koregaon Park, Pune.
            </p>
            <p className="font-body text-xs text-soft-white/30">
              Founded by Devesh Baheti
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-soft-white text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Menu", href: "#menu" },
                { label: "Services", href: "#services" },
                { label: "Adopt", href: "#adopt" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-soft-white/50 hover:text-paw-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-soft-white text-sm mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Cafe & Restaurant",
                "Pet Boarding",
                "Pet Grooming",
                "Pet Store",
                "Dog Adoption",
              ].map((service) => (
                <li
                  key={service}
                  className="font-body text-sm text-soft-white/50"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-soft-white text-sm mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9595224965"
                className="flex items-center gap-2 font-body text-sm text-soft-white/50 hover:text-paw-gold transition-colors"
              >
                <Phone size={14} />
                +91 95952 24965
              </a>
              <a
                href="https://www.instagram.com/thepetcafepune/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-soft-white/50 hover:text-paw-gold transition-colors"
              >
                <Instagram size={14} />
                @thepetcafepune
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-soft-white/50">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                Plot 122, Lane 4, North Main Rd, KP, Pune
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-soft-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-soft-white/30">
            © {new Date().getFullYear()} The Pet Cafe Pune. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <PawSVG size={14} className="text-paw-gold/30" />
            <span className="font-body text-xs text-soft-white/30">
              Adopt, Love, Repeat
            </span>
            <PawSVG size={14} className="text-paw-gold/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function ThePetCafePage() {
  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OurStory />
        <MenuSection />
        <Services />
        <Adoption />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
