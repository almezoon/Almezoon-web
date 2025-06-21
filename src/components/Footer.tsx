'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = {
    services: [
      { name: 'Fabrication', href: '#services' },
      { name: 'Installation', href: '#services' },
      { name: 'Material Supply', href: '#services' }
    ],
    company: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Products', href: '#products' },
      { name: 'Clients', href: '#clients' },
      { name: 'Contact', href: '#contact' }
    ]
  }

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/almezoon_2000/',
      icon: Instagram
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100063595631081',
      icon: Facebook
    },
    {
      name: 'YouTube',
      href: '#',
      icon: Youtube
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/97165311778',
      icon: MessageCircle
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Al Mezoon</h1>
                  <p className="text-xs text-gray-400">Marbles & Granites</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 max-w-md">
                Trusted since 2000 for premium marble, granite, and quartz solutions across the UAE. Leading the industry with exceptional craftsmanship and quality.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">+971 6 531 1778</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">info@almezoon-uae.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div className="text-gray-300">
                    <p>P.O.Box 60720</p>
                    <p>Al Sajja Industrial Area</p>
                    <p>Sharjah, UAE</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links - Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {quickLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Quick Links - Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {quickLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
                Follow Us
              </h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="border-t border-gray-800 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Al Mezoon Marbles & Granites Ind. LLC. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer 