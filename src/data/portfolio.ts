/**
 * Base de dados auditada do portfólio de Juan Silva Garcia (GARCIA, J. S.).
 * Centraliza os registros completos de projetos, trajetória profissional, formação acadêmica,
 * produção científica (diferenciando publicação em anais de apresentação em evento) e
 * certificações/extensão, preparando a separação entre o resumo da Home e as páginas
 * internas planejadas para as próximas fases.
 */

export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  meta: string;
  shortSummary: string;
  fullDescription: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  detail: string;
}

export interface ScientificOutputItem {
  year: string;
  dateDetail: string;
  category: 'publicacao_anais' | 'apresentacao_evento';
  categoryLabel: string;
  title: string;
  venue: string;
  authors: string;
  identifier?: string;
}

export interface CertificationItem {
  period: string;
  title: string;
  issuer: string;
  workload: string;
}

export interface CompactProjectItem {
  category: string;
  title: string;
  stack: string;
  shortSummary: string;
  fullSummary: string;
  href: string;
  linkLabel: string;
}

export const heroTechLine = 'React Native · Python / Machine Learning · Java · JavaScript';

export const archFlowProject = {
  title: 'ArchFlow — Sistema de Gerenciamento Arquitetônico',
  stack: 'Java 17 · Maven · Hibernate/JPA · MySQL · Swing/FlatLaf · JavaFX 3D',
  repoUrl: 'https://github.com/Victorlolmi/LPS_Sistema_de_Gerenciamento_Arquitetonico',
  coauthorshipNote:
    'Coautoria: Victor Emanuel (Victorlolmi, proprietário do repositório) e Juan Silva Garcia',
  partnerContributions:
    'Victor Emanuel estruturou a base do projeto Maven com JPA/Hibernate, os cadastros principais de projetos, terrenos e despesas, e o visualizador 3D (.OBJ).',
  juanContributions: [
    'Refatoração da arquitetura MVC e organização das camadas do sistema;',
    'Controle de acesso e permissões entre as visões de gestores e clientes;',
    'Implementação de validadores de regras de negócio e tratamento de exceções;',
    'Fluxo e interface de recuperação de senha;',
    'Atualização e organização dos diagramas UML (Classes, Caso de Uso e Sequência) e da documentação.',
  ],
  screenshots: {
    main: {
      src: '/images/projetos/archflow-projetos.png',
      width: 1377,
      height: 796,
      alt: 'Tela principal do sistema ArchFlow exibindo a listagem e busca de projetos arquitetônicos',
      caption: 'ArchFlow · Tela principal de gestão de projetos (Coautoria: Victor Emanuel & Juan Silva Garcia)',
    },
    overview: {
      src: '/images/projetos/archflow-visao-geral.png',
      width: 1436,
      height: 831,
      alt: 'Tela de visão geral de um projeto selecionado no sistema ArchFlow',
      caption: 'ArchFlow · Visão geral do projeto e terreno',
    },
    viewer3d: {
      src: '/images/projetos/archflow-3d.png',
      width: 1439,
      height: 836,
      alt: 'Módulo de visualização 3D integrado ao sistema ArchFlow',
      caption: 'ArchFlow · Módulo de visualização 3D (.OBJ)',
    },
  },
};

export const bladeOfAlbaiaProject = {
  title: 'Blade of Albaia',
  stack: 'Python · Pygame Zero · POO & Física Vetorial',
  repoUrl: 'https://github.com/Juanzit/Blade_of_Albaia',
  summary:
    'Jogo de plataforma 2D autoral desenvolvido para o processo seletivo de tutor da Kodland. Implementa física de pulo e movimentação com matemática vetorial, inimigos com padrões de patrulha, plataformas móveis, coleta de fragmentos, gerenciamento de estados (menu, introdução, fases e game over) e trilha sonora.',
  images: {
    screenshot: {
      src: '/images/projetos/blade-of-albaia-screenshot.png',
      width: 799,
      height: 578,
      alt: 'Captura real de gameplay do jogo Blade of Albaia exibindo a personagem Kaya, plataformas, inimigos e pontuação',
    },
    menu: {
      src: '/images/projetos/blade-of-albaia-menu.png',
      width: 308,
      height: 308,
      alt: 'Arte original de abertura do menu de Blade of Albaia (albaiaquestmenu.png)',
    },
    fase1: {
      src: '/images/projetos/blade-of-albaia-fase1.png',
      width: 681,
      height: 159,
      alt: 'Cenário panorâmico da Fase 1 do jogo Blade of Albaia (fase1.png)',
    },
  },
};

