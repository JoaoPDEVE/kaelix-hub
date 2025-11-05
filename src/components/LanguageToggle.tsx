import { Globe } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'pt' as const, label: 'PT-BR', flag: '🇧🇷' },
    { code: 'en' as const, label: 'EN', flag: '🇺🇸' },
  ]

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (code: 'pt' | 'en') => {
    setLanguage(() => code)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleDropdown}
        className="border-2 border-primary/50 bg-background/50 hover:bg-primary/20 text-white font-semibold gap-2 px-3 py-2"
      >
        <Globe size={20} weight="bold" />
        <span className="hidden sm:inline">{currentLanguage.flag} {currentLanguage.label}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 z-50 min-w-[140px] glass-card rounded-lg border border-primary/30 overflow-hidden shadow-lg"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                    language === lang.code
                      ? 'bg-primary/20 text-primary font-semibold'
                      : 'hover:bg-primary/10 text-foreground'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.label}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
