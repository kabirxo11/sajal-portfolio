
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: 'Email',
      details: 'sajalsri3456@gmail.com',
      link: 'mailto:sajalsri3456@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: 'Phone',
      details: '+91 8052777701',
      link: 'tel:+918052777701'
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: 'Location',
      details: 'Lucknow, India',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Dribbble size={20} />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

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
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out the form below or reach out directly through any of my contact channels.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-colors"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (0.1 * index) }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-xl overflow-hidden h-[400px] shadow-xl"
        >
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02587890625001%2C40.69001034095325%2C-73.94248962402345%2C40.75890281882451&amp;layer=mapnik" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
