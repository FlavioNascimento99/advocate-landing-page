import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'

export const Pillars = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const pillarVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section className="section-spacing bg-gradient-to-b from-cream to-white" id="pilares">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Os três pilares da transformação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Base sólida para desenvolvimento profissional sustentável e impacto duradouro
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-12"
        >
          {siteData.pillars.map((pillar) => {
            const IconComponent = pillar.icon
            
            return (
              <motion.div
                key={pillar.id}
                variants={pillarVariants}
                whileHover={{ y: -8 }}
                className="card group"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-8 transition-all duration-300`}
                >
                  <IconComponent size={32} className="text-charcoal" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* CTA Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center text-taupe font-medium group/link"
                >
                  <span>Saiba mais</span>
                  <motion.svg
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.a>

                {/* Decorative bottom border */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-taupe mt-6"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
