# Portfólio — Geovanna Soto

Portfólio pessoal de **Geovanna Karolyne Jave Soto**, estudante de Sistemas de Informação
na PUCPR, com foco em desenvolvimento web.

## Como este projeto foi feito (IA)

> Este portfólio foi desenvolvido **integralmente com inteligência artificial**.

- **IA utilizada:** [Claude Opus 5](https://www.anthropic.com/claude) (Anthropic), através do
  [Claude Code](https://claude.com/claude-code) — o agente de programação que roda no terminal.
- **Como foi feito:** o site nasceu de um `create-next-app` e foi construído de forma
  conversacional. A cada pedido em linguagem natural ("crie a seção de projetos",
  "deixe a paleta mais quente", "adicione tradução para inglês"), a IA leu o código
  existente, escreveu e editou os arquivos diretamente no repositório e validou o
  resultado com `npm run build`/`npm run lint`.
- **O que a IA produziu:** a arquitetura de pastas, todos os componentes React
  (`src/components/`), o design system em `globals.css` (paleta, tipografia e tokens),
  as animações com Motion, o sistema de internacionalização (`src/lib/i18n.tsx` +
  `dictionary.ts`), os textos em português e inglês, a metadata/SEO e este README.
- **O papel humano:** direção criativa, conteúdo real do currículo (experiências,
  habilidades, projetos e links), a foto de perfil e a revisão/aprovação de cada
  alteração antes do commit.

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) com design tokens próprios
- [Motion](https://motion.dev) para as animações de entrada
- `next/font` (Playfair Display + Poppins) e `next/image`

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx      # fontes, metadata/SEO e provider de idioma
│   ├── page.tsx        # composição das seções
│   └── globals.css     # paleta, tipografia e utilitários
├── components/         # Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer
├── data/portfolio.ts   # perfil, skills e projetos (links do GitHub)
└── lib/
    ├── dictionary.ts   # todos os textos, em português e inglês
    └── i18n.tsx        # contexto de idioma (persiste no localStorage)
```

## Como editar o conteúdo

- **Textos** (qualquer frase do site, nos dois idiomas): `src/lib/dictionary.ts`
- **E-mail, links e localização**: `src/data/portfolio.ts` → `profile`
- **Habilidades**: `src/data/portfolio.ts` → `skills`
  (para um ícone novo, registre-o em `src/components/TechIcon.tsx`)
- **Projetos**: `src/data/portfolio.ts` → `projects` (repositório, stack e cores da capa)
  e a descrição correspondente em `dictionary.ts`
- **Foto**: substitua `public/geovanna.jpg` (quadrada, ~1000×1000)

## Deploy

Projeto estático (SSG). Publicar na Vercel:

```bash
npx vercel        # preview
npx vercel --prod # produção
```
# portfolio-profissional
