import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { DiscordLogo, List, X } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'produto', label: 'Produto' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'comunidade', label: 'Comunidade' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-primary/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold tracking-tight cursor-pointer neon-glow"
              onClick={() => scrollToSection('inicio')}
            >
              Kaelix Hub
            </motion.div>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <Button
                className="bg-primary hover:bg-accent text-white font-semibold gap-2 neon-border"
                onClick={() => window.open('https://discord.gg/SEULINKAQUI', '_blank', 'noopener,noreferrer')}
              >
                <DiscordLogo weight="fill" />
                Entrar no Discord
              </Button>
            </motion.div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-20 right-0 bottom-0 w-64 bg-background/95 backdrop-blur-lg border-l border-primary/50 z-40 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-primary hover:bg-accent text-white font-semibold gap-2 mt-4 w-full"
                onClick={() => window.open('https://discord.gg/SEULINKAQUI', '_blank', 'noopener,noreferrer')}
              >
                <DiscordLogo weight="fill" />
                Discord
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
