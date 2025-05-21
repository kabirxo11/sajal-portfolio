
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, PenTool, Layers, Monitor, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-10 w-10 text-purple-600" />,
    title: 'Brand Identity',
    description: 'Crafting unique and memorable brand identities that resonate with your target audience and set you apart from competitors.'
  },
  {
    icon: <Layout className="h-10 w-10 text-purple-600" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces that provide exceptional user experiences across web and mobile platforms.'
  },
  {
    icon: <PenTool className="h-10 w-10 text-purple-600" />,
    title: 'Illustration',
    description: 'Developing custom illustrations and visual assets that enhance your brand story and communicate complex ideas simply.'
  },
  {
    icon: <Layers className="h-10 w-10 text-purple-600" />,
    title: 'Print Design',
    description: 'Designing high-quality print materials from business cards to brochures that make a lasting impression on your audience.'
  },
  {
    icon: <Monitor className="h-10 w-10 text-purple-600" />,
    title: 'Web Design',
    description: 'Building visually stunning and functional websites that effectively communicate your brand message and drive conversions.'
  },
  {
    icon: <Megaphone className="h-10 w-10 text-purple-600" />,
    title: 'Social Media',
    description: 'Creating eye-catching social media graphics and campaigns that boost engagement and strengthen your online presence.'
  }
];

const ServicesSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

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
            WHAT I OFFER
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I provide comprehensive design solutions to help businesses and individuals establish a strong visual presence.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
