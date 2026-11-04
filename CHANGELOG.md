# Changelog

## 0.9.0 — Fase 2.5: Classificação de Projeto de Extensão no ShapeMeApp, Redução de CLS (-84,9%), Auditoria Mobile Completa e Prévia Violet Nature
- **Conferência de Vínculos na Trajetória (`src/data/portfolio.ts`)**: ajuste de `"Desenvolvedor Mobile Júnior — ShapeMeApp"` para **`"Desenvolvimento Mobile — ShapeMeApp"`** (`Projeto de Extensão · IF Sudeste MG · 08/2024 — 01/2026`), evitando caracterizar projeto de extensão universitária como cargo corporativo sem confirmação explícita.
- **Redução do CLS no Carregamento Frio (`src/styles/global.css`, `src/pages/index.astro`)**: diagnóstico de `LayoutShiftAttribution` (`entry.sources`) e aplicação de `@font-face` de fallback calibrados (`Newsreader Fallback` e `Plus Jakarta Sans Fallback` com `size-adjust`, `ascent-override`, `descent-override` e `line-gap-override`) somados à troca de `max-w-[...ch]` por `rem`, reduzindo o CLS frio de `0,1095` para **`0,0165`** no Desktop (`-84,9%`) e **`0,0225`** no Mobile, e **`0,0000`** no carregamento aquecido.
- **Auditoria Mobile (`390×844`) e Prévia Comparativa `Violet Nature`**: correção de quebra de linha (`shrink-0`) na listagem de trajetória mobile (`docWidth = 390 px`, `horizontalOverflow = false`), verificação automatizada do menu mobile e geração de prévias comparativas em memória para decisão sobre a paleta *Violet Nature* sem alterar os tokens de cor aprovados em `global.css`.

## 0.8.0 — Fase 2.4: Síntese Efetiva da Trajetória, Atualização do LinkedIn Verificado e Auditoria de Desempenho (Medido vs. Estimado)
- **Redução da Seção de Trajetória (`src/pages/index.astro`, `src/data/portfolio.ts`)**: transformação de `#trajetoria` em um resumo breve com **formação em 2 linhas**, **destaque único para a publicação principal** (*Anais do VII CoBICET 2026*, `ISSN 2764-0582`, com nota de apresentação no *XVIII EAMC / LNCC 2026*) e **seleção de 4 experiências relevantes** (`featuredExperiences`), reservando o histórico completo (`experiences`, `scientificOutputs`, `certificationsAndExtension`) em `src/data/portfolio.ts` para as futuras páginas internas.
- **Correção da URL do LinkedIn (`https://br.linkedin.com/in/juan-silva-garcia`)**: atualização de todos os links de LinkedIn na Home para o perfil público verificado de Juan Silva Garcia (associado ao CNA+ e ao IF Sudeste MG).
- **Auditoria Final de Altura e Desempenho**: altura final medida em Desktop (`1440×900`) de `5.465 px` (`6,1 telas`, `#trajetoria` com `576 px`) e em Mobile (`390×844`) de `10.325 px` (`12,2 telas`, `#trajetoria` reduzida para `1.176 px`), com diferenciação explícita entre métricas medidas no navegador real e estimativas dependentes de ambiente de produção.

## 0.7.0 — Fase 2.3: Redução da Extensão da Home, Auditoria Factual, Correção de Imagens e Inclusão do LinkedIn
- **Redução da Extensão da Home (`src/pages/index.astro`, `src/data/portfolio.ts`, `Header.astro`)**: enxugamento de `972` para `511` linhas (`-47,4%`) e redução de `-38,7%` na altura vertical desktop (`9.384 px` → `5.752 px`), preservando Hero, 4 projetos principais com composições próprias, seleção compacta de outros projetos (`ArchFlow` e `Blade of Albaia` lado a lado + grade `2×2`), resumo breve da trajetória e contato.
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
