<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# MentorLagbe

Tutoring-marketplace frontend: Next.js 16 App Router, React 19, Tailwind v4, HeroUI v3. Early scaffold — `/` and empty `/signin`/`/signup` placeholders are all that exist.

## Commands

Use npm (only `package-lock.json` exists).

- `npm run dev` — Turbopack dev server on :3000.
- `npm run build` — production build; runs TypeScript checks and prerendering.
- `npm run lint` — ESLint flat config. There is no `next lint`.
- `npx next typegen && npx tsc --noEmit` — standalone typecheck. `next-env.d.ts` is gitignored and route types are generated, so run `typegen` first on a fresh clone.

No test runner, formatter, CI, or deploy config exists. Verify with lint + typegen/tsc + build instead of adding new tooling.

## Routing and layouts

- `src/app/layout.tsx` is the only layout with `<html>`/`<body>`; it loads Josefin Sans via `next/font/google`.
- `src/app/(home)/layout.tsx` adds the `Navbar` to every route in that group. `(home)` never appears in URLs.
- The homepage is `src/app/(home)/page.tsx`; `src/app/page.tsx` no longer exists. The README still points at the old scaffold path — trust the files.
- `PageProps<"/path">` and `LayoutProps<"/path">` are global generated types. Don't import them or hand-write page/layout prop shapes.
- Navbar links to `/tuitions`, `/pricing`, `/about`, `/dashboard`, and `/signup`. Only `/signin` and `/signup` pages exist (empty placeholders); the rest 404.

## Components

- Page sections live in `src/components/<Page>/` (e.g. `components/Homepage/Hero.tsx`); reusable UI in `src/components/shared/<Component>/<Component>.tsx`.
- PascalCase filenames, one component per file, default export. `@/` maps to `src/`.
- Add `"use client"` only to components that use state, effects, or browser events (e.g. `Navbar`). Keep pages/layouts as server components.

## Styling

- Tailwind v4 is CSS-first: no `tailwind.config.*`. `src/app/globals.css` only imports `tailwindcss` and `@heroui/styles`.
- ``maps to Poppins through`@theme inline`in`globals.css` (Poppins is loaded in the root layout). Body text remains Josefin Sans.
- CSS is compiled by the `*.css` Turbopack loader rule in `next.config.ts` (`@tailwindcss/turbopack`). Do not add `postcss.config.*`, switch to `@tailwindcss/postcss`, or remove that rule — the standard Next/Tailwind setup from the docs does not apply here.
- Prefer HeroUI semantic utilities (`bg-background`, `border-separator`, `text-primary`) over raw palette colors so styling follows HeroUI's theme.

## HeroUI v3, not v2/NextUI

- v3 uses compound components (`Card.Header`, `Select.Item`, ...) and needs no provider at the root.
- v2/NextUI patterns are wrong here: no `NextUIProvider`/`HeroUIProvider`, and variants changed (e.g. use `variant="primary"`, not `color="primary" variant="solid"`).
- Check props in `node_modules/@heroui/react/dist/components/<component>/*.d.ts` or https://heroui.com/docs/react/getting-started/quick-start before guessing.

## Gotchas

- Next rewrites the marked `nextjs-agent-rules` block above on `next dev`; keep it and commit it. `experimental.agentFeedback` in `next.config.ts` can also add a managed feedback block to this file.
- Never edit `.next/`; it holds generated route types and build output.
- Formatting is mixed (2/4 spaces, single/double quotes) and nothing enforces it. Match the file you edit; don't reformat whole files.
