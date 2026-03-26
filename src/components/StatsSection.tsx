import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'

export const StatsSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-spacing bg-white" id="estatisticas">
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
            Números que dizem a história
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Impacto real e mensurável em cada comunidade que ajudamos a transformar
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {siteData.stats.map((stat) => (
            <motion.div
              key={stat.number}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="card bg-gradient-to-br from-cream to-rose-soft p-10 border border-gray-200"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="font-serif text-5xl md:text-6xl font-bold text-charcoal">
                  {stat.number}
                </div>
              </motion.div>

              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                {stat.label}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="h-0.5 bg-gradient-to-r from-taupe to-transparent mt-8"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
