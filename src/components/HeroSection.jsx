
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800"></div>
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-300 dark:bg-purple-900 opacity-20 blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-pink-300 dark:bg-pink-900 opacity-20 blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Graphic Designer
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm <span className="gradient-text">Sajal</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Creative Designer</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I create stunning visual identities, illustrations, and digital designs that help brands stand out and connect with their audience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 h-auto text-base">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 px-8 py-6 h-auto text-base">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img  
                alt="Sajal, a graphic designer working on creative designs" 
                className="w-full h-full object-cover"
               src="https://images.unsplash.com/photo-1675119715594-30fde4bd3dbc" />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg glass-effect"
                initial={{ opacity: 0, y: 50, x: 50 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="text-2xl font-bold gradient-text">5+ Years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                    <p className="text-2xl font-bold gradient-text">200+</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -left-6 w-48 h-48 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg glass-effect"
                initial={{ opacity: 0, y: -50, x: -50 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Specializing in</p>
                    <p className="text-xl font-bold gradient-text">Brand Identity</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Also expert in</p>
                    <p className="text-xl font-bold gradient-text">UI/UX Design</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
