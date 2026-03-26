import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { siteData } from '../data/siteData'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container-max flex items-center justify-between py-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-serif text-2xl font-bold text-charcoal cursor-pointer"
        >
          {siteData.nav.logo}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {siteData.nav.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ color: '#9B8B84' }}
              className="text-charcoal font-medium transition-colors duration-300 hover:text-taupe"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden bg-charcoal text-cream p-2 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={menuVariants}
        className="md:hidden border-t border-gray-200 bg-cream"
      >
        <div className="container-max flex flex-col gap-4 py-6">
          {siteData.nav.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-charcoal font-medium py-2 hover:text-taupe transition-colors"
              whileHover={{ x: 8 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
