import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'

export const Resources = () => {
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

  const resourceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-spacing bg-white" id="recursos">
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
            Conteúdo premium para seu desenvolvimento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Biblioteca crescente de recursos curados por especialistas de renome
          </p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteData.resources.map((resource) => {
            const IconComponent = resource.icon

            return (
              <motion.div
                key={resource.id}
                variants={resourceVariants}
                whileHover={{ y: -8 }}
                className="card bg-white border border-gray-200 rounded-2xl p-8 overflow-hidden group cursor-pointer"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-soft/0 to-rose-soft/0 group-hover:from-rose-soft/20 group-hover:to-rose-soft/40 transition-all duration-500 -z-10" />

                {/* Category Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block mb-6"
                >
                  <span className="px-3 py-1 bg-taupe/10 text-taupe text-xs font-semibold rounded-full">
                    {resource.category}
                  </span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal/5 to-charcoal/10 flex items-center justify-center mb-6 transition-all duration-300"
                >
                  <IconComponent size={24} className="text-charcoal" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-4 group-hover:text-taupe transition-colors duration-300 line-clamp-2">
                  {resource.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {resource.description}
                </p>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center text-taupe font-medium group/link"
                >
                  <span className="text-sm">Acessar agora</span>
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>

                {/* Border animation */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-taupe to-charcoal mt-6"
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Ver toda biblioteca
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
