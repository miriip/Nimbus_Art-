import { motion } from 'framer-motion'
import { Lightbulb, Image as ImageIcon, ExternalLink } from 'lucide-react'

const Products = () => {
  const products = [
    {
      title: 'Cuadros Iluminados',
      description: 'Cuadros con iluminación integrada que transforman cualquier espacio. Perfectos como decoración o como velador, creando una atmósfera única y futurista.',
      icon: <Lightbulb className="w-16 h-16" />,
      gradient: 'from-neon-cyan via-neon-blue to-neon-pink',
      borderColor: 'border-neon-cyan/50 hover:border-neon-cyan',
      exampleUrl: 'https://www.instagram.com/p/DSQmalSif89/?igsh=cWlyMmZqMnZvaDB3',
      features: ['Iluminación LED integrada', 'Funciona como velador', 'Imagen y tamaño personalizado', 'Efecto neon cósmico'],
    },
    {
      title: 'Cuadros de Vinilo con Resina',
      description: 'Cuadros de alta calidad con acabado en resina que realza los colores y detalles. Sin iluminación, perfectos para espacios donde buscas un acabado premium.',
      icon: <ImageIcon className="w-16 h-16" />,
      gradient: 'from-neon-pink via-neon-purple to-neon-blue',
      borderColor: 'border-neon-pink/50 hover:border-neon-pink',
      exampleUrl: 'https://www.instagram.com/reel/DSS-s1jiV01/?igsh=ZW5lcmJkMDZ3ZmJu',
      features: ['Acabado en resina premium', 'Colores vibrantes', 'Imagen y tamaño personalizado', 'Sin iluminación'],
    },
  ]

  return (
    <section id="products" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-neon mb-6">
            Nuestros Productos
          </h2>
          <div className="h-1 w-32 bg-gradient-neon mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Ofrecemos dos tipos de cuadros personalizados para que elijas el que mejor se adapte a tu espacio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className={`relative p-8 md:p-10 bg-cosmic-dark/50 backdrop-blur-sm border-2 ${product.borderColor} rounded-2xl transition-all duration-300 hover:shadow-neon-glow h-full flex flex-col`}>
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Icono */}
                  <motion.div
                    className={`mb-6 flex justify-center text-gradient-neon`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {product.icon}
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gradient-neon mb-4 text-center">
                    {product.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-300 text-lg mb-6 text-center leading-relaxed">
                    {product.description}
                  </p>

                  {/* Características */}
                  <div className="mb-6 space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link de ejemplo */}
                  <motion.a
                    href={product.exampleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${product.gradient} bg-opacity-20 border border-opacity-50 hover:bg-opacity-30 transition-all duration-300 mt-auto`}
                  >
                    <span className="text-white font-semibold">Ver Ejemplo</span>
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                </div>

                {/* Partículas decorativas */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-neon-cyan rounded-full opacity-40"></div>
                <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-neon-pink rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-neon-purple rounded-full opacity-40"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

