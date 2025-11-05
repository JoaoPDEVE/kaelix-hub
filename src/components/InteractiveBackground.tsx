import { useEffect, useRef } from 'react'

interface InteractiveBackgroundProps {
  variant?: 'calm' | 'playful'
}

export function InteractiveBackground({ variant = 'calm' }: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      alpha: number
    }> = []

    const mouse = { x: 0, y: 0 }
    const particleCount = variant === 'playful' ? 80 : 40

    const colors = [
      'oklch(0.62 0.27 295)',
      'oklch(0.75 0.30 295)',
      'oklch(0.55 0.25 280)',
      'oklch(0.70 0.28 310)',
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (variant === 'playful' ? 1 : 0.3),
        vy: (Math.random() - 0.5) * (variant === 'playful' ? 1 : 0.3),
        radius: Math.random() * (variant === 'playful' ? 3 : 2) + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    const animate = () => {
      ctx.fillStyle = 'transparent'
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const maxDistance = variant === 'playful' ? 200 : 150
        const force = (maxDistance - distance) / maxDistance
        const directionX = forceDirectionX * force * (variant === 'playful' ? 0.8 : 0.3)
        const directionY = forceDirectionY * force * (variant === 'playful' ? 0.8 : 0.3)

        if (distance < maxDistance) {
          particle.vx -= directionX
          particle.vy -= directionY
        }

        particle.x += particle.vx
        particle.y += particle.vy

        particle.vx *= 0.98
        particle.vy *= 0.98

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(')', ` / ${particle.alpha})`)
        ctx.fill()

        particles.forEach((otherParticle, j) => {
          if (i === j) return
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < (variant === 'playful' ? 120 : 100)) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const lineAlpha = (1 - distance / (variant === 'playful' ? 120 : 100)) * 0.2
            ctx.strokeStyle = `oklch(0.62 0.27 295 / ${lineAlpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
