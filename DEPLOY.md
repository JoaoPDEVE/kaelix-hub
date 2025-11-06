# 🚀 Guia de Deploy / Deployment Guide

Este documento explica como fazer o deploy do Kaelix Hub em diferentes plataformas.
This document explains how to deploy Kaelix Hub on different platforms.

---

## 🌐 Vercel (Recomendado / Recommended)

### Passo a passo:
1. Crie uma conta em [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe seu repositório GitHub
4. Vercel detectará automaticamente as configurações
5. Clique em "Deploy"

### Via CLI:
```bash
npm install -g vercel
vercel
```

---

## 🌐 Netlify

### Passo a passo:
1. Crie uma conta em [netlify.com](https://netlify.com)
2. Clique em "Add new site" → "Import an existing project"
3. Conecte seu repositório GitHub
4. Configurações serão detectadas automaticamente do `netlify.toml`
5. Clique em "Deploy site"

### Via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🌐 GitHub Pages

### Passo a passo:
1. No seu repositório, vá em Settings → Pages
2. Em "Source", selecione "GitHub Actions"
3. O workflow já está configurado (verifique `.github/workflows/deploy.yml`)
4. Faça push para a branch `main` e o deploy acontecerá automaticamente

---

## 🌐 Render

### Passo a passo:
1. Crie uma conta em [render.com](https://render.com)
2. Clique em "New Static Site"
3. Conecte seu repositório GitHub
4. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Clique em "Create Static Site"

---

## 📦 Build Local

Para testar o build localmente:

```bash
# Instalar dependências
npm install

# Build de produção
npm run build

# Preview do build
npm run preview
```

O site estará disponível em `http://localhost:4173`

---

## 🔧 Variáveis de Ambiente

Este projeto não requer variáveis de ambiente para funcionar.
This project does not require environment variables to work.

---

## ⚙️ Requisitos

- Node.js 20 ou superior
- npm ou yarn

---

## 📝 Notas Importantes / Important Notes

- O projeto usa Vite como bundler
- Todas as dependências necessárias estão no `package.json`
- O build gera arquivos estáticos na pasta `dist`
- A aplicação é uma SPA (Single Page Application)
- Suporta navegação horizontal entre seções

---

## 🐛 Problemas Comuns / Common Issues

### Erro 404 nas rotas
Se você encontrar erro 404 ao navegar, certifique-se de que o servidor está configurado para redirecionar todas as requisições para `index.html` (SPA fallback).

### Fontes não carregam
As fontes Google Fonts são carregadas via CDN. Certifique-se de que sua rede permite acesso a `fonts.googleapis.com`.

### Build falha
Verifique se você está usando Node.js 20 ou superior:
```bash
node --version
```

---

## 💡 Suporte

Para mais ajuda, entre em contato através do Discord: https://discord.gg/emVDERuSwf

---

Desenvolvido com 💜 por Pedro e João.
