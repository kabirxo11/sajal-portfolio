
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Lightbulb, PenTool, Layers, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
    title: 'Discovery',
    description: 'I start by understanding your business, goals, and target audience to ensure the design aligns with your vision.'
  },
  {
    icon: <Search className="h-8 w-8 text-purple-600" />,
    title: 'Research',
    description: 'Thorough research of your industry, competitors, and trends to inform strategic design decisions.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
    title: 'Concept',
    description: 'Developing initial concepts and ideas based on research findings and project requirements.'
  },
  {
    icon: <PenTool className="h-8 w-8 text-purple-600" />,
    title: 'Design',
    description: 'Creating polished designs with attention to detail, aesthetics, and functionality.'
  },
  {
    icon: <Layers className="h-8 w-8 text-purple-600" />,
    title: 'Revisions',
    description: 'Refining the designs based on your feedback until we achieve the perfect result.'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
    title: 'Delivery',
    description: 'Providing final deliverables in all required formats, along with guidelines for implementation.'
  }
];

const ProcessSection = () => {
  return (
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
            HOW I WORK
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My Design <span className="gradient-text">Process</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A structured approach to ensure every project is completed efficiently and meets your expectations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span className="font-bold text-purple-600 dark:text-purple-400">{index + 1}</span>
              </div>
              <div className="mb-4 mt-2">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
