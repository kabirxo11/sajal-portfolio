
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Adobe InDesign', level: 85 },
  { name: 'Figma', level: 90 },
  { name: 'Sketch', level: 80 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Typography', level: 90 },
  { name: 'Color Theory', level: 95 },
];

const SkillsSection = () => {
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
            MY EXPERTISE
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Skills & <span className="gradient-text">Proficiency</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I've honed my skills across various design tools and principles to deliver exceptional results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="scroll-animation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
