import { useKV } from '@github/spark/hooks'

export type Language = 'pt' | 'en'

export function useLanguage() {
  const [language, setLanguage] = useKV<Language>('app-language', 'pt')

  return { 
    language: language || 'pt', 
    setLanguage 
  }
}
