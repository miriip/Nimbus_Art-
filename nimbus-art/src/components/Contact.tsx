import { motion } from 'framer-motion'
import { MessageCircle, Instagram, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      name: 'WhatsApp',
      url: 'http://wa.me/5491121663911',
      icon: <MessageCircle className="w-8 h-8" />,
      description: 'Escríbenos directamente para consultas y pedidos personalizados',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-400 hover:to-emerald-500',
      buttonText: 'Abrir WhatsApp',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nimbu.sart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: <Instagram className="w-8 h-8" />,
      description: 'Síguenos y contáctanos a través de nuestros mensajes directos',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-400 hover:to-purple-500',
      buttonText: 'Ir a Instagram',
    },
  ]

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-neon mb-6">
            Contacto
          </h2>
          <div className="h-1 w-32 bg-gradient-neon mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido personalizado? Contáctanos a través de cualquiera de nuestros canales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${method.color} ${method.hoverColor} p-8 border-2 border-transparent hover:border-neon-cyan/50 transition-all duration-300 shadow-lg hover:shadow-neon-glow`}
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icono */}
                <motion.div
                  className="mb-6 text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {method.icon}
                </motion.div>

                {/* Nombre */}
                <h3 className="text-3xl font-bold text-white mb-3">
                  {method.name}
                </h3>

                {/* Descripción */}
                <p className="text-white/90 mb-6 text-center leading-relaxed">
                  {method.description}
                </p>

                {/* Botón */}
                <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <span className="text-white font-semibold">{method.buttonText}</span>
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Partículas decorativas */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-white rounded-full opacity-60"></div>
            </motion.a>
          ))}
        </div>

        {/* Mensaje adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Estamos aquí para ayudarte a crear el cuadro perfecto para tu espacio
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

