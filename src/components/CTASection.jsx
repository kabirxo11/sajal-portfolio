
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-8 md:px-16 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to Bring Your Vision to Life?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Let's collaborate to create designs that captivate your audience and elevate your brand. Get in touch today to discuss your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 h-auto text-base">
                <Link to="/contact" className="inline-flex items-center">
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
