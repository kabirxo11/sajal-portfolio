import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioItems } from '@/data/portfolioData';

const categories = ['All', 'Branding', 'UI/UX', 'Packaging', 'Print', 'Web Design', 'Digital'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my recent design projects across various categories. Each project represents a unique challenge and creative solution.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Link to={`/portfolio/${item.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <div className="aspect-[4/3] w-full">
                      <img  
                        alt={item.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                       src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">{item.category}</span>
                        <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Portfolio;