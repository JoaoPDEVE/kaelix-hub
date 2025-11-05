import { DiscordLogo, GithubLogo, XLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-primary/30" style={{
      background: 'linear-gradient(180deg, #0a0a0f 0%, #1a001f 100%)',
    }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://discord.gg/SEULINKAQUI"
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
              © 2025 Kaelix Hub — Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com <span className="text-primary">💜</span> por Pedro e João.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
