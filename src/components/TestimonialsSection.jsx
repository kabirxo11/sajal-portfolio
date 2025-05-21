
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Elevate Brands',
    content: 'Sajal transformed our brand identity completely. The designs were not only beautiful but strategically aligned with our business goals. The attention to detail and creativity exceeded our expectations.',
    rating: 5,
    imageAlt: 'Sarah Johnson, Marketing Director at Elevate Brands'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'Spark Digital',
    content: 'Working with Sajal was a game-changer for our startup. The logo and brand identity package helped us stand out in a crowded market. Professional, responsive, and incredibly talented!',
    rating: 5,
    imageAlt: 'Michael Chen, Founder and CEO of Spark Digital'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Horizon Apps',
    content: 'The UI designs Sajal created for our app were exceptional. User engagement increased by 40% after implementation. A true professional who understands both aesthetics and functionality.',
    rating: 5,
    imageAlt: 'Emily Rodriguez, Product Manager at Horizon Apps'
  }
];

const TestimonialsSection = () => {
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
            TESTIMONIALS
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What My <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Don't just take my word for it. Here's what clients have to say about working with me.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img  
                    alt={testimonial.imageAlt}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
