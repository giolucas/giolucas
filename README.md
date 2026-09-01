# giolucas

Personal site for Giovanni Lucas — a single-page career trajectory site (Next.js + TypeScript), implemented from a Claude Design handoff (`Roteiros Garimpados.dc.html`) built on the Garimpa Drink design system's tokens and components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`, fonts).
- `src/components` — page sections (`Header`, `Hero`, `RoleCarousel`, `RoleCard`, `HowIWork`, `Footer`) and ported design-system primitives in `src/components/ui` (`Button`, `IconButton`, `Badge`, `Eyebrow`, `GrainBlock`).
- `src/data/roles.ts` — the career timeline data driving the carousel.
- `src/styles/tokens` — design tokens (color, typography, spacing, effects) ported from the source design system.

## Known TODOs

A few links are placeholders pending real destinations: `Falar comigo`, `Ver no LinkedIn`, `Baixar CV`, and the nav's `Ensino` / `Contato` / `Frameworks` items. Search for `TODO` in `src/components`.
