import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const products = [
  {
    title: 'AutoFarm Inteligente',
    description: 'Coleta e farma recursos automaticamente com eficiência máxima',
  },
  {
    title: 'Fishing Bot Avançado',
    description: 'Sistema de pesca otimizado com detecção automática',
  },
  {
    title: 'Merchant Tracker',
    description: 'Rastreia vendedores e automatiza compras estratégicas',
  },
  {
    title: 'Executor Integrado',
    description: 'Execução simples, rápida e protegida de scripts',
  },
]

export function ProductSection() {
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
    <section id="produto" ref={sectionRef} className="py-20 lg:py-32 px-6 lg:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Como Funciona
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Cada script da Kaelix Hub é desenvolvido com precisão e testado em múltiplos ambientes.
          Oferecemos automações seguras, leves e eficientes para elevar sua jogabilidade no Roblox a outro nível.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white font-semibold text-base px-8 py-6 neon-border"
          >
            Ver Planos e Preços
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
