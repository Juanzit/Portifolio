# Arquitetura Oficial — Portfólio Juan Silva Garcia

## 1. Stack Tecnológica (Fase 1 Estabilizada)
- **Astro 7** (`astro@7.4.5`) com `output: 'static'` — geração 100% estática (HTML/CSS por padrão, JavaScript restrito a ilhas e controles interativos).
- **Vite 8** (`vite@8.3.5`) — bundler nativo do Astro 7 (sem pin legado de Vite 7).
- **Tailwind CSS v4** (`tailwindcss@4.3.4` + `@tailwindcss/vite@4.3.4`) — tokens declarados em `:root` e mapeados via `@theme inline` em `src/styles/global.css`.
- **TypeScript Estrito** (`typescript@5.9.3`, `astro/tsconfigs/strict`), validado via `@astrojs/check@0.9.12` (`astro check`).
- **Content Layer API + Zod 4** (`src/content.config.ts`) — coleções tipadas para `projetos` e `journal`.

## 2. Identidade Visual Oficial: Tema B — Violet Nature
O Tema A (Cobalt Technical) foi removido após consolidação do **Tema B — Violet Nature**:
- **Superfícies (Grafite Mineral Dominante)**:
  - `--bg-canvas`: `#0B0A10` (17.92:1 com `#F3F4F6` — WCAG AAA)
  - `--bg-surface`: `#14121B` (16.86:1 com `#F3F4F6` — WCAG AAA)
  - `--bg-elevated`: `#1C1925` (15.70:1 com `#F3F4F6` — WCAG AAA)
  - `--border-subtle`: `#302A3A` (divisórias estruturais de 1px)
  - `--border-control`: `#756E88` (3.84:1 sobre surface — WCAG 1.4.11 AA para inputs, selects e botões secundários)
- **Tipografia**:
  - `--text-primary`: `#F3F4F6`
  - `--text-secondary`: `#AAA3B8` (7.63:1 sobre surface — WCAG AAA)
- **Interação (Roxo de Engenharia)**:
  - `--accent-primary`: `#7C3AED` (5.70:1 com `#FFFFFF` — WCAG AA em botões primários)
  - `--accent-hover`: `#6D28D9` (7.10:1 com `#FFFFFF` — WCAG AAA no hover)
  - `--accent-active`: `#5B21B6` (8.98:1 com `#FFFFFF` — WCAG AAA no active)
  - `--accent-text`: `#A78BFA` (6.82:1 sobre surface — links, anel de foco de 2px e abas ativas)
- **Telemetria e Status (Verde-Limão Restrito)**:
  - `--metric-accent`: `#B6D63A` (11.19:1 sobre surface — WCAG AAA; uso estrito em pequenos indicadores, badges de produção e métricas)
  - `--status-warning`: `#F59E0B` (8.63:1 sobre surface — WCAG AAA)

## 3. Organização Aprovada do Projeto

```text
src/
├── assets/                       # Imagens e diagramas otimizados (fases futuras)
├── components/
│   ├── layout/                   # Header, Footer, MobileMenu (Fase 2+)
│   ├── ui/                       # Button, Badge, Tabs, ControlField, LabContainer, ThemeShowcase
│   ├── portfolio/                # ProjectCard, TechStackList, ExperienceTimeline (Fase 3+)
│   └── labs/                     # Simuladores client-side isolados por projeto (Fase 4)
├── content.config.ts             # Schemas Zod 4 + loaders glob (Content Layer API)
├── content/
│   ├── projetos/                 # Estudos de caso em Markdown/MDX (Fase 3/4)
│   └── journal/                  # Artigos técnicos do Tech Journal (Fase 5)
├── layouts/
│   ├── BaseLayout.astro          # Documento HTML5, fontes, favicon, skip-link e metadados
│   ├── ProjectLayout.astro       # Layout dedicado de estudo de caso (Fase 4)
│   └── ArticleLayout.astro       # Layout dedicado do Tech Journal (Fase 5)
├── pages/
│   ├── index.astro               # Redirecionamento temporário na Fase 1; Home na Fase 2
│   ├── design-system.astro       # Catálogo técnico e showcase validado da Fase 1
│   ├── projetos/                 # index.astro e [slug].astro (Fase 3/4)
│   ├── journal/                  # index.astro e [slug].astro (Fase 5)
│   ├── sobre.astro               # Apresentação profissional e carreira (Fase 6)
│   └── 404.astro                 # Página de erro (Fase 7)
└── styles/
    └── global.css                # Tokens oficiais Tema B, tipografia e foco visível
```

## 4. Diretrizes Arquiteturais Permanentes
- **Reuso sem Duplicação**: `ThemeShowcase.astro` e `design-system.astro` consomem diretamente `Button`, `Badge`, `Tabs`, `ControlField` e `LabContainer`, mantendo uma única implementação de abas (`[data-tabs-root]`) e controles (`[data-range-input]`).
- **Veracidade no Schema (`src/content.config.ts`)**: As coleções exigem `verificacaoStatus: 'verificado' | 'a-confirmar'` e preservam a padronização "Cenário A (Controle)" e "Cenário B (Proposto)".
