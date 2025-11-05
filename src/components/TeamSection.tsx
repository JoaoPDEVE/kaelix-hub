import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, DiscordLogo } from '@phosphor-icons/react'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language || 'pt']

  const team = [
    {
      name: 'Pedro',
      role: language === 'pt' ? 'Fundador & Web Designer' : 'Founder & Web Designer',
      discord: 'carljohnsso_18173',
      description: language === 'pt' 
        ? 'Especialista em programação web e design, lidera a criação visual e arquitetura da plataforma Kaelix Hub. Responsável pela interface de usuário, experiência visual, desenvolvimento do site e toda a identidade digital da marca.'
        : 'Expert in web programming and design, leads the visual creation and architecture of the Kaelix Hub platform. Responsible for user interface, visual experience, website development, and the entire digital brand identity.',
    },
    {
      name: 'João',
      role: language === 'pt' ? 'Fundador & Desenvolvedor de Scripts' : 'Founder & Script Developer',
      discord: 'j0_4_0alt',
      description: language === 'pt'
        ? 'Responsável pela criação e desenvolvimento dos scripts premium para Roblox. Especialista em otimização de performance, segurança dos códigos e implementação de funcionalidades avançadas para os jogos.'
        : 'Responsible for creating and developing premium scripts for Roblox. Expert in performance optimization, code security, and implementation of advanced features for games.',
    },
  ]

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
          {t.team.title}
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
                    {language === 'pt' ? 'Função' : 'Role'}
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
                    {language === 'pt' ? 'Descrição' : 'Description'}
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
