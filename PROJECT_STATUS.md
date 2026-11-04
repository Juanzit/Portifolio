# Status do Projeto — Portfólio Juan Silva Garcia

## Fase Atual: Fase 2.4 — Refinamento Final da Home (Trajetória Resumida, LinkedIn Verificado e Auditoria de Desempenho)

### 1. Implementado e Consolidado na Fase 2.4
- **Identidade Visual & Assinatura Gráfica Preservadas ([src/styles/global.css](file:///c:/Projetos/Portifolio/src/styles/global.css), [src/components/layout/Header.astro](file:///c:/Projetos/Portifolio/src/components/layout/Header.astro), [public/favicon.svg](file:///c:/Projetos/Portifolio/public/favicon.svg))**:
  - **Direção 1 — Caderno de Campo & Oficina Editorial** mantida integralmente sem substituir tokens de cor antes de decisão específica sobre a proposta *Editorial Violet Nature*.
  - **Opção 1 Oficializada**: monograma editorial `JG.` em `Newsreader` itálico com ponto terracota no cabeçalho e no `favicon.svg`.
- **Redução Efetiva da Seção de Trajetória e da Home ([src/pages/index.astro](file:///c:/Projetos/Portifolio/src/pages/index.astro), [src/data/portfolio.ts](file:///c:/Projetos/Portifolio/src/data/portfolio.ts))**:
  - A seção `#trajetoria` deixou de exibir o currículo condensado completo e passou a apresentar apenas: (1) **Formação em 2 linhas** (`Bacharelado em Ciência da Computação` e `Técnico em Informática`), (2) **Destaque único para a Publicação Principal** (*Anais do VII CoBICET 2026*, `ISSN 2764-0582`, com nota de apresentação no *XVIII EAMC / LNCC 2026*) e (3) **Seleção de 4 experiências relevantes** (`CNA Digital`, `Kodland`, `Pesquisador em IA` e `Desenvolvedor Mobile Júnior — ShapeMeApp`), reservando `experiences` completas, `scientificOutputs` completas e `certificationsAndExtension` em `src/data/portfolio.ts` para as futuras páginas internas.
  - Altura final medida da Home: **Desktop (`1440×900`) = `5.465 px` (`6,1 telas`, redução total de `-41,8%` frente aos `9.384 px` da Fase 2.2; `#trajetoria` com `576 px` cabendo na mesma tela que `#contato`)** e **Mobile (`390×844`) = `10.325 px` (`12,2 telas`, redução total de `-35,7%` frente aos `16.052 px` da Fase 2.2; `#trajetoria` reduzida para `1.176 px`)**.
- **LinkedIn Oficial Atualizado (`https://br.linkedin.com/in/juan-silva-garcia`)**:
  - Todos os links de LinkedIn na Home (Hero e Contato) foram atualizados para o perfil público verificado `https://br.linkedin.com/in/juan-silva-garcia` (`in/juan-silva-garcia`).
  - Estrutura enxuta em **5 seções**:
    1. **Hero Editorial**: texto pessoal aprovado + linha discreta de competências principais (`React Native · Python / Machine Learning · Java · JavaScript`).
    2. **Quatro Projetos em Destaque (`#projetos`)**: composições individualizadas preservadas (`Lundgren Atelier` com `fetchpriority="high"`, `Detecção Acústica de Aves Ameaçadas`, `ShapeMeApp` e `Núcleo Selvagem`).
    3. **Seleção Compacta de Outros Projetos (`#github`)**: destaque colaborativo do `ArchFlow` com atribuição distinta entre Victor Emanuel (`Victorlolmi`) e Juan Silva Garcia (sem menção a DAO); destaque autoral de `Blade of Albaia` com captura real de gameplay (`screenshot.png`) e assets re-encodados com cabeçalho PNG legítimo (`89 50 4E 47`); e grade compacta `2×2` para `PCMRC`, `Viga-Mestre`, `Hopcroft-Karp` e `Minicurso React Native / Roadmap Python`.
    4. **Resumo Breve da Trajetória (`#trajetoria`)**: síntese de 2 colunas reunindo formação acadêmica, distinção explícita entre artigo publicado nos *Anais do VII CoBICET* (`ISSN 2764-0582`) e apresentações no *XVIII EAMC* e *VII SIMEPE*, resumo de extensão/certificações e linha do tempo enxuta das 5 experiências verificadas (sem o qualificativo "internacional" na Kodland).
    5. **Contato Direto (`#contato`)**: inclui E-mail (`juansilvagarcia11037@gmail.com`), LinkedIn (`https://br.linkedin.com/in/juan-silva-garcia`), GitHub (`https://github.com/Juanzit`) e Currículo Lattes (`http://lattes.cnpq.br/9434044887106048`).

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
