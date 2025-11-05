import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Circle } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export function ProductSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const products = [
    {
      title: t.product.products.autoFarm.title,
      description: t.product.products.autoFarm.description,
    },
    {
      title: t.product.products.fishing.title,
      description: t.product.products.fishing.description,
    },
    {
      title: t.product.products.merchant.title,
      description: t.product.products.merchant.description,
    },
    {
      title: t.product.products.executor.title,
      description: t.product.products.executor.description,
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
    <section ref={sectionRef} className="w-full h-full flex items-center justify-center px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          {t.product.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          {t.product.description}
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex-1"
            >
              <Card className="bg-card/50 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(125,44,255,0.3)] h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-3xl font-bold text-center">{t.product.scriptsTitle}</h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-destructive/20 border border-destructive/50 neon-border"
            >
              <Circle weight="fill" className="text-destructive text-lg animate-pulse" />
              <span className="text-base font-bold text-destructive">
                GPO: {t.product.scriptStatus.development}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
