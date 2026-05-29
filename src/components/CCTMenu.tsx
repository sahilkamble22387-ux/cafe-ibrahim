'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Flame, Leaf, Star } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  badge?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  image: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: 'pizza',
    label: 'Pizza',
    image: '/images/cct/pizza.png',
    items: [
      { name: 'Tomato Pizza Mania', price: '₹99', desc: 'Classic tomato sauce base with herbs & cheese', badge: 'Bestseller' },
      { name: 'Paneer Pizza Mania', price: '₹120', desc: 'Loaded with fresh paneer & spicy toppings', badge: 'Popular' },
      { name: 'Margherita Pizza', price: '₹110', desc: 'Timeless mozzarella, basil & tomato sauce' },
      { name: 'Veggie Supreme Pizza', price: '₹140', desc: 'Loaded with peppers, onions, olives & corn' },
      { name: 'Spicy Double Cheese', price: '₹150', desc: 'Double the cheese, double the flavour', badge: 'Cheesy' },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    image: '/images/cct/burger.png',
    items: [
      { name: 'Classic Veg Burger', price: '₹80', desc: 'Crispy patty, fresh veggies & special sauce', badge: 'Value Pick' },
      { name: 'Paneer Tikka Burger', price: '₹100', desc: 'Smoky paneer tikka in a toasted bun' },
      { name: 'Spicy Aloo Burger', price: '₹70', desc: 'Spiced potato patty with tangy chutneys', badge: 'Bestseller' },
      { name: 'Cheese Burst Burger', price: '₹120', desc: 'Oozy cheese filling in every bite' },
      { name: 'Double Patty Burger', price: '₹130', desc: 'Two crispy patties, double the satisfaction' },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    image: '/images/cct/pasta.png',
    items: [
      { name: 'Creamy White Pasta', price: '₹110', desc: 'Silky white sauce with herbs & veggies', badge: 'Must Try' },
      { name: 'Red Sauce Pasta', price: '₹100', desc: 'Tangy tomato sauce with Italian seasoning' },
      { name: 'Pink Sauce Pasta', price: '₹120', desc: 'Best of both — red & white sauce combined', badge: 'Popular' },
      { name: 'Cheese Pasta', price: '₹130', desc: 'Loaded with melted cheese goodness' },
      { name: 'Arrabiata Penne', price: '₹110', desc: 'Spicy tomato sauce with chilli flakes' },
    ],
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    image: '/images/cct/sandwich.png',
    items: [
      { name: 'Club Sandwich', price: '₹90', desc: 'Triple-decker with veggies, cheese & chutney', badge: 'Bestseller' },
      { name: 'Grilled Cheese Sandwich', price: '₹80', desc: 'Golden toasted with gooey melted cheese' },
      { name: 'Paneer Tikka Sandwich', price: '₹100', desc: 'Smoky paneer tikka filling, grilled to perfection' },
      { name: 'Veg Supreme Sandwich', price: '₹85', desc: 'Loaded with fresh veggies & mayo' },
      { name: 'Spicy Mexican Sandwich', price: '₹95', desc: 'Jalapeño, corn & spicy mayo goodness', badge: 'Spicy' },
    ],
  },
  {
    id: 'coffee-shakes',
    label: 'Coffee & Shakes',
    image: '/images/cct/cold-coffee.png',
    items: [
      { name: 'Hazelnut Hot Coffee', price: '₹45', desc: 'Rich hazelnut flavour, perfect on a rainy day', badge: 'Steal Deal' },
      { name: 'Cold Coffee', price: '₹60', desc: 'Chilled, creamy & refreshing', badge: 'Popular' },
      { name: 'Cappuccino', price: '₹55', desc: 'Frothy espresso with steamed milk' },
      { name: 'Vanilla Milkshake', price: '₹40', desc: 'Classic vanilla — smooth & sweet', badge: 'Value Pick' },
      { name: 'Strawberry Milkshake', price: '₹70', desc: 'Fresh strawberry bliss in every sip' },
      { name: 'Popcorn Milkshake', price: '₹80', desc: 'Unique caramel popcorn flavour shake', badge: 'Must Try' },
    ],
  },
];

const badgeColors: Record<string, string> = {
  Bestseller: 'bg-saffron/15 text-saffron border-saffron/20',
  Popular: 'bg-caramel/15 text-caramel-dark border-caramel/20',
  'Must Try': 'bg-coffee-light/15 text-coffee-light border-coffee-light/20',
  'Value Pick': 'bg-green-500/15 text-green-700 border-green-500/20',
  Cheesy: 'bg-gold-warm/15 text-gold-warm border-gold-warm/20',
  'Steal Deal': 'bg-green-500/15 text-green-700 border-green-500/20',
  Spicy: 'bg-red-500/15 text-red-600 border-red-500/20',
};

export default function CCTMenu() {
  const [activeTab, setActiveTab] = useState('pizza');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="font-body text-saffron font-semibold text-sm uppercase tracking-wider">
            What We Serve
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mt-2 mb-4">
            Our Menu
          </h2>
          <div className="section-separator-cct mx-auto mb-6" />
          <p className="font-body text-warm-grey max-w-xl mx-auto">
            From ₹99 pizzas to ₹40 shakes — flavour that fits every budget
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`font-display text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-coffee text-warm-cream shadow-lg shadow-coffee/20 scale-105'
                  : 'bg-peach text-espresso-mid hover:bg-linen hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* Category Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-coffee/10">
              <img
                src={activeCategory.image}
                alt={`${activeCategory.label} at Cafe Coffee Treat`}
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white text-shadow-warm">
                  {activeCategory.label}
                </span>
              </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-3">
              {activeCategory.items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="bg-warm-cream rounded-xl p-4 hover:bg-linen transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-display font-semibold text-espresso">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-body font-semibold px-2 py-0.5 rounded-full border ${
                              badgeColors[item.badge] || 'bg-saffron/15 text-saffron border-saffron/20'
                            }`}
                          >
                            {item.badge === 'Bestseller' && <Flame className="w-3 h-3" />}
                            {item.badge === 'Must Try' && <Star className="w-3 h-3" />}
                            {item.badge === 'Value Pick' && <Leaf className="w-3 h-3" />}
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-warm-grey text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-display font-bold text-saffron text-lg whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Also Available */}
              {activeTab === 'coffee-shakes' && (
                <div className="bg-peach rounded-xl p-4 mt-4">
                  <p className="font-body text-sm text-warm-grey mb-2">
                    <span className="font-semibold text-espresso-mid">Also available:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Espresso', 'Latte', 'Hot Chocolate', 'Mango Shake', 'Oreo Shake', 'Butterscotch Shake'].map(
                      (item) => (
                        <span
                          key={item}
                          className="font-body text-xs bg-white px-3 py-1.5 rounded-full text-espresso-mid"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-body text-warm-grey text-sm mb-4">
            Full menu available at the cafe • Prices inclusive of all taxes
          </p>
          <a
            href="tel:+918767432232"
            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-light text-white font-display font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Call to Order
          </a>
        </motion.div>
      </div>
    </section>
  );
}
