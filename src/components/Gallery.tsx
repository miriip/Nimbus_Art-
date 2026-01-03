import { motion } from 'framer-motion'
import { FolderOpen, ExternalLink, Images } from 'lucide-react'

const Gallery = () => {
  const driveUrl = 'https://drive.google.com/drive/folders/1yeM3xra3AYx12j1DV0gkd2e7fEZEQVP5'

  return (
    <section id="gallery" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-neon mb-6">
            Galería
          </h2>
          <div className="h-1 w-32 bg-gradient-neon mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Explora nuestro catálogo de imágenes para elegir tu cuadro personalizado
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cosmic-dark/80 to-cosmic-darker/80 backdrop-blur-sm border-2 border-neon-cyan/30 hover:border-neon-pink/50 transition-all duration-300 shadow-lg hover:shadow-neon-glow p-12 md:p-16 max-w-2xl w-full"
          >
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              {/* Icono principal */}
              <motion.div
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))',
                    'drop-shadow(0 0 30px rgba(255, 0, 255, 0.5))',
                    'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6"
              >
                <div className="relative">
                  <FolderOpen className="w-20 h-20 md:w-24 md:h-24 text-gradient-neon" />
                  <Images className="w-12 h-12 md:w-16 md:h-16 text-neon-pink absolute -bottom-2 -right-2 animate-pulse" />
                </div>
              </motion.div>

              {/* Título */}
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-neon mb-4">
                Galería de Imágenes
              </h3>

              {/* Descripción */}
              <p className="text-gray-300 text-lg md:text-xl mb-4 max-w-md">
                ¿No sabes qué imagen elegir? Explora nuestra galería y encuentra el diseño perfecto para tu cuadro iluminado personalizado
              </p>

              {/* Tamaños disponibles */}
              <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
                <div className="px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
                  <span className="text-neon-cyan font-semibold">60×40cm</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-neon-pink/10 border border-neon-pink/30">
                  <span className="text-neon-pink font-semibold">35×45cm</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-neon-purple/10 border border-neon-purple/30">
                  <span className="text-neon-purple font-semibold">Tamaño personalizado</span>
                </div>
              </div>

              {/* Botón de acción */}
              <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 border border-neon-cyan/50 group-hover:border-neon-pink/50 transition-all duration-300">
                <span className="text-white font-semibold">Explorar Catálogo</span>
                <ExternalLink className="w-5 h-5 text-neon-cyan group-hover:text-neon-pink transition-colors" />
              </div>
            </div>

            {/* Partículas decorativas */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-neon-cyan rounded-full opacity-60"></div>
            <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-neon-pink rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-6 left-8 w-1 h-1 bg-neon-purple rounded-full opacity-60"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-neon-cyan rounded-full opacity-60 animate-pulse"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery

