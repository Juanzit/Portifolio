# Status do Projeto — Portfólio Juan Silva Garcia

## Fase Atual: Fase 2.3 — Refinamento de UX, Arquitetura da Informação e Auditoria Factual da Home (aguardando revisão e aprovação)

### 1. Implementado e Consolidado na Fase 2.3
- **Identidade Visual & Assinatura Gráfica Oficializadas ([src/styles/global.css](file:///c:/Projetos/Portifolio/src/styles/global.css), [src/components/layout/Header.astro](file:///c:/Projetos/Portifolio/src/components/layout/Header.astro), [public/favicon.svg](file:///c:/Projetos/Portifolio/public/favicon.svg))**:
  - **Direção 1 — Caderno de Campo & Oficina Editorial** preservada (`#F5F2EB`, `#ECE7DC`, `#161514`, `#524E48`, `#B93815`, `#1F5137`) com `Newsreader`, `Plus Jakarta Sans` e `IBM Plex Mono`, além do palco escuro pontual (`#151413`) no *Núcleo Selvagem* e na visualização experimental da *Bioacústica*.
  - **Opção 1 Aprovada**: monograma editorial `JG.` em `Newsreader` itálico com ponto terracota no cabeçalho e no `favicon.svg`.
- **Separação Estruturada de Dados ([src/data/portfolio.ts](file:///c:/Projetos/Portifolio/src/data/portfolio.ts))**:
  - Os conjuntos completos de experiências, formação acadêmica, produção científica (diferenciando estritamente `Artigo Completo Publicado em Anais` de `Apresentação de Trabalho em Evento`), certificações/extensão e projetos secundários foram estruturados em módulo tipado próprio, preparando a separação para as páginas internas das próximas fases sem sobrecarregar a Home.
- **Redução da Extensão da Home ([src/pages/index.astro](file:///c:/Projetos/Portifolio/src/pages/index.astro))**:
  - Redução de `972` para `511` linhas de código (`-47,4%`), reduzindo a altura total renderizada no Desktop (`1440×900`) de `9.384 px` (~10,4 telas) para `5.752 px` (~6,4 telas, `-38,7%`) e no Mobile (`390×844`) de `16.052 px` (~19,0 telas) para `11.109 px` (~13,2 telas, `-30,8%`).
  - Estrutura enxuta em **5 seções**:
    1. **Hero Editorial**: texto pessoal aprovado + linha discreta de competências principais (`React Native · Python / Machine Learning · Java · JavaScript`).
    2. **Quatro Projetos em Destaque (`#projetos`)**: composições individualizadas preservadas (`Lundgren Atelier` com `fetchpriority="high"`, `Detecção Acústica de Aves Ameaçadas`, `ShapeMeApp` e `Núcleo Selvagem`).
    3. **Seleção Compacta de Outros Projetos (`#github`)**: destaque colaborativo do `ArchFlow` com atribuição distinta entre Victor Emanuel (`Victorlolmi`) e Juan Silva Garcia (sem menção a DAO); destaque autoral de `Blade of Albaia` com captura real de gameplay (`screenshot.png`) e assets re-encodados com cabeçalho PNG legítimo (`89 50 4E 47`); e grade compacta `2×2` para `PCMRC`, `Viga-Mestre`, `Hopcroft-Karp` e `Minicurso React Native / Roadmap Python`.
    4. **Resumo Breve da Trajetória (`#trajetoria`)**: síntese de 2 colunas reunindo formação acadêmica, distinção explícita entre artigo publicado nos *Anais do VII CoBICET* (`ISSN 2764-0582`) e apresentações no *XVIII EAMC* e *VII SIMEPE*, resumo de extensão/certificações e linha do tempo enxuta das 5 experiências verificadas (sem o qualificativo "internacional" na Kodland).
    5. **Contato Direto (`#contato`)**: inclui E-mail (`juansilvagarcia11037@gmail.com`), LinkedIn (`https://www.linkedin.com/in/juan-garcia--/`), GitHub (`https://github.com/Juanzit`) e Currículo Lattes (`http://lattes.cnpq.br/9434044887106048`).

### 2. Evidências Visuais e Pendências Mapeadas
- **Corrigidas e Incorporadas**:
  - `Lundgren Atelier`: `/images/projetos/lundgren-atelier-home.png` (`2160×1350`, PNG).
  - `ArchFlow`: `/images/projetos/archflow-projetos.png` (`1377×796`, PNG) exibida na Home; `/images/projetos/archflow-visao-geral.png` (`1436×831`) e `/images/projetos/archflow-3d.png` (`1439×836`) catalogadas em `src/data/portfolio.ts`.
  - `Blade of Albaia`: `/images/projetos/blade-of-albaia-screenshot.png` (`799×578`, PNG real de gameplay), `/images/projetos/blade-of-albaia-menu.png` (`308×308`, re-encodado de JPEG-in-PNG para PNG legítimo `89 50 4E 47`) e `/images/projetos/blade-of-albaia-fase1.png` (`681×159`, PNG).
- **Pendentes (Aguardando Fornecimento pelo Usuário)**:
  - **Bioacústica**: espectrogramas Mel/MFCC ou gráficos comparativos reais entre **Cenário A (Controle)** e **Cenário B (Proposto)**, além da organização do código público em `Juanzit/Deteccao_acustica_aves`.
  - **Núcleo Selvagem**: capturas reais do jogo no Roblox Studio, criaturas, laboratório/Base Pessoal 2.0 ou modelos 3D no Blender.
  - **ShapeMeApp**: capturas reais das telas do aplicativo mobile/web.
  - **Confirmações de Conteúdo**:
    - Confirmar se a URL customizada `https://www.linkedin.com/in/juan-garcia--/` (já incluída na seção de contato) é a definitiva (no README do perfil `Juanzit/Juanzit` ainda consta o slug antigo `juan-garcia-1507b0234`).
    - Confirmar a natureza do registro *"Desenvolvedor Java — IF Sudeste MG (09/2025 – 01/2026)"* (mantido fora da lista de experiências até confirmação).
    - Confirmar se o trabalho apresentado no *XVIII EAMC (2026)* também possui publicação em anais/resumo expandido ou apenas apresentação oral/pôster.
