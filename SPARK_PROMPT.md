# Prompt para GitHub Spark - Kaelix Hub

## Visão Geral do Projeto

Crie um site premium de venda de scripts avançados para Roblox chamado "Kaelix Hub". O site deve transmitir exclusividade, confiança e poder computacional através de um design tecnológico moderno com estética futurística.

## Características da Experiência

1. **Futurístico** - Interface com elementos neon, gradientes escuros e animações sutis que evocam tecnologia de ponta e inovação
2. **Premium** - Design polido com efeitos de brilho, glassmorphism e transições suaves que comunicam exclusividade e valor
3. **Confiável** - Estrutura clara, informações organizadas e presença profissional que transmite segurança e estabilidade

**Nível de Complexidade**: Light Application (múltiplas features com estado básico)
- Navegação por scroll suave entre seções, header fixo com estado, animações em cards interativos e integração com Discord

## Stack Tecnológica

- **Framework**: React 19 com TypeScript
- **Build Tool**: Vite
- **Estilização**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Animações**: Framer Motion
- **Ícones**: Phosphor Icons React
- **Fontes**: 
  - Orbitron (títulos) - transmite futurismo e autoridade
  - Poppins (corpo de texto) - garante legibilidade premium

## Estrutura e Navegação

### Navegação Horizontal (Scroll Lateral)
- Layout de scroll horizontal com seções lado a lado em tela cheia
- Cada seção ocupa 100vw (largura total da viewport)
- Snap points para transições fluidas entre seções
- Links do header navegam lateralmente entre seções
- Dentro de cada seção, o usuário pode fazer scroll vertical se necessário

**Seções (na ordem horizontal)**:
1. **Hero/Início** - Introdução com logo, título impactante e CTA principal
2. **Sobre** - Informações sobre a plataforma e seus diferenciais
3. **Produtos** - Showcase de scripts disponíveis com cards interativos
4. **Equipe** - Apresentação dos fundadores com cards 3D
5. **Comunidade** - Integração com Discord e call-to-action + Footer

### Header Fixo com Estado
- Header permanece fixo no topo durante navegação
- Estado inicial: transparente
- Estado após scroll: backdrop blur + borda neon na parte inferior
- Menu hambúrguer responsivo para mobile (< 768px)
- Indicador visual da seção ativa no menu

## Design System

### Paleta de Cores (Complementary)
Roxo neon vibrante contra pretos profundos com acentos degradê para criar contraste dramático e atmosfera tech premium.

