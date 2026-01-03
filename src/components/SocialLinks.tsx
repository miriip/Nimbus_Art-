import { motion } from 'framer-motion'
import { Instagram, Music2, FolderOpen, ExternalLink } from 'lucide-react'

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nimbu.sart?igsh=MThxNGdybTlqZTRvOA==',
      icon: <Instagram className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-400 hover:to-purple-500',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@nimbu_sart?_r=1&_t=ZM-92kbCTA6I2a',
      icon: <Music2 className="w-8 h-8" />,
      color: 'from-black to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-black',
    },
    {
      name: 'Drive - Galería',
      url: 'https://drive.google.com/drive/folders/1yeM3xra3AYx12j1DV0gkd2e7fEZEQVP5',
      icon: <FolderOpen className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      hoverColor: 'hover:from-yellow-400 hover:to-orange-400',
    },
  ]

  return (
    <section id="social" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-neon mb-6">
            Síguenos
          </h2>
          <div className="h-1 w-32 bg-gradient-neon mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">
            Conecta con nosotros en nuestras redes sociales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative overflow-hidden rounded-lg bg-gradient-to-br ${link.color} ${link.hoverColor} p-8 border-2 border-transparent hover:border-neon-cyan/50 transition-all duration-300 shadow-lg hover:shadow-neon-glow`}
            >
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {link.name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm">Visitar</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialLinks

