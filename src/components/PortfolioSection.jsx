
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProjects = [
  {
    id: 1,
    title: 'Eco Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity design for an eco-friendly product line.',
    imageAlt: 'Eco-friendly brand identity design with logo, packaging, and brand guidelines'
  },
  {
    id: 2,
    title: 'Mobile App UI Design',
    category: 'UI/UX',
    description: 'User interface design for a fitness tracking mobile application.',
    imageAlt: 'Mobile app UI design showing various screens of a fitness tracking application'
  },
  {
    id: 3,
    title: 'Product Packaging',
    category: 'Packaging',
    description: 'Creative packaging design for a premium coffee brand.',
    imageAlt: 'Creative coffee packaging design with modern typography and elegant color scheme'
  }
];

const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            MY WORK
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A selection of my recent design work across various industries and design disciplines.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <Link to={`/portfolio/${project.id}`} className="block">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="aspect-[4/3] w-full">
                    <img  
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                      <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Link to="/portfolio" className="inline-flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
