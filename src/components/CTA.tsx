import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteData } from '../data/siteData'

export const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-cream" id="contato">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-br from-charcoal to-charcoal/90 rounded-3xl p-16 md:p-24 text-center relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-rose-soft/10 rounded-full -mr-48 -mt-24 blur-3xl"
          />

          <div className="relative z-10">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6"
            >
              {siteData.cta.headline}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-cream/80 max-w-2xl mx-auto mb-12"
            >
              {siteData.cta.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-cream text-charcoal rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                {siteData.cta.button}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 border-2 border-cream text-cream rounded-full font-semibold transition-all duration-300 hover:bg-cream hover:text-charcoal"
              >
                Fale com especialista
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 pt-16 border-t border-cream/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cream">24h</div>
                <div className="text-cream/60 text-sm">Suporte ativo</div>
              </div>
              <div className="hidden md:block w-px h-8 bg-cream/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-cream">100%</div>
                <div className="text-cream/60 text-sm">Seguro de dados</div>
              </div>
              <div className="hidden md:block w-px h-8 bg-cream/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-cream">Fácil</div>
                <div className="text-cream/60 text-sm">Cancelamento anytime</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
