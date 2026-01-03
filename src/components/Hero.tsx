import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            className="relative inline-block mb-6"
            animate={{ 
              filter: [
                'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))',
                'drop-shadow(0 0 30px rgba(255, 0, 255, 0.5))',
                'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-gradient-neon glow-text">
              NIMBUS
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-neon-cyan to-neon-cyan"></div>
            <Sparkles className="w-8 h-8 text-neon-pink animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent via-neon-pink to-neon-pink"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-gradient-neon"
          >
            ART
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300 font-light tracking-wider mb-12"
        >
          Cuadros Iluminados • Arte Cósmico
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-cyan rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-neon-cyan to-neon-pink rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

