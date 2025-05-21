
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Dribbble, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Dribbble size={20} />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">Sajal</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Creative graphic designer specializing in brand identity, illustration, and digital design. Turning ideas into visual stories.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4">Contact Info</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-primary mt-1" />
                <span className="text-gray-600 dark:text-gray-400">sajal@example.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-primary mt-1" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary mt-1" />
                <span className="text-gray-600 dark:text-gray-400">New York, NY, United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sajal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Privacy Policy
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