export const compactOtherProjects: CompactProjectItem[] = [
  {
    category: 'Pesquisa & Algoritmos',
    title: 'PCMRC — Caminho Mínimo com Restrição de Recursos',
    stack: 'Java · Simulated Annealing · Pesquisa Operacional',
    shortSummary:
      'Meta-heurística Simulated Annealing com operador Cut-and-Reconnect e gerador de instâncias para otimização em grafos.',
    fullSummary:
      'Implementação da meta-heurística Simulated Annealing (Têmpera Simulada) com operador de vizinhança Cut-and-Reconnect e gerador automático de instâncias de benchmark para resolver o Problema do Caminho Mínimo com Restrição de Recursos em grafos.',
    href: 'https://github.com/Juanzit/Problema-do-Caminho-M-nimo-com-Restri-es-de-Recursos-PCMRC-',
    linkLabel: 'Repositório no GitHub ↗',
  },
  {
    category: 'Engenharia de Software',
    title: 'Viga-Mestre — Engenharia de Requisitos & UML',
    stack: 'Requisitos · Arquitetura · 16 Diagramas UML',
    shortSummary:
      'Especificação de requisitos e 16 diagramas UML (Classes, Caso de Uso, Sequência, Estado, Atividade e Implantação) para gestão de obras.',
    fullSummary:
      'Modelagem completa do ciclo de vida de empreendimentos imobiliários (da aquisição do terreno à execução e venda de unidades), composta por Documento de Requisitos e 16 diagramas UML (Classes, Caso de Uso, Sequência, Estado, Atividade, Implantação e Gantt).',
    href: 'https://github.com/Juanzit/Viga-Mestre',
    linkLabel: 'Diagramas e documentação ↗',
  },
  {
    category: 'Teoria dos Grafos',
    title: 'Emparelhamento Máximo em Grafos (Hopcroft-Karp)',
    stack: 'Python · C++ · Grafos Bipartidos',
    shortSummary:
      'Implementação do algoritmo Hopcroft-Karp em grafos bipartidos e identificação de nós de controle em redes direcionadas.',
    fullSummary:
      'Implementação do algoritmo de Hopcroft-Karp para correspondências máximas em grafos bipartidos e conversão de grafos direcionados para identificação de nós de controle em redes complexas.',
    href: 'https://github.com/Juanzit/Trabalho-grafos',
    linkLabel: 'Repositório no GitHub ↗',
  },
  {
    category: 'Ensino & Comunidade',
    title: 'Minicurso React Native (16 Aulas) & Roadmap Python',
    stack: 'JavaScript · React Native · Python · Extensão',
    shortSummary:
      'Série aberta de 16 videoaulas ensinando React Native do zero ao APK (@CURSORNFIRP) e comunidade acadêmica Roadmap Python.',
    fullSummary:
      'Série aberta de 16 videoaulas práticas ensinando desenvolvimento mobile com JavaScript e React Native desde a configuração do ambiente até a geração do APK, produzida em projeto de extensão no IF Sudeste MG, junto à iniciativa acadêmica Roadmap Python.',
    href: 'https://www.youtube.com/@CURSORNFIRP',
    linkLabel: 'Canal no YouTube ↗',
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: '04/2026 — Atual',
    role: 'Professor Tutor de Programação e Tecnologia',
    org: 'CNA Digital',
    meta: '15h semanais · Ensino de Programação',
    shortSummary: 'Python, React, Roblox Studio, Blender 3D, Unity, Ciência de Dados e IA.',
    fullDescription:
      'Condução de trilhas de lógica de programação, Scratch, Construct, modelagem 3D com Blender e SculptGL, Unity, Roblox Studio, React, Python, Ciência de Dados e Inteligência Artificial.',
  },
  {
    period: '06/2025 — Atual',
    role: 'Professor Tutor de Programação (Python, Lua & Scratch)',
    org: 'Kodland',
    meta: '12h semanais · Ensino de Programação',
    shortSummary: 'Ensino baseado em projetos (PBL) com Python/Flask, POO, Roblox Studio/Lua e Git.',
    fullDescription:
      'Ensino prático para alunos de 8 a 16 anos em Scratch, Python (Flask, POO e bancos de dados) e Roblox Studio/Lua, aplicando aprendizagem baseada em projetos (PBL), Scrum e Git/GitHub.',
  },
  {
    period: '06/2025 — 06/2026',
    role: 'Pesquisa em Inteligência Artificial (IC)',
    org: 'Iniciação Científica · IF Sudeste MG',
    meta: 'Iniciação Científica · Campus Rio Pomba',
    shortSummary: 'Pipelines bioacústicos (Mel/MFCC) e avaliação de CNN, SVM e GMM-HMM (136 espécies).',
    fullDescription:
      'Desenvolvimento de pipelines de pré-processamento acústico e modelos supervisionados (CNN/RNC, SVM/MVS e GMM-HMM/MOM) para identificação automática de 136 espécies de aves ameaçadas de extinção.',
  },
  {
    period: '08/2024 — 01/2026',
    role: 'Desenvolvimento Mobile — ShapeMeApp',
    org: 'Projeto de Extensão · IF Sudeste MG',
    meta: 'Projeto de Extensão · Campus Rio Pomba',
    shortSummary: 'Evolução mobile em React Native/Expo, modelagem Firebase e testes de usabilidade.',
    fullDescription:
      'Atuação no projeto de extensão "Emagreça na Musculação no IF Sudeste MG — Campus Rio Pomba", realizando evolução mobile em React Native/Expo, modelagem NoSQL no Firebase, testes de usabilidade, QA e gestão com Jira e GitHub.',
  },
  {
    period: '06/2022 — 11/2025',
    role: 'Membro de Projetos, Validação e Prototipação',
    org: 'EmComp — Empresa Júnior (IF Sudeste MG)',
    meta: '100 horas certificadas',
    shortSummary:
      'Desenvolvimento web institucional, prototipação de interfaces, validação de UX/UI e organização de eventos técnicos.',
    fullDescription:
      'Desenvolvimento web (incluindo o site institucional da Labclin), prototipação de sites e aplicativos, validação de UX/UI e organização de eventos técnicos junto ao Núcleo da Mata.',
  },
];

