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

  return (
    <section ref={sectionRef} className="w-full h-full flex items-center justify-center px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
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
