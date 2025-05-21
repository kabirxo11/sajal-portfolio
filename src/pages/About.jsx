
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import SkillsSection from '@/components/SkillsSection';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img  
                  alt="Sajal, a professional graphic designer in a creative workspace" 
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1607004010229-6048c57c2ab1" />
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-48 h-48 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg glass-effect"
                  initial={{ opacity: 0, y: 50, x: 50 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                      <p className="text-2xl font-bold gradient-text">200+</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</p>
                      <p className="text-2xl font-bold gradient-text">150+</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                ABOUT ME
              </motion.span>
              
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                I'm <span className="gradient-text">Sajal</span>, a Passionate Graphic Designer
              </motion.h1>
              
              <motion.div 
                className="text-gray-600 dark:text-gray-300 space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p>
                  With over 5 years of experience in the design industry, I've had the privilege of working with clients across various sectors, from startups to established brands.
                </p>
                <p>
                  My design philosophy centers around creating meaningful visual experiences that not only look beautiful but also effectively communicate my clients' messages and achieve their business objectives.
                </p>
                <p>
                  I specialize in brand identity design, UI/UX, illustration, and print design. My approach combines strategic thinking with creative execution to deliver designs that stand out in today's competitive landscape.
                </p>
                <p>
                  When I'm not designing, you can find me exploring new design trends, attending creative workshops, or seeking inspiration in art galleries and nature.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 px-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <SkillsSection />
      
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.p 
              className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              MY JOURNEY
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Education & <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-purple-500 pl-8 pb-8">
              <div className="absolute w-4 h-4 rounded-full bg-purple-500 -left-[9px] top-0"></div>
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">2020 - Present</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Senior Graphic Designer</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Creative Solutions Agency</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Lead designer for major brand identity projects. Managed a team of junior designers and collaborated with marketing and development teams to create cohesive brand experiences.
                </p>
              </motion.div>
              
              <div className="absolute w-4 h-4 rounded-full bg-purple-500 -left-[9px] top-[180px]"></div>
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">2018 - 2020</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Graphic Designer</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Design Studio X</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Created visual assets for digital and print campaigns. Worked directly with clients to understand their needs and deliver designs that exceeded expectations.
                </p>
              </motion.div>
              
              <div className="absolute w-4 h-4 rounded-full bg-purple-500 -left-[9px] top-[360px]"></div>
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">2016 - 2018</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Junior Designer</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Global Marketing Inc.</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Assisted senior designers with various projects. Developed skills in brand identity, packaging design, and digital marketing assets.
                </p>
              </motion.div>
              
              <div className="absolute w-4 h-4 rounded-full bg-purple-500 -left-[9px] top-[540px]"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">2012 - 2016</span>
                <h3 className="text-xl font-bold mt-1 mb-2">Bachelor of Fine Arts in Graphic Design</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">School of Visual Arts</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Graduated with honors. Focused on typography, brand identity, and digital design. Senior thesis project received department award.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
