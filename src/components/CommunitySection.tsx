import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { DiscordLogo, Users, ChatCircle, TrendUp, Shield } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'

export function CommunitySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language || 'pt']

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

  const benefits = [
    {
      icon: <Users size={32} weight="duotone" />,
      title: t.community.benefits.activeCommunity.title,
      description: t.community.benefits.activeCommunity.description
    },
    {
      icon: <ChatCircle size={32} weight="duotone" />,
      title: t.community.benefits.support.title,
      description: t.community.benefits.support.description
    },
    {
      icon: <TrendUp size={32} weight="duotone" />,
      title: t.community.benefits.updates.title,
      description: t.community.benefits.updates.description
    },
    {
      icon: <Shield size={32} weight="duotone" />,
      title: t.community.benefits.safety.title,
      description: t.community.benefits.safety.description
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-screen flex flex-col"
    >
      <div className="flex-1 py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 rounded-full glass-card"
            >
              <span className="text-primary font-semibold">🚀 {t.community.joinUs}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 neon-glow"
            >
              {t.community.joinCTA}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto"
            >
              {t.community.subtitle1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto"
            >
              {t.community.subtitle2}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all hover:scale-105 h-full">
                  <div className="text-primary mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <a
              href="https://discord.gg/emVDERuSwf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all font-semibold text-white text-lg pulse-neon hover:scale-105 transform"
            >
              <DiscordLogo weight="fill" size={32} />
              {t.community.joinButton}
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              {t.community.freeForever}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
