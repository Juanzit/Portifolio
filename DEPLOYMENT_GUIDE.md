# Guia de Deploy

Saída estática gerada em `dist/` por `npm run build`.

## Cloudflare Pages (plano gratuito)
- Build command: `npm run build`
- Build output directory: `dist`
- Node: 20 ou superior

## GitHub Pages
Publicar o conteúdo de `dist/` via GitHub Actions. Se o site ficar em subcaminho, definir `site` e `base` em `astro.config.mjs`.

> Nenhum deploy foi configurado ou executado na Fase 1.
