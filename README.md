# Lak Portfolio

A responsive React portfolio foundation for a Senior Staff Data & AI Engineer.

## Run locally

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available commands

- `npm run dev` - Start the Vite development server.
- `npm run typecheck` - Run strict TypeScript checks.
- `npm run lint` - Lint application and configuration files.
- `npm run build` - Typecheck and create the production build in `dist/`.

## Project structure

- `src/app` - application composition.
- `src/components/layout` - site header and footer.
- `src/components/sections` - shared section layout and hero.
- `src/data` — profile, experience, expertise, project case studies, writing and navigation content.
- `src/components/experience` — reusable experience timeline.
- `src/components/projects` — case study cards and lightweight architecture-flow diagrams.
- `src/types` - shared content interfaces.
- `src/styles` - Tailwind import and global styles.
- `portfolio-content` — factual content review and publication verification checklist.

Professional content is based on the supplied resume and owner-confirmed information. See `AGENTS.md` for persistent content and engineering rules, and `portfolio-content/` for review notes before publication.
