import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, DiscordLogo } from '@phosphor-icons/react'

const team = [
  {
    name: 'Pedro',
    role: 'Fundador & Desenvolvedor',
    discord: 'carljohnsso_18173',
    description: 'Líder técnico e criador da Kaelix Hub. Responsável pelo desenvolvimento dos scripts e integração do sistema.',
  },
  {
    name: 'João',
    role: 'Fundador & Desenvolvedor',
    discord: 'j0_4_0alt',
    description: 'Co-fundador e desenvolvedor da Kaelix Hub. Atua na otimização e na infraestrutura da plataforma.',
  },
]

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full h-full flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              background: `radial-gradient(circle, oklch(0.62 0.27 295 / ${Math.random() * 0.3 + 0.1}), transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * (0.02 + i * 0.002),
              y: (mousePosition.y - window.innerHeight / 2) * (0.02 + i * 0.002),
              scale: [1, 1.2, 1],
            }}
            transition={{
              x: { duration: 0.5, ease: 'easeOut' },
              y: { duration: 0.5, ease: 'easeOut' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px"
            style={{
              width: '100%',
              background: `linear-gradient(90deg, transparent, oklch(0.62 0.27 295 / 0.2), transparent)`,
              top: `${(i + 1) * 12.5}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 neon-glow"
        >
          Nossa Equipe
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass-card rounded-xl p-8 hover:shadow-[0_0_40px_rgba(125,44,255,0.4)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Crown size={32} weight="fill" className="text-accent" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    Função
                  </p>
                  <p className="text-lg font-semibold">{member.role}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    Discord
                  </p>
                  <div className="flex items-center gap-2">
                    <DiscordLogo weight="fill" className="text-primary" />
                    <p className="text-base font-medium">{member.discord}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                    Descrição
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
