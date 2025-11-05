import { useKV } from '@github/spark/hooks'

export type Language = 'pt' | 'en'

export function useLanguage() {
  const [language, setLanguage] = useKV<Language>('app-language', 'pt')

  const currentLanguage: Language = language || 'pt'

  return { 
    language: currentLanguage, 
    setLanguage 
  }
}
