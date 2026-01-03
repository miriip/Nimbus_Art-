import { motion } from 'framer-motion'
import { Palette, Lightbulb, Sparkles } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Arte Único',
      description: 'Cada cuadro es una pieza única, creada con pasión y dedicación.',
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Iluminación Especial',
      description: 'Cuadros que cobran vida con iluminación integrada, creando una experiencia visual única.',
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Estilo Cósmico',
      description: 'Inspiración en el cosmos, el espacio y la tecnología para crear arte futurista.',
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-neon mb-6">
            ¿Quién es Nimbus?
          </h2>
          <div className="h-1 w-32 bg-gradient-neon mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nimbus Art es un espacio donde el arte se encuentra con la tecnología. 
            Especializados en cuadros iluminados que transforman cualquier ambiente, 
            creamos piezas únicas que combinan estética cósmica con iluminación innovadora.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              <div className="relative p-8 bg-cosmic-dark/50 backdrop-blur-sm border border-neon-cyan/20 rounded-lg hover:border-neon-pink/50 transition-all duration-300 hover:shadow-neon-glow">
                <div className="text-gradient-neon mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gradient-neon mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

