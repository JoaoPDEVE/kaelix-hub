# Planning Guide

Kaelix Hub é uma plataforma premium de venda de scripts avançados para Roblox, apresentando produtos de alta performance com um design tecnológico moderno que transmite exclusividade, confiança e poder computacional.

**Experience Qualities**: 
1. **Futurístico** - Interface com elementos neon, gradientes escuros e animações sutis que evocam tecnologia de ponta e inovação
2. **Premium** - Design polido com efeitos de brilho, glassmorphism e transições suaves que comunicam exclusividade e valor
3. **Confiável** - Estrutura clara, informações organizadas e presença profissional que transmite segurança e estabilidade

**Complexity Level**: Light Application (múltiplas features com estado básico)
  - Navegação por scroll suave entre seções, header fixo com estado, animações em cards interativos e integração com Discord

## Essential Features

### Navegação Horizontal (Scroll Lateral)
- **Functionality**: Links do menu navegam lateralmente entre seções que ficam lado a lado em tela cheia
- **Purpose**: Criar experiência única e moderna, diferenciando-se de sites tradicionais com scroll vertical
- **Trigger**: Clique em item do menu ou botão CTA
- **Progression**: Usuário clica no link → página desliza horizontalmente até a seção → seção fica visível em tela cheia → usuário pode scrollar verticalmente dentro da seção se necessário
- **Success criteria**: Scroll lateral acontece de forma fluida com snap points, cada seção ocupa 100vw, transições suaves entre seções

### Header Fixo com Estado
- **Functionality**: Header permanece visível durante scroll com efeito de backdrop blur e borda neon
- **Purpose**: Manter navegação sempre acessível e adicionar profundidade visual
- **Trigger**: Usuário faz scroll na página
- **Progression**: Página carrega com header transparente → usuário scrolla → header ganha fundo translúcido e borda brilhante
- **Success criteria**: Header permanece fixo, transição de opacidade é suave, não obstrui conteúdo

### Cards de Produto Interativos
- **Functionality**: Cards com hover effects (brilho neon, zoom, elevação)
- **Purpose**: Destacar produtos e criar engajamento visual
- **Trigger**: Mouse hover sobre card
- **Progression**: Mouse entra no card → borda neon aparece → card eleva levemente → zoom sutil → mouse sai → volta ao estado original
- **Success criteria**: Animações são suaves (200-300ms), não causam layout shift, efeito neon é visível

### Cards da Equipe com Efeito 3D
- **Functionality**: Cards dos fundadores com glassmorphism e efeito de elevação 3D no hover
- **Purpose**: Humanizar a marca e apresentar credenciais da equipe
- **Trigger**: Mouse hover sobre card do membro
- **Progression**: Estado inicial com blur glass → hover → card eleva com perspectiva 3D → brilho neon nas bordas → retorna suavemente
- **Success criteria**: Efeito 3D é perceptível, transição é fluida, informações permanecem legíveis

### Botão Discord com Pulso
- **Functionality**: Botão CTA principal com animação de pulso neon contínua
- **Purpose**: Chamar atenção para ação principal (entrar na comunidade) e criar senso de urgência
- **Trigger**: Elemento visível na viewport
- **Progression**: Botão carrega → pulso neon inicia automaticamente → loop infinito → hover intensifica efeito → click redireciona
- **Success criteria**: Pulso é sutil mas visível, não distrai, link funciona corretamente

### Animações de Entrada
- **Functionality**: Elementos aparecem com fade + slide up conforme entram na viewport
- **Purpose**: Criar experiência dinâmica e guiar atenção do usuário
- **Trigger**: Seção entra na área visível do viewport
- **Progression**: Usuário scrolla → seção entra em viewport → elementos fazem fade in + slide up em cascata → ficam estáticos
- **Success criteria**: Animações ocorrem apenas uma vez, timing é escalonado (100-200ms entre elementos), não impactam performance

## Edge Case Handling

- **Mobile Navigation** - Menu hamburger com drawer animado para telas menores que 768px
- **Scroll Rápido** - Intersection observers com debounce previnem múltiplas animações simultâneas
- **Links Externos** - Botões Discord abrem em nova aba com rel="noopener noreferrer"
- **Performance** - Animações usam transform e opacity para aproveitar GPU, will-change aplicado estrategicamente
- **Acessibilidade** - prefers-reduced-motion desativa animações complexas, contrast ratio WCAG AA em todos os textos

## Design Direction

O design deve evocar uma sensação de tecnologia futurística premium - como uma interface de hacker em filme cyberpunk, mas refinada e acessível; o ambiente deve ser predominantemente escuro com destaques neon roxos que guiam o olhar, criando profundidade através de gradientes sutis, glassmorphism e sombras coloridas; interface minimalista onde cada elemento tem propósito claro, sem poluição visual, permitindo que o conteúdo e os efeitos neon sejam os protagonistas.

## Color Selection

Paleta Complementary (roxo neon vibrante contra pretos profundos) com acentos degradê para criar contraste dramático e atmosfera tech premium, evocando exclusividade, poder e inovação.

