import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, LockKey, Brain, ChatCircleDots } from '@phosphor-icons/react'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      icon: Rocket,
      title: t.about.features.performance.title,
      description: t.about.features.performance.description,
    },
    {
      icon: LockKey,
      title: t.about.features.security.title,
      description: t.about.features.security.description,
    },
    {
      icon: Brain,
      title: t.about.features.updates.title,
      description: t.about.features.updates.description,
    },
    {
      icon: ChatCircleDots,
      title: t.about.features.support.title,
      description: t.about.features.support.description,
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
    <section ref={sectionRef} className="w-full h-full flex items-center justify-center px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {t.about.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto space-y-6 mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.paragraph1}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.paragraph2}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.paragraph3}
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
