import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { DiscordLogo, List, X, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'inicio', label: 'Início', index: 0 },
  { id: 'sobre', label: 'Sobre', index: 1 },
  { id: 'produto', label: 'Produto', index: 2 },
  { id: 'equipe', label: 'Equipe', index: 3 },
  { id: 'comunidade', label: 'Comunidade', index: 4 },
]

interface HeaderProps {
  onNavigate: (index: number) => void
}

export function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    checkScrollButtons()
  }, [])

  const checkScrollButtons = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollNav = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = 200
      const newScrollLeft = direction === 'left' 
        ? navRef.current.scrollLeft - scrollAmount 
        : navRef.current.scrollLeft + scrollAmount
      
      navRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
      
      setTimeout(checkScrollButtons, 300)
    }
  }

  const navigateToSection = (index: number) => {
    onNavigate(index)
    setMobileMenuOpen(false)
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
          <div className="flex items-center justify-between h-20 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold tracking-tight cursor-pointer neon-glow flex-shrink-0"
              onClick={() => navigateToSection(0)}
            >
              Kaelix Hub
            </motion.div>

            <div className="hidden md:flex items-center gap-2 flex-1 max-w-2xl">
              {canScrollLeft && (
                <button
                  onClick={() => scrollNav('left')}
                  className="text-primary hover:text-accent transition-colors flex-shrink-0"
                  aria-label="Scroll left"
                >
                  <CaretLeft size={24} weight="bold" />
                </button>
              )}
              
              <nav 
                ref={navRef}
                onScroll={checkScrollButtons}
                className="flex items-center gap-8 overflow-x-auto scrollbar-hide flex-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => navigateToSection(item.index)}
                    className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {canScrollRight && (
                <button
                  onClick={() => scrollNav('right')}
                  className="text-primary hover:text-accent transition-colors flex-shrink-0"
                  aria-label="Scroll right"
                >
                  <CaretRight size={24} weight="bold" />
                </button>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block flex-shrink-0"
            >
              <Button
                className="bg-primary hover:bg-accent text-white font-semibold gap-2 neon-border"
                onClick={() => window.open('https://discord.gg/emVDERuSwf', '_blank', 'noopener,noreferrer')}
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
                  onClick={() => navigateToSection(item.index)}
                  className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-primary hover:bg-accent text-white font-semibold gap-2 mt-4 w-full"
                onClick={() => window.open('https://discord.gg/emVDERuSwf', '_blank', 'noopener,noreferrer')}
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
