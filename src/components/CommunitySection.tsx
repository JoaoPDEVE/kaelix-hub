import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DiscordLogo } from '@phosphor-icons/react'

export function CommunitySection() {
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
    <section 
      id="comunidade" 
      ref={sectionRef} 
      className="py-20 lg:py-32 px-6 lg:px-12 bg-secondary/30"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Entre para Nossa Comunidade
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          Faça parte do nosso Discord e tenha acesso a atualizações, suporte e vantagens exclusivas para membros Kaelix Hub.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white font-semibold text-lg px-12 py-8 gap-3 pulse-neon text-base"
            onClick={() => window.open('https://discord.gg/SEULINKAQUI', '_blank', 'noopener,noreferrer')}
          >
            <DiscordLogo weight="fill" size={28} />
            Entrar no Discord
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
