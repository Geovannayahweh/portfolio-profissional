export type Locale = "pt" | "en";

export const dictionary = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
      menu: "Abrir menu",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Geovanna Soto",
      role: "Desenvolvedora em formação",
      description:
        "Estudante de Sistemas de Informação na PUCPR, construindo aplicações web do front-end ao back-end. Curiosa por natureza, cuidadosa com detalhes e apaixonada por construir soluções que fazem sentido para as pessoas.",
      cta: "Ver Projetos",
      contact: "Entre em Contato",
      badge: "Disponível para oportunidades",
      scroll: "Role para descobrir",
    },
    about: {
      title: "Sobre Mim",
      kicker: "Um pouco da minha história",
      p1: "Sou estudante de Sistemas de Informação na PUCPR e venho construindo uma base sólida em programação e desenvolvimento web. No dia a dia, trabalho com JavaScript, React, Node.js, Python e Java — sempre buscando entender o problema antes de escrever a primeira linha de código.",
      p2: "Gosto de projetos em que dá para acompanhar a ideia da primeira tela até o banco de dados: uma interface agradável, um código organizado e uma estrutura que outra pessoa consiga entender. É isso que procuro em cada projeto: clareza, organização e um resultado que realmente ajuda alguém.",
      educationTitle: "Formação",
      degree: "Bacharelado em Sistemas de Informação",
      university: "PUCPR — Pontifícia Universidade Católica do Paraná",
      status: "Em andamento",
      focusTitle: "Foco atual",
      focus: "JavaScript, React, Node.js, Python, Java, HTML, CSS e MySQL",
      highlights: [
        { value: "Web", label: "Front-end com React e JavaScript" },
        { value: "API", label: "Back-end com Node.js e Express" },
        { value: "SQL", label: "Modelagem e consultas em MySQL" },
      ],
    },
    experience: {
      title: "Experiência Profissional",
      kicker: "Onde eu aprendi na prática",
      current: "Atual",
      jobs: [
        {
          company: "Secretaria da Educação do Paraná",
          role: "Estagiária de Ciência de Dados",
          period: "Janeiro — Junho de 2026",
          location: "Curitiba, PR",
          current: false,
          description:
            "Atuei com dados educacionais do estado, realizando consultas ao banco de dados, tratamento das informações e construção de relatórios que apoiavam a tomada de decisão das equipes.",
          bullets: [
            "Consultas SQL ao banco de dados institucional para extração e cruzamento de informações",
            "Tratamento, validação e organização de bases para garantir consistência dos dados",
            "Construção de relatórios e painéis que traduzem números em informação clara",
            "Apoio às equipes com análises sob demanda e documentação dos processos",
          ],
          stack: ["SQL", "Excel", "Power BI", "Python"],
        },
        {
          company: "Fertipar",
          role: "Auxiliar Jurídico",
          period: "Experiência anterior",
          location: "Curitiba, PR",
          current: false,
          description:
            "Suporte à rotina jurídica da empresa, com organização de documentos, acompanhamento de processos e controle de prazos — uma escola de atenção ao detalhe e responsabilidade que levo para a área de tecnologia.",
          bullets: [
            "Organização e controle documental com rigor de prazos",
            "Acompanhamento de processos e elaboração de planilhas de controle",
            "Comunicação com áreas internas e parceiros externos",
          ],
          stack: ["Excel", "Gestão documental"],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      kicker: "Ferramentas do meu dia a dia",
      frontend: "Front-end",
      backend: "Linguagens & Banco de Dados",
      tools: "Ferramentas",
    },
    projects: {
      title: "Projetos",
      kicker: "O que eu venho construindo",
      featured: "Destaque",
      viewCode: "Ver código",
      viewAll: "Ver todos no GitHub",
      items: {
        cinelog: {
          name: "CineLog",
          description:
            "Aplicação completa de catálogo de filmes: busca por título, filtro por gênero, avaliações de 0 a 10 e comentários. Front-end em React com Context API e back-end em Node.js com autenticação JWT, banco SQLite e testes automatizados.",
          highlights: [
            "Autenticação com JWT e área de perfil protegida",
            "Integração com as APIs do TMDB e da Wikipédia",
            "Upload de avatar com drag-and-drop e 17 testes no back-end",
          ],
        },
        csc: {
          name: "Monitoramento de Temperatura IoT",
          description:
            "Sistema cliente-servidor em Python para ambientes IoT. Sensores enviam leituras via TCP para um servidor central multithread, que armazena os dados e calcula médias sob demanda de um painel de controle.",
          highlights: [
            "Protocolo próprio com mensagens JSON sobre TCP",
            "Servidor multithread atendendo vários sensores simultaneamente",
            "Painel de controle para consulta das médias por sensor",
          ],
        },
        biblioteca: {
          name: "Sistema de Biblioteca",
          description:
            "Sistema acadêmico de gestão de acervo desenvolvido em Java, com cadastro de livros, controle de empréstimos e devoluções aplicando os princípios de orientação a objetos.",
          highlights: [],
        },
        tde3: {
          name: "Consumo de APIs com JavaScript",
          description:
            "Aplicação didática que demonstra requisições HTTP com Fetch API e async/await, cobrindo os métodos GET, POST, PUT e DELETE com tratamento de erros e feedback visual.",
          highlights: [],
        },
        senhas: {
          name: "Gerador de Senhas",
          description:
            "Gerador de senhas seguras no navegador, com controle de tamanho e tipos de caractere. Construído com HTML, CSS e JavaScript puro.",
          highlights: [],
        },
        batalha: {
          name: "Batalha Naval",
          description:
            "Implementação do clássico jogo em Python, desenvolvida na disciplina de Raciocínio Algorítmico com foco em lógica, estruturas de dados e validação de jogadas.",
          highlights: [],
        },
      },
    },
    contact: {
      title: "Vamos conversar",
      kicker: "Contato",
      description:
        "Estou aberta a estágios, oportunidades e projetos na área de desenvolvimento. Se quiser trocar uma ideia ou apenas dizer oi, será um prazer conversar.",
      linkedin: "Conectar no LinkedIn",
      github: "Ver GitHub",
      email: "Enviar e-mail",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      madeWith: "Feito com",
      by: "por Geovanna Soto",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      menu: "Open menu",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Geovanna Soto",
      role: "Developer in the making",
      description:
        "Information Systems student at PUCPR, building web applications from the front-end to the back-end. Naturally curious, detail-driven and passionate about building solutions that make sense to people.",
      cta: "View Projects",
      contact: "Get in Touch",
      badge: "Open to opportunities",
      scroll: "Scroll to explore",
    },
    about: {
      title: "About Me",
      kicker: "A bit of my story",
      p1: "I'm an Information Systems student at PUCPR, building a solid foundation in programming and web development. Day to day I work with JavaScript, React, Node.js, Python and Java — always trying to understand the problem before writing the first line of code.",
      p2: "I enjoy projects I can follow from the first screen all the way to the database: a pleasant interface, tidy code and a structure someone else can understand. That's what I look for in every project: clarity, structure and a result that genuinely helps someone.",
      educationTitle: "Education",
      degree: "B.Sc. in Information Systems",
      university: "PUCPR — Pontifical Catholic University of Paraná",
      status: "In progress",
      focusTitle: "Current focus",
      focus: "JavaScript, React, Node.js, Python, Java, HTML, CSS and MySQL",
      highlights: [
        { value: "Web", label: "Front-end with React and JavaScript" },
        { value: "API", label: "Back-end with Node.js and Express" },
        { value: "SQL", label: "Data modeling and queries in MySQL" },
      ],
    },
    experience: {
      title: "Professional Experience",
      kicker: "Where I learned by doing",
      current: "Current",
      jobs: [
        {
          company: "Paraná State Department of Education",
          role: "Data Science Intern",
          period: "January — June 2026",
          location: "Curitiba, Brazil",
          current: false,
          description:
            "I worked with the state's educational data, running database queries, cleaning information and building reports that supported decision-making across teams.",
          bullets: [
            "SQL queries against the institutional database to extract and cross-reference data",
            "Cleaning, validating and structuring datasets to ensure consistency",
            "Building reports and dashboards that turn numbers into clear information",
            "Supporting teams with on-demand analysis and process documentation",
          ],
          stack: ["SQL", "Excel", "Power BI", "Python"],
        },
        {
          company: "Fertipar",
          role: "Legal Assistant",
          period: "Previous experience",
          location: "Curitiba, Brazil",
          current: false,
          description:
            "Supported the company's legal routine with document management, case follow-up and deadline control — a school of attention to detail and accountability that I carry into tech.",
          bullets: [
            "Document organization and control with strict deadline tracking",
            "Case follow-up and creation of control spreadsheets",
            "Communication with internal areas and external partners",
          ],
          stack: ["Excel", "Document management"],
        },
      ],
    },
    skills: {
      title: "Skills",
      kicker: "My everyday toolkit",
      frontend: "Front-end",
      backend: "Languages & Databases",
      tools: "Tools",
    },
    projects: {
      title: "Projects",
      kicker: "What I've been building",
      featured: "Featured",
      viewCode: "View code",
      viewAll: "See all on GitHub",
      items: {
        cinelog: {
          name: "CineLog",
          description:
            "A full movie catalog app: title search, genre filtering, 0–10 ratings and comments. React front-end with Context API and a Node.js back-end with JWT auth, SQLite database and automated tests.",
          highlights: [
            "JWT authentication with a protected profile area",
            "Integration with the TMDB and Wikipedia APIs",
            "Drag-and-drop avatar upload and 17 back-end tests",
          ],
        },
        csc: {
          name: "IoT Temperature Monitoring",
          description:
            "A Python client-server system for IoT environments. Sensors send readings over TCP to a multithreaded central server that stores the data and computes averages on demand for a control panel.",
          highlights: [
            "Custom protocol with JSON messages over TCP",
            "Multithreaded server handling several sensors at once",
            "Control panel to query per-sensor averages",
          ],
        },
        biblioteca: {
          name: "Library System",
          description:
            "An academic collection-management system built in Java, with book registration and loan/return control applying object-oriented principles.",
          highlights: [],
        },
        tde3: {
          name: "Consuming APIs with JavaScript",
          description:
            "A teaching-oriented app demonstrating HTTP requests with the Fetch API and async/await, covering GET, POST, PUT and DELETE with error handling and visual feedback.",
          highlights: [],
        },
        senhas: {
          name: "Password Generator",
          description:
            "A browser-based secure password generator with length and character-type controls. Built with plain HTML, CSS and JavaScript.",
          highlights: [],
        },
        batalha: {
          name: "Battleship",
          description:
            "An implementation of the classic game in Python, developed for the Algorithmic Reasoning course with a focus on logic, data structures and move validation.",
          highlights: [],
        },
      },
    },
    contact: {
      title: "Let's talk",
      kicker: "Contact",
      description:
        "I'm open to internships, opportunities and projects in software development. If you'd like to chat or just say hi, I'd love to hear from you.",
      linkedin: "Connect on LinkedIn",
      github: "View GitHub",
      email: "Send an email",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      by: "by Geovanna Soto",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)["pt"];