**Cores Principais**:
- **Primary (Roxo Neon)**: `oklch(0.62 0.27 295)` (#7d2cff)
  - Usado em CTAs principais, bordas brilhantes e destaques
- **Background (Preto Profundo)**: `oklch(0.08 0.01 295)` (#0a0a0f)
- **Secondary (Roxo Escuro)**: `oklch(0.15 0.08 295)` (#1a001f)
  - Para gradientes e profundidade
- **Accent (Roxo Brilhante)**: `oklch(0.75 0.30 295)` (#a855f7)
  - Para hovers intensos, pulsos e estados ativos
- **Foreground (Branco Puro)**: #ffffff
- **Muted Text (Cinza Claro)**: `oklch(0.75 0.02 295)` (#b8b8c0)

**Transparências e Efeitos**:
- Cards: `rgba(125, 44, 255, 0.1)` - roxo translúcido para glassmorphism
- Backdrop blur: `backdrop-blur-sm` ou `backdrop-blur-lg`
- Box shadows para glow effect: `0 0 20px rgba(125, 44, 255, 0.5)`

### Tipografia

**Hierarquia Tipográfica**:
- **H1 (Hero Title "Kaelix Hub")**: Orbitron Bold / 56px / tracking tight (-0.02em) / text-shadow roxo neon
- **H2 (Títulos de Seção)**: Orbitron SemiBold / 40px / tracking tight (-0.01em)
- **H3 (Títulos de Card)**: Poppins Bold / 24px / tracking normal
- **Body (Descrições)**: Poppins Regular / 16px / leading relaxed (1.6)
- **Small (Footer/Legendas)**: Poppins Medium / 14px / leading normal (1.5)
- **Buttons**: Poppins SemiBold / 16px / tracking wide (0.05em) / uppercase

**Responsividade de Fontes**:
- Reduzir ~20% em telas menores que 640px
- Hero título: 36px no mobile

### Espaçamento
- **Container padding**: `px-6 lg:px-12`
- **Section spacing**: `py-20 lg:py-32`
- **Card gaps**: `gap-6 lg:gap-8`
- **Text spacing**: `space-y-4` para parágrafos, `mb-12` para títulos de seção

## Features Essenciais

### 1. Hero Section
**Conteúdo**:
- Logo ou título "Kaelix Hub" em destaque com glow neon
- Tagline/subtítulo chamativo sobre scripts premium para Roblox
- Botão CTA principal "Entrar no Discord" com animação de pulso
- Background com partículas animadas flutuantes (canvas animation)

**Animações**:
- Fade in + slide up no carregamento
- Pulso neon contínuo no botão Discord (2s ease-in-out infinite)
- Partículas flutuantes sutis no background

### 2. About Section
**Conteúdo**:
- Título da seção
- Parágrafos explicando a plataforma
- 3-4 cards destacando diferenciais com ícones:
  - 🚀 Performance (Rocket icon)
  - 🔒 Segurança (LockKey icon)
  - 🧠 Atualizações Inteligentes (Brain icon)
  - 💬 Suporte 24/7 (ChatCircleDots icon)

**Animações**:
- Fade in + slide up quando a seção entra no viewport
- Stagger de 150ms entre elementos

### 3. Product Section
**Conteúdo**:
- Título da seção
- Grid de cards de produtos (3 colunas desktop, 2 tablet, 1 mobile)
- Cada card contém:
  - Ícone ou imagem do script
  - Nome do produto
  - Descrição breve
  - Preço ou "Premium"
  - Botão de mais informações

**Cards Interativos com Hover Effects**:
- Estado default: borda transparente
- Estado hover:
  - Borda neon roxo aparece
  - Elevação leve (transform: translateY(-8px))
  - Zoom sutil (scale: 1.02)
  - Box shadow com glow roxo
- Transição: 200-250ms ease-out
- Usar `will-change: transform` para performance

### 4. Team Section
**Conteúdo**:
- Título da seção
- Grid de cards dos fundadores (2-3 membros)
- Cada card contém:
  - Avatar/foto
  - Nome
  - Cargo/role (com ícone de coroa 👑 para fundadores)
  - Descrição breve ou quote
  - Link para Discord/social media (opcional)

**Cards com Efeito 3D**:
- Glassmorphism: `backdrop-blur-sm bg-purple-500/10`
- Estado hover:
  - Elevação com perspectiva 3D (transform-style: preserve-3d)
  - Brilho neon nas bordas
  - Rotação sutil para efeito de profundidade
- Transição: 300ms ease-out

### 5. Community Section
**Conteúdo**:
- Título chamativo sobre a comunidade Discord
- Estatísticas da comunidade (membros, ativo desde, etc.)
- Botão principal "Entrar no Discord" com pulso
- Botão secundário "Ver Produtos" (navega para seção de produtos)
- Background com gradiente roxo

**Botão Discord com Pulso**:
- Animação de pulso neon contínua
- Ícone do Discord (DiscordLogo)
- Link externo abre em nova aba: `target="_blank" rel="noopener noreferrer"`

### 6. Footer
**Conteúdo**:
- Logo ou nome "Kaelix Hub"
- Copyright com ano dinâmico
- Links para Discord e possíveis redes sociais
- Links legais (Política de Privacidade, Termos de Uso) - opcional
- Design minimalista com separador neon sutil

## Animações e Interações

### Princípios de Animação
- **Sutileza**: Animações presentes mas não distrativas
- **Performance**: Usar `transform` e `opacity` (GPU-accelerated)
- **Propósito**: Cada animação comunica estado ou guia atenção

### Timings Recomendados
- **Hover states**: 200-250ms ease-out
- **Scroll animations**: 600ms ease-out com stagger de 150ms entre elementos
- **Pulso contínuo**: 2s ease-in-out infinite
- **Page transitions**: 300ms ease-in-out

### Intersection Observer
- Usar para detectar quando seções entram no viewport
- Trigger fade in + slide up nas seções
- Animações acontecem apenas uma vez (não repetem em scroll de volta)
- Debounce para prevenir múltiplas animações simultâneas

### Estados dos Componentes

**Buttons**:
- Default: roxo sólido com glow
- Hover: brilho intenso + scale 1.05
- Active: scale 0.98
- Disabled: opacity 50%

**Cards**:
- Default: border transparente
- Hover: border neon + elevate + zoom 1.02
- Active: mantém estado hover

**Links**:
- Default: branco
- Hover: roxo neon + underline animado

**Header**:
- Top: transparente
- Scrolled: backdrop-blur-lg + border-b neon

## Responsividade Mobile

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Adaptações Mobile
- **Menu**: Transforma em hamburger com drawer lateral animado
- **Hero**: Título reduz para 36px, padding vertical diminui
- **Cards**: Grid 1 coluna no mobile, 2 no tablet, 3+ no desktop
- **Botões**: Full width no mobile quando apropriado
- **Font sizes**: Redução de ~20% em telas < 640px
- **Navigation**: Scroll horizontal ainda funciona, mas touch-friendly

### Menu Mobile (Hamburger)
- Ícone hambúrguer (List icon) no canto superior direito
- Ao clicar: drawer desliza da direita
- Menu overlay com backdrop escuro
- Links grandes e touch-friendly
- Ícone de fechar (X icon) no canto
- Animação suave com Framer Motion

## Acessibilidade

- **Contrast Ratios**: Todos os pares foreground/background atendem WCAG AA (4.5:1 mínimo)
- **Reduced Motion**: Usar `prefers-reduced-motion` para desabilitar animações complexas
- **Focus States**: Indicadores visuais claros para navegação por teclado
- **Alt Text**: Imagens e ícones com descrições apropriadas
- **Semantic HTML**: Usar tags semânticas (header, nav, main, section, footer)
- **ARIA Labels**: Para componentes interativos e decorativos

## Performance

- **Lazy Loading**: Carregar seções conforme necessário
- **Will-change**: Aplicar estrategicamente em elementos animados
- **GPU Acceleration**: Usar transform e opacity para animações
- **Debounce**: Em scroll listeners e resize handlers
- **Optimize Images**: Usar formatos modernos (WebP, AVIF)
- **Code Splitting**: Separar rotas/seções em chunks

## Ícones Necessários (Phosphor Icons)

- `Rocket` - Performance
- `LockKey` - Segurança
- `Brain` - Atualizações inteligentes
- `ChatCircleDots` - Suporte
- `DiscordLogo` - Botões da comunidade
- `Code` - Elementos decorativos
- `Gear` - Automação
- `Crown` - Fundadores
- `List` - Menu hamburger
- `X` - Fechar menu
- `CaretLeft` / `CaretRight` - Navegação (se necessário)

## Componentes shadcn/ui Necessários

- **Button** - Com variantes customizadas "neon" e "ghost-neon"
- **Card** - Base para produtos e equipe, com glassmorphism
- **Dialog** - Para menu mobile ou modals
- **Separator** - Linhas divisórias com gradiente roxo
- **Scroll Area** - Para áreas de conteúdo extenso (opcional)

## Background Interativo

### Particle Background (Canvas)
- Canvas HTML5 com partículas animadas
- Partículas pequenas flutuando lentamente
- Cor: roxo neon com opacidade baixa
- Movimento: drift sutil e randômico
- Performance: requestAnimationFrame, limite de 50-100 partículas
- Z-index baixo para ficar atrás do conteúdo

### Gradientes
- Background principal: gradiente radial de preto profundo para roxo muito escuro
- Seções: gradientes sutis para criar profundidade
- Overlay: gradientes transparentes para separar camadas

## Conteúdo Sugerido (Exemplo)

### Hero Section
- **Título**: "KAELIX HUB"
- **Subtítulo**: "Scripts Premium de Alta Performance para Roblox"
- **CTA**: "Entrar na Comunidade Discord"

### About Section
- **Título**: "Sobre a Kaelix Hub"
- **Texto**: "Somos a plataforma premium líder em scripts avançados para Roblox. Nossa missão é fornecer ferramentas poderosas, seguras e constantemente atualizadas que elevam sua experiência de jogo ao próximo nível."
- **Diferenciais**:
  - **Performance Extrema**: Scripts otimizados para máxima eficiência
  - **Segurança Total**: Proteção avançada contra detecção
  - **Atualizações Constantes**: Sempre compatível com as últimas versões
  - **Suporte 24/7**: Equipe dedicada sempre disponível

### Product Section
- **Título**: "Nossos Scripts Premium"
- **Produtos** (exemplos):
  - Script Universal
  - Auto Farm Pro
  - Combat Assistant
  - ESP Advanced
  - Speed Hack Elite
  - Teleport Manager

### Team Section
- **Título**: "Nossa Equipe"
- **Fundadores** (exemplos):
  - João - Fundador & Lead Developer
  - Pedro - Co-Fundador & Security Expert

### Community Section
- **Título**: "Junte-se à Nossa Comunidade"
- **Texto**: "Mais de X membros ativos no Discord. Suporte instantâneo, atualizações em primeira mão e uma comunidade apaixonada por Roblox."
- **CTA**: "Entrar no Discord"

### Footer
- **Texto**: "© 2024 Kaelix Hub. Todos os direitos reservados."
- **Links**: Discord, Termos, Privacidade

## Internacionalização (Opcional mas Recomendado)

Suporte para Português (BR) e Inglês:
- Context API para gerenciar idioma atual
- Toggle de idioma no header (BR 🇧🇷 / EN 🇺🇸)
- Arquivo de traduções com todos os textos
- Persistir preferência no localStorage

## Edge Cases e Tratamento de Erros

- **Scroll Rápido**: Intersection observers com debounce previnem múltiplas animações
- **Links Externos**: Botões Discord abrem em nova aba com `rel="noopener noreferrer"`
- **Performance**: Animações usam GPU, will-change aplicado estrategicamente
- **Acessibilidade**: `prefers-reduced-motion` desativa animações complexas
- **Mobile Touch**: Gestos de swipe funcionam naturalmente com scroll horizontal
- **Navegação**: Se usuário usar scroll manual, atualizar indicador de seção ativa

## Instruções de Implementação

1. **Setup Inicial**:
   - Criar projeto Vite + React + TypeScript
   - Configurar Tailwind CSS 4
   - Instalar dependências: Framer Motion, Phosphor Icons, Radix UI
   - Configurar shadcn/ui e adicionar componentes necessários

2. **Estrutura de Componentes**:
   ```
   src/
   ├── components/
   │   ├── Header.tsx
   │   ├── HeroSection.tsx
   │   ├── AboutSection.tsx
   │   ├── ProductSection.tsx
   │   ├── TeamSection.tsx
   │   ├── CommunitySection.tsx
   │   ├── Footer.tsx
   │   ├── InteractiveBackground.tsx
   │   └── ui/ (shadcn components)
   ├── contexts/
   │   └── LanguageContext.tsx (opcional)
   ├── lib/
   │   └── translations.ts (opcional)
   └── App.tsx
   ```

3. **App.tsx - Estrutura Principal**:
   - Container principal com scroll horizontal
   - Gerenciar estado da seção atual
   - Função scrollToSection para navegação
   - Cada seção em div com `flex-shrink-0 w-screen h-screen snap-start`

4. **Header**:
   - Componente fixo com z-index alto
   - Monitorar scroll para adicionar backdrop blur
   - Links navegam usando scrollToSection
   - Menu mobile com drawer animado (Framer Motion)
   - Toggle de idioma (opcional)

5. **Seções**:
   - Cada seção é full-screen (100vw x 100vh)
   - Scroll vertical interno quando necessário (overflow-y-auto)
   - Usar Intersection Observer para animar entrada
   - Aplicar stagger nas animações dos elementos filhos

6. **Interactive Background**:
   - Canvas HTML5 para partículas
   - useEffect para inicializar e animar
   - requestAnimationFrame para performance
   - Cleanup no unmount

7. **Animações com Framer Motion**:
   ```jsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6 }}
     viewport={{ once: true }}
   >
   ```

8. **Estilos Customizados**:
   - Configurar cores no tailwind.config.js
   - Adicionar classes utilitárias para glow effects
   - CSS custom para glassmorphism
   - Ocultar scrollbar: `scrollbar-hide` ou CSS custom

9. **Links Discord**:
   - URL do Discord da comunidade
   - `target="_blank" rel="noopener noreferrer"`
   - Animação de pulso com keyframes CSS ou Framer Motion

10. **Testing**:
    - Testar navegação entre seções
    - Verificar responsividade em diferentes tamanhos
    - Testar animações e performance
    - Validar acessibilidade (teclado, screen readers)

## Referências de Estilo

**Inspirações Visuais**:
- Interfaces de hacker em filmes cyberpunk (Matrix, Blade Runner)
- Design de software gaming premium (Discord Nitro, Steam)
- Dashboards tech futurísticos
- Sites de criptomoedas e blockchain (Uniswap, Metamask)

**Atmosfera Desejada**:
- Escuro mas não opressivo
- Tech mas acessível
- Premium mas não arrogante
- Poderoso mas confiável

## Checklist Final

Antes de considerar o projeto completo, verificar:

- [ ] Todas as 5 seções estão implementadas e navegáveis
- [ ] Scroll horizontal funciona suavemente com snap points
- [ ] Header muda de estado no scroll
- [ ] Animações de entrada funcionam nas seções
- [ ] Cards de produto têm hover effects (glow, elevation, zoom)
- [ ] Cards de equipe têm efeito 3D no hover
- [ ] Botões Discord têm animação de pulso
- [ ] Background com partículas está animado
- [ ] Menu mobile funciona corretamente
- [ ] Site é totalmente responsivo (mobile, tablet, desktop)
- [ ] Todos os ícones necessários estão importados e usados
- [ ] Paleta de cores está aplicada corretamente
- [ ] Tipografia segue a hierarquia especificada
- [ ] Links externos abrem em nova aba com segurança
- [ ] Acessibilidade básica implementada (contrast, focus, reduced-motion)
- [ ] Performance está otimizada (GPU acceleration, debounce)
- [ ] Conteúdo está completo e faz sentido

## Notas Adicionais

- **Prioridade em Mobile-First**: Começar design/implementação pelo mobile
- **Consistência**: Manter padrões de espaçamento e cores em todos componentes
- **Simplicidade**: Menos é mais - cada elemento deve ter propósito
- **Performance First**: Otimizar desde o início, não deixar para depois
- **Feedback Visual**: Todo elemento interativo deve responder claramente ao hover/click
- **Progressive Enhancement**: Site deve funcionar mesmo se JS não carregar

---

## Exemplo de Prompt Simplificado para Spark

Se você quiser um prompt mais direto para usar no Spark, aqui está uma versão condensada:

**"Crie um site moderno para venda de scripts premium de Roblox chamado 'Kaelix Hub'. Design futurístico com tema escuro (preto profundo #0a0a0f) e roxo neon (#7d2cff). Use scroll horizontal entre 5 seções full-screen: Hero, Sobre, Produtos, Equipe, Comunidade. Hero com título grande em fonte Orbitron, subtítulo e botão Discord com pulso neon. Cards de produtos com hover effects (glow roxo, elevação, zoom). Cards de equipe com glassmorphism e efeito 3D. Header fixo com backdrop blur ao scrollar. Background com partículas animadas. Responsivo com menu hamburger no mobile. Animações suaves com Framer Motion (fade in + slide up). Botões CTA em roxo brilhante com glow. Use React, TypeScript, Tailwind CSS, shadcn/ui e Phosphor Icons."**
