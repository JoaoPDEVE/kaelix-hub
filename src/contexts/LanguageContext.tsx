import { createContext, useContext, ReactNode } from 'react'
import { useKV } from '@github/spark/hooks'

export type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language | ((prev: Language) => Language)) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useKV<Language>('app-language', 'pt')

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))
  }

  const value: LanguageContextType = {
    language: language || 'pt',
    setLanguage,
    toggleLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
