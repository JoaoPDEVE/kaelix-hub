import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
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
      ref={sectionRef} 
      className="w-full py-32 px-6 lg:px-12 bg-secondary/30"
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
          <a
            href="https://discord.gg/emVDERuSwf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition font-semibold text-white"
          >
            <DiscordLogo weight="fill" size={28} />
            Entrar no Discord
          </a>
        </motion.div>
      </div>
    </section>
  )
}
