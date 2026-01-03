import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-neon-cyan/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-neon-cyan animate-pulse" />
            <h3 className="text-2xl font-bold text-gradient-neon">
              NIMBUS ART
            </h3>
            <Sparkles className="w-6 h-6 text-neon-pink animate-pulse" />
          </div>
          <p className="text-gray-400 mb-4">
            Arte iluminado que transforma espacios
          </p>
          <div className="h-px w-32 bg-gradient-neon mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nimbus Art. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

