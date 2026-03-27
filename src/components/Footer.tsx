import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'
import { Key } from 'lucide-react'

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-charcoal text-cream py-20">
      <div className="container-max">
        {/* Main footer content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-2xl font-bold mb-4">Advocate</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              {siteData.footer.description}
            </p>
          </motion.div>

          {/* Links sections */}
          {siteData.footer.sections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold text-cream mb-4 font-serif">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="text-cream/60 hover:text-cream transition-colors duration-300 text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent mb-12 origin-left"
        />

        {/* Bottom section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-cream/40 text-sm"
          >
            © 2024 Advocate. Todos os direitos reservados.
          </motion.p>

          {/* Link Portifolio Desenvolvedor */}
          <motion.p
            variants={itemVariants}
            className="text-cream/40 text-sm"
          >
            {siteData.footer.developer.map((developer) => (
              <motion.a
                key={developer.name}
                href={developer.url}
                whileHover={{scale: 1.2, rotate: 5}}
                className="text-cream/60 hover:text-cream transition-colors duration-300 font-medium text-sm"
              >
                {developer.name}
              </motion.a>
            ))}
          </motion.p>
          
          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mt-8 md:mt-0"
          >
            {siteData.footer.social.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-cream/60 hover:text-cream transition-colors duration-300 font-medium text-sm"
              >
                {social.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block fixed bottom-10 right-10 w-12 h-12 rounded-full bg-cream text-charcoal flex items-center justify-center shadow-lg z-40"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  )
}
