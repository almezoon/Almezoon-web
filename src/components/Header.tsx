'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/#products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/' && href !== '/'
    return pathname === href
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md z-50 transition-all duration-300 sticky top-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/images/logo.png" alt="Al Mezoon Logo" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-sm font-medium text-gray-900">Al Mezoon marbles and granites ind.L.L.C</h1>
              </div>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a href="tel:+97165311778" className="flex items-center text-amber-600 hover:text-amber-700 font-medium">
              📞 +971 6 531 1778
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href.startsWith('/#') ? (
                  <a
                    href={item.href}
                    className={`font-medium transition-colors duration-300 ${
                      isActive(item.href) 
                        ? 'text-amber-600' 
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors duration-300 ${
                      isActive(item.href) 
                        ? 'text-amber-600' 
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block py-2"
              >
                {item.href.startsWith('/#') ? (
                  <a
                    href={item.href}
                    className={`font-medium transition-colors duration-300 ${
                      isActive(item.href) 
                        ? 'text-amber-600' 
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors duration-300 ${
                      isActive(item.href) 
                        ? 'text-amber-600' 
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            
            {/* Mobile Contact */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <a href="tel:+97165311778" className="flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm">
                📞 +971 6 531 1778
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header 