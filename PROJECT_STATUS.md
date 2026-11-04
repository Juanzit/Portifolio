# Status do Projeto — Portfólio Juan Silva Garcia

## Fase Atual: Fase 2.5 — Revisão Final de Encerramento da Fase 2 (Atribuição de Extensão, Redução de CLS por Fallback Tipográfico, Auditoria Mobile 390×844 e Prévia Comparativa Violet Nature)

### 1. Implementado e Consolidado na Fase 2.5
- **Conferência e Ajuste Factual das Experiências ([src/data/portfolio.ts](file:///c:/Projetos/Portifolio/src/data/portfolio.ts))**:
  - A atuação no `ShapeMeApp` foi atualizada de `"Desenvolvedor Mobile Júnior — ShapeMeApp"` para **`"Desenvolvimento Mobile — ShapeMeApp"`** (`Projeto de Extensão · IF Sudeste MG · 08/2024 — 01/2026`), refletindo com precisão sua natureza comprovada de projeto de extensão sem inferir vínculo empregatício/CLT não confirmado.
  - A iniciação científica também teve sua natureza explicitada na linha institucional (`Pesquisa em Inteligência Artificial (IC) · Iniciação Científica · IF Sudeste MG · 06/2025 — 06/2026`).
  - O registro `"Desenvolvedor Java — IF Sudeste MG (09/2025 – 01/2026)"` permanece fora da seção de experiências profissionais até confirmação se corresponde ao projeto acadêmico `ArchFlow` ou a vínculo institucional distinto.
- **Investigação e Redução de `-84,9%` no CLS de Carregamento Frio ([src/styles/global.css](file:///c:/Projetos/Portifolio/src/styles/global.css), [src/pages/index.astro](file:///c:/Projetos/Portifolio/src/pages/index.astro))**:
  - Identificados via `PerformanceObserver` (`LayoutShiftAttribution` / `entry.sources`) os elementos exatos que causavam o `CLS = 0,1095` no carregamento frio (`SECTION#projetos`, `<p>Estudo Ciência da Computação...</p>` e `<aside>`), provocados pela oscilação da unidade `ch` (`max-w-[34ch]` / `max-w-[60ch]`) durante a troca sequencial entre a fonte de sistema, `Newsreader` Roman e `Newsreader` Italic.
  - Adicionadas declarações `@font-face` de fallback calibradas (`Newsreader Fallback` com `size-adjust: 96.5%`, `ascent-override: 97%`, `descent-override: 24%` e `Plus Jakarta Sans Fallback` com `size-adjust: 101.5%`, `ascent-override: 98%`, `descent-override: 24%`) e substituídas as larguras máximas em `ch` por `rem` (`max-w-[36rem]` / `max-w-[42rem]`), reduzindo o CLS frio de **`0,1095` para `0,0165`** (Desktop) e **`0,0225`** (Mobile), e **`0,0000`** no carregamento aquecido (`N = 3` execuções).
- **Auditoria Completa Mobile (`390×844`) e Desktop (`1440×900`)**:
  - Desktop (`1440×900`): `scrollHeight = 5.465 px` (`6,1 telas`), `horizontalOverflow = false` (`1440 === 1440`).
  - Mobile (`390×844`): `scrollHeight = 10.364 px` (`12,3 telas`), `horizontalOverflow = false` (`390 === 390`), menu mobile testado (`aria-expanded`, abertura, links de âncora e fechamento via `Escape`).
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
