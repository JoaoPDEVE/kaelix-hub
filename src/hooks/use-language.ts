import { useKV } from '@github/spark/hooks'

export type Language = 'pt' | 'en'

export function useLanguage() {
  const [language, setLanguage] = useKV<Language>('app-language', 'pt')

  const toggleLanguage = () => {
    setLanguage((current) => current === 'pt' ? 'en' : 'pt')
  }

  return { language, setLanguage, toggleLanguage }
}
