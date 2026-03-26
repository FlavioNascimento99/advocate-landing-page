import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteData } from '../data/siteData'

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-cream">
      <div className="container-max">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-charcoal"
            >
              {siteData.hero.headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              {siteData.hero.subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                {siteData.hero.cta.text}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn-secondary"
              >
                Saiba mais
              </motion.button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 pt-4"
            >
              {siteData.hero.cta.subtext}
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="hidden md:block"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={siteData.hero.image}
                alt="Educação estratégica"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <div className="text-charcoal/50 text-sm font-medium">
            Rolar para descobrir mais
          </div>
        </motion.div>
      </div>
    </section>
  )
}
