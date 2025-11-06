import { createContext, useContext, ReactNode, useState } from 'react'

export type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language | ((prev: Language) => Language)) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Custom hook to use localStorage for language persistence
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  // Get initial value from localStorage or use the provided initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return initialValue
    }
    
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Update localStorage when the value changes
  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      // Compute the new value
      const valueToStore = value instanceof Function ? value(storedValue) : value
      
      // Update localStorage first
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
      
      // Then update state
      setStoredValue(valueToStore)
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useLocalStorage<Language>('app-language', 'pt')

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
