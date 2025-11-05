import { useKV } from '@github/spark/hooks'

export type Language = 'pt' | 'en'

export function useLanguage() {
  const [language, setLanguage] = useKV<Language>('app-language', 'pt')

  const toggleLanguage = () => {
    setLanguage((current) => {
      const newLang = current === 'pt' ? 'en' : 'pt'
      console.log('Changing language from', current, 'to', newLang)
      return newLang
    })
  }

  return { language: language || 'pt', setLanguage, toggleLanguage }
}
