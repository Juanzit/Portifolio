# Changelog

## 0.7.0 — Fase 2.3: Redução da Extensão da Home, Auditoria Factual, Correção de Imagens e Inclusão do LinkedIn
- **Redução da Extensão da Home (`src/pages/index.astro`, `src/data/portfolio.ts`, `Header.astro`)**: enxugamento de `972` para `542` linhas (`-44,2%`) e redução de `-25,1%` na altura vertical desktop (`9.384 px` → `7.032 px`), preservando Hero, 4 projetos principais com composições próprias, seleção compacta de outros projetos, resumo breve da trajetória e contato.
- **Separação Arquitetural de Dados (`src/data/portfolio.ts`)**: criação de módulo tipado centralizando os registros completos para uso futuro nas páginas internas sem sobrecarregar a Home.
- **Correção e Ampliação das Imagens do `Blade of Albaia`**: identificação e recodificação de `albaiaquestmenu.png` (que possuía assinatura binária JPEG `FF D8 FF E0` com extensão `.png`) para PNG legítimo (`89 50 4E 47`), além da inclusão da captura oficial de gameplay `images/screenshot.png` (`799×578`).
- **Linha de Tecnologias no Hero e Inclusão do LinkedIn**: adição da linha discreta `React Native · Python / Machine Learning · Java · JavaScript` no Hero e inclusão de `https://www.linkedin.com/in/juan-garcia--/` na seção de contato.
- **Auditoria Estrita de Conteúdo**:
  - **ArchFlow**: remoção de menção a `DAO` nas contribuições de Juan e distinção explícita entre o que foi desenvolvido por Victor Emanuel (`Victorlolmi`) e as 5 frentes implementadas por Juan Silva Garcia.
  - **Produção Científica**: distinção explícita entre **Artigo Completo Publicado em Anais** (*VII CoBICET 2026*, `ISSN 2764-0582`) e **Apresentação de Trabalho em Evento/Simpósio** (*XVIII EAMC 2026* e *VII SIMEPE 2025*).
  - **Kodland**: remoção do qualificativo "atuação/EdTech internacional", mantendo descrição objetiva e comprovada.
- **Assinatura Visual Oficializada**: aprovação definitiva da **Opção 1 — Monograma Editorial `JG.`** com ponto terracota.

## 0.6.0 — Fase 2.2: Direção 1 (Caderno de Campo & Oficina Editorial), Imagens Reais Autorizadas e Composições Visuais Distintas
- Aplicação da **Direção 1 — Caderno de Campo & Oficina Editorial** com fundo em papel mineral quente (`#F5F2EB` / `#ECE7DC`), tinta carvão (`#161514`), terracota (`#B93815`) e verde-mata (`#1F5137`), combinando `Newsreader`, `Plus Jakarta Sans` e `IBM Plex Mono`.

## 0.5.0 — Fase 2.1: Revisão Editorial Anti-AI Slop, Curadoria do GitHub, ArchFlow e Separação de Credenciais
- Redesign editorial da Home e curadoria inicial dos repositórios do GitHub.

## 0.4.0 — Fase 2: Protótipo Visual da Home, Layout Compartilhado e Dados Comprovados
- Implementação inicial da Home e componentes globais `Header.astro`, `MobileMenu.astro` e `Footer.astro`.

## 0.3.0 — Fase 1 Estabilizada: Astro 7, Vite 8 e Oficialização do Tema B (Violet Nature)
- Consolidação inicial do Design System e migração para Astro 7 + Vite 8.