/**
 * Seleção enxuta das 4 experiências principais para exibição resumida na Home.
 * O histórico completo (`experiences`, `certificationsAndExtension` e `scientificOutputs`)
 * permanece preservado neste módulo para as páginas internas futuras.
 */
export const featuredExperiences: ExperienceItem[] = experiences.slice(0, 4);

export const education: EducationItem[] = [
  {
    period: '2022 — Atual',
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'IF Sudeste MG — Campus Rio Pomba',
    detail:
      'Em andamento. Pesquisa aplicada em Inteligência Artificial, engenharia de software, estruturas de dados, grafos e desenvolvimento mobile/web.',
  },
  {
    period: '2019 — 2021',
    degree: 'Técnico em Informática',
    institution: 'IF Sudeste MG — Campus Rio Pomba',
    detail:
      'Formação técnica em lógica de programação, redes, bancos de dados, manutenção e desenvolvimento de sistemas (registro Lattes: 2019 — 2022).',
  },
];

export const scientificOutputs: ScientificOutputItem[] = [
  {
    year: '2026',
    dateDetail: '05/08/2026',
    category: 'publicacao_anais',
    categoryLabel: 'Artigo Completo Publicado nos Anais',
    title: 'Detecção Acústica de Aves Ameaçadas Utilizando Aprendizado de Máquina',
    venue: 'Anais do VII Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia (VII CoBICET) — Editora Even3',
    authors: 'GARCIA, J. S.; COELHO, M. A. N.',
    identifier: 'ISSN 2764-0582',
  },
  {
    year: '2026',
    dateDetail: '2026',
    category: 'apresentacao_evento',
    categoryLabel: 'Trabalho Apresentado em Evento',
    title: 'Detecção Acústica de Aves Ameaçadas Utilizando Aprendizado de Máquina',
    venue: 'XVIII Encontro Acadêmico de Modelagem Computacional (XVIII EAMC — LNCC)',
    authors: 'Juan Silva Garcia e Maurício Archanjo Nunes Coelho',
  },
  {
    year: '2025',
    dateDetail: '2025',
    category: 'apresentacao_evento',
    categoryLabel: 'Trabalho Apresentado em Simpósio',
    title: 'Evolução de Software em Ambientes Acadêmicos: O ShapeMeApp e a Integração de Feedbacks Reais no Campus Rio Pomba',
    venue: 'VII Simpósio de Ensino, Pesquisa e Extensão (VII SIMEPE) — IF Sudeste MG',
    authors: 'Juan Silva Garcia, Gustavo Vaz Teixeira, Sérgio Muinhos Barroso Lima e João Batista Ferreira Júnior',
  },
];

export const certificationsAndExtension: CertificationItem[] = [
  {
    period: '2022 — 2025',
    title: 'Certificação de Atuação em Empresa Júnior (EmComp)',
    issuer: 'IF Sudeste MG — Campus Rio Pomba',
    workload: '100 horas certificadas',
  },
  {
    period: '03/2025 — 08/2025',
    title: 'Monitoria Voluntária — Linguagens Formais e Autômatos',
    issuer: 'IF Sudeste MG — Campus Rio Pomba',
    workload: 'Ensino superior',
  },
  {
    period: '2025',
    title: 'Ministrante de Minicurso Presencial: React com Firebase',
    issuer: 'IF Sudeste MG — Campus Rio Pomba',
    workload: 'Formação prática',
  },
  {
    period: '12/2023 — 08/2024',
    title: 'Instrutor de Desenvolvimento Mobile (JavaScript & React Native)',
    issuer: 'IF Sudeste MG — Projeto de Extensão',
    workload: '16 videoaulas gravadas',
  },
  {
    period: '2020',
    title: 'Voluntário no Curso "Python Básico pra Quem Tem Pressa"',
    issuer: 'IF Sudeste MG — Projeto de Extensão',
    workload: 'Extensão comunitária',
  },
];

export const contactLinks = {
  email: 'juansilvagarcia11037@gmail.com',
  linkedinUrl: 'https://br.linkedin.com/in/juan-silva-garcia',
  linkedinLabel: 'in/juan-silva-garcia',
  githubUrl: 'https://github.com/Juanzit',
  githubLabel: 'github.com/Juanzit',
  lattesUrl: 'http://lattes.cnpq.br/9434044887106048',
  lattesLabel: 'Currículo Lattes (CNPq)',
};