- **Primary Color**: Roxo Neon `oklch(0.62 0.27 295)` (#7d2cff) - cor de marca que transmite tecnologia avançada, criatividade e exclusividade; usado em CTAs principais, bordas brilhantes e destaques
- **Secondary Colors**: Preto Profundo `oklch(0.08 0.01 295)` (#0a0a0f) como base, Roxo Escuro `oklch(0.15 0.08 295)` (#1a001f) para gradientes e profundidade
- **Accent Color**: Roxo Brilhante `oklch(0.75 0.30 295)` (#a855f7) para hovers intensos, pulsos e estados ativos

**Foreground/Background Pairings**:
- Background (Preto Profundo #0a0a0f): Branco Puro (#ffffff) - Ratio 18.5:1 ✓
- Card/Muted (Roxo Translúcido rgba(125, 44, 255, 0.1)): Branco Puro (#ffffff) - Ratio 17.2:1 ✓
- Primary (Roxo Neon #7d2cff): Branco Puro (#ffffff) - Ratio 7.8:1 ✓
- Accent (Roxo Brilhante #a855f7): Preto Profundo (#0a0a0f) - Ratio 8.2:1 ✓
- Muted Text: Cinza Claro `oklch(0.75 0.02 295)` (#b8b8c0) sobre preto - Ratio 9.1:1 ✓

## Font Selection

Tipografia deve comunicar modernidade tecnológica e precisão, com Orbitron para títulos (transmitindo futurismo e autoridade) e Poppins para corpo de texto (garantindo legibilidade premium com toque contemporâneo).

**Typographic Hierarchy**:
- H1 (Hero Title "Kaelix Hub"): Orbitron Bold/56px/tight tracking (-0.02em) com text-shadow roxo neon
- H2 (Section Titles): Orbitron SemiBold/40px/tight tracking (-0.01em)
- H3 (Card Titles): Poppins Bold/24px/normal tracking
- Body (Descriptions): Poppins Regular/16px/relaxed leading (1.6) 
- Small (Footer/Captions): Poppins Medium/14px/normal leading (1.5)
- Buttons: Poppins SemiBold/16px/wide tracking (0.05em) uppercase

## Animations

Animações devem ser sutis mas presentes - cada movimento reforça a sensação de interface tech responsiva; o objetivo é criar micro-momentos de deleite sem comprometer performance ou distrair do conteúdo principal.

**Purposeful Meaning**: 
- Pulso neon nos botões Discord comunica "ativo/online" e urgência
- Elevação 3D em cards transmite interatividade e "clicabilidade"
- Fade + slide up cria sensação de construção progressiva e revela dramático
- Partículas flutuantes no hero evocam dados/código em movimento

**Hierarchy of Movement**:
1. CTAs principais (botões Discord) - pulso contínuo mas discreto
2. Cards interativos - resposta imediata ao hover com zoom e brilho
3. Seções entrando - fade in escalonado para guiar leitura
4. Background effects - movimento muito sutil e constante

Timings: 
- Hover states: 200-250ms ease-out
- Scroll animations: 600ms ease-out com stagger de 150ms
- Pulso: 2s ease-in-out infinite
- Page transitions: 300ms ease-in-out

## Component Selection

**Components**: 
- **Button** (shadcn) - customizado com variantes "neon" (roxo com glow) e "ghost-neon" (outline com hover fill), usando box-shadow para efeito de brilho
- **Card** (shadcn) - base para produtos e equipe, com className adicional para glassmorphism (backdrop-blur-sm bg-purple-500/10)
- **Scroll Area** (shadcn) - para áreas de conteúdo extenso se necessário
- **Separator** (shadcn) - linhas divisórias sutis com gradiente roxo

**Customizations**: 
- **NavMenu** - custom component com scroll spy para highlight da seção ativa
- **ParticleBackground** - canvas com partículas animadas usando requestAnimationFrame
- **TeamCard** - custom component com transform-style: preserve-3d para efeito 3D
- **GlowingBorder** - utility component que aplica box-shadow animado

**States**:
- Buttons: default (roxo sólido) → hover (brilho intenso + scale 1.05) → active (scale 0.98) → disabled (opacity 50%)
- Cards: default (border transparente) → hover (border neon + elevate + zoom 1.02) → active mantém hover
- Links: default (branco) → hover (roxo neon + underline animado)
- Header: top (transparente) → scrolled (backdrop-blur-lg + border-b neon)

**Icon Selection**:
- Rocket (🚀) - @phosphor-icons/react `Rocket` para performance
- Lock (🔒) - `LockKey` para segurança  
- Brain (🧠) - `Brain` para atualizações inteligentes
- Chat (💬) - `ChatCircleDots` para suporte
- Discord - `DiscordLogo` para botões da comunidade
- Code - `Code` para elementos decorativos
- Gear - `Gear` para automação
- Crown (👑) - `Crown` para fundadores

**Spacing**: 
- Container padding: px-6 lg:px-12
- Section spacing: py-20 lg:py-32
- Card gaps: gap-6 lg:gap-8
- Text spacing: space-y-4 para parágrafos, mb-12 para títulos de seção

**Mobile**:
- Hero: título reduz para 36px, padding vertical diminui
- Menu: transforma em hamburger com drawer lateral animado
- Cards: grid 1 coluna no mobile, 2 no tablet, 3+ no desktop
- Botões: full width no mobile quando apropriado
- Font sizes: reduzem ~20% em telas < 640px
