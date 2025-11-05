import { DiscordLogo, GithubLogo, XLogo } from '@phosphor-icons/react'
import { useLanguage } from '@/hooks/use-language'
import { translations } from '@/lib/translations'

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language || 'pt']
  
  return (
    <footer className="w-full py-12 px-6 lg:px-12 border-t border-primary/30 mt-auto" style={{
      background: 'linear-gradient(180deg, rgba(10, 10, 15, 0.8) 0%, #1a001f 100%)',
    }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://discord.gg/emVDERuSwf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <DiscordLogo size={28} weight="fill" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <GithubLogo size={28} weight="fill" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <XLogo size={28} weight="fill" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.footer.madeWith} <span className="text-primary">💜</span> {t.footer.madeBy}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
