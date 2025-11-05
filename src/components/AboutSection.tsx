import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, LockKey, Brain, ChatCircleDots } from '@phosphor-icons/react'

const features = [
  {
    icon: Rocket,
    title: 'Performance Otimizada',
    description: 'Scripts leves e eficientes que não comprometem seu desempenho',
  },
  {
    icon: LockKey,
    title: 'Segurança e Estabilidade',
    description: 'Proteção avançada e execução confiável em todos os ambientes',
  },
  {
    icon: Brain,
    title: 'Atualizações Inteligentes',
    description: 'Melhorias constantes baseadas em feedback e novas tecnologias',
  },
  {
    icon: ChatCircleDots,
    title: 'Suporte 24/7 via Discord',
    description: 'Equipe sempre disponível para ajudar com qualquer dúvida',
  },
]

export function AboutSection() {
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
    <section ref={sectionRef} className="w-full h-full flex items-center justify-center px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Quem Somos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto space-y-6 mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Kaelix Hub nasceu da paixão por tecnologia e automação dentro do Roblox.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nosso objetivo é oferecer ferramentas seguras, rápidas e intuitivas, criadas por desenvolvedores experientes e apaixonados pelo que fazem.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com atualizações constantes, otimização de desempenho e uma comunidade ativa no Discord, garantimos a melhor experiência para nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <Icon size={40} weight="duotone" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
