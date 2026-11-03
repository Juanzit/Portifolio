# Status do Projeto — Portfólio Juan Silva Garcia

## Fase Atual: Fase 2 Concluída — Protótipo Visual da Home (aguardando autorização para Fase 3)

### 1. Implementado e Consolidado na Fase 2
- **Rota Inicial Definitiva (`/`, `src/pages/index.astro`)**:
  - Substituição do redirecionamento temporário da Fase 1 pela Home completa em 8 seções editoriais sob o **Tema B — Violet Nature**:
    1. **Hero Section**: posicionamento principal, badges de status, CTAs primário/secundário (`>= 44×44px`), link direto para o Currículo Lattes (`http://lattes.cnpq.br/9434044887106048`) e painel de credenciais verificadas.
    2. **00. Perfil Técnico & Abordagem de Engenharia (`#apresentacao`)**: síntese acadêmica e formação comprovada no IF Sudeste MG (Bacharelado em Ciência da Computação 2022–2026 e Técnico em Agroecologia 2019–2021).
    3. **01. Projetos Selecionados & Pesquisa Aplicada (`#projetos`)**: vitrine com os 4 pilares reais (`Lundgren Atelier`, `Detecção Acústica de Aves Ameaçadas com Machine Learning` comparando **Cenário A (Controle)** e **Cenário B (Proposto)** com CNN F1-weighted de `0,82` / ISSN `2764-0582`, `ShapeMeApp` e `Núcleo Selvagem`).
    4. **02. Game Development Lab (`#game-lab`)**: seção dedicada à arquitetura modular Client/Server em Luau/Roblox Studio (`SYS-01`, `SYS-02`, `SYS-03`) e conexão com a docência na Kodland.
    5. **03. Experiência Profissional, Pesquisa & Ensino (`#experiencia`)**: linha do tempo verificada (CNA Idiomas Digital, Kodland, Iniciação Científica em Bioacústica/IA, ShapeMeApp, Instrutor de POO em Java e Diretor de Marketing/Dev Front-End na EmComp).
    6. **04. Tech Journal — Cadernos de Engenharia & Pesquisa (`#journal`)**: prévia estruturada de 3 cadernos técnicos (`CADERNO-01`, `CADERNO-02`, `CADERNO-03`) previstos para leitura completa na Fase 5.
    7. **05. Competências Técnicas & Ferramentas (`#competencias`)**: stack organizada em 4 domínios (`GRP-01` a `GRP-04`).
    8. **06. Canais Diretos de Contato (`#contato`)**: links diretos auditados para e-mail institucional (`juangarcia@ifsudestemg.edu.br`), GitHub (`Juan-Garcia01`), LinkedIn (`juan-silva-garcia`) e Currículo Lattes (`CNPq`).
- **Componentes Globais de Layout (`src/components/layout/`)**:
  - `Header.astro`: cabeçalho sticky com identidade tipográfica e navegação de âncoras numeradas (`01.` a `06.`).
  - `MobileMenu.astro`: menu mobile acessível com `aria-expanded`, `aria-controls`, fechamento via tecla `Escape` (com restauração de foco ao botão `#mobile-menu-trigger`), fechamento ao clicar em links e auto-fechamento ao redimensionar para desktop.
  - `Footer.astro`: rodapé semântico com identificação institucional e link de auditoria para `/design-system/`.
- **Acessibilidade e Movimento Reduzido (`src/styles/global.css`)**:
  - Suporte completo a `@media (prefers-reduced-motion: reduce)` desativando animações, transições e rolagem suave para usuários com sensibilidade vestibular.
  - Atualização de `src/components/ui/ThemeShowcase.astro` com os dados confirmados da publicação nos Anais do VII CoBICET (`ISSN 2764-0582`, `F1-Weighted: 0,82`).

### 2. Verificações Executadas de Fato na Fase 2 (2026-11-03)
- `npm run build` (`astro check && astro build`):
  - `astro check` (15 arquivos): **0 errors, 0 warnings, 0 hints**.
  - `astro build`: **2 páginas estáticas geradas** (`/index.html` e `/design-system/index.html`).
- **Testes em Navegador Real (Chrome Headless via `puppeteer-core`)**:
  - Resoluções testadas em `/` e `/design-system/`: **1440 × 900**, **1280 × 720** e **390 × 844**.
  - Overflow horizontal: **nenhum** (`1440 <= 1440`, `1280 <= 1280`, `390 <= 390`).
  - Alvos de toque `< 44×44px`: **nenhum** (`smallTargets: []`).
  - Textos visíveis `< 13px`: **nenhum** (`smallFonts: []`).
  - Âncoras internas quebradas ou seções ausentes: **nenhuma** (`missingIds: []`, `brokenAnchors: []`).
  - Interação do `MobileMenu.astro` em `390 × 844`: abertura altera `aria-expanded="true"`, `hidden=false` e rótulo para `FECHAR`; tecla `Escape` fecha o painel (`aria-expanded="false"`, `hidden=true`) e devolve o foco para `#mobile-menu-trigger`.
  - Erros de console ou exceções de página: **nenhum** (`consoleErrors: []`, `pageErrors: []`).

### 3. Próximas Fases (Aguardando Autorização Explícita)
- **Fase 3**: Sistema de Projetos, filtros interativos e catálogo `/projetos/`.
- **Fase 4**: Estudos de caso individuais (`/projetos/[slug]/`) e simuladores client-side (`src/components/labs/`).
- **Fase 5**: Tech Journal (`/journal/` e `/journal/[slug]/`).
- **Fase 6**: Página `/sobre/` e consolidação final.
