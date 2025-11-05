import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Circle } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

const scripts = [
  {
    name: 'GPO',
    statusKey: 'development' as const,
    color: 'text-destructive',
  },
]

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
          <h3 className="text-3xl font-bold text-center mb-8">{t.product.scriptsTitle}</h3>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {scripts.map((script, index) => (
              <motion.div
                key={script.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between bg-card/30 border border-border rounded-lg px-6 py-4 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl font-semibold">{script.name}</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-lg">{t.product.scriptStatus[script.statusKey]}</span>
                </div>
                <Circle weight="fill" className={`${script.color} text-2xl`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
