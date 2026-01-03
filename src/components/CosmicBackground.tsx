import { useEffect, useRef } from 'react'

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Partículas estelares
    const stars: Array<{
      x: number
      y: number
      radius: number
      opacity: number
      speed: number
    }> = []

    const createStars = () => {
      stars.length = 0
      const starCount = Math.floor((canvas.width * canvas.height) / 15000)
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1,
        })
      }
    }

    createStars()

    const animate = () => {
      ctx.fillStyle = '#050510'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Actualizar opacidad para efecto twinkle
        star.opacity += Math.sin(Date.now() * star.speed * 0.001) * 0.02
        
        // Asegurar que la opacidad esté en rango
        if (star.opacity > 1) star.opacity = 1
        if (star.opacity < 0.2) star.opacity = 0.2

        // Dibujar estrella con gradiente
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 3
        )
        
        // Colores neon aleatorios
        const colors = [
          'rgba(0, 240, 255,',
          'rgba(0, 102, 255,',
          'rgba(255, 0, 255,',
          'rgba(139, 0, 255,',
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]
        
        gradient.addColorStop(0, `${color}${star.opacity})`)
        gradient.addColorStop(0.5, `${color}${star.opacity * 0.5})`)
        gradient.addColorStop(1, `${color}0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Punto central brillante
        ctx.fillStyle = `${color}${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default CosmicBackground

