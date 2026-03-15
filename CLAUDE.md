# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

Single-page Next.js 15 landing site for InnAcademy (hospitality education). All content lives on the homepage (`/`) with hash-based anchor navigation.

**Stack**: Next.js App Router · TypeScript · Tailwind CSS · Lucide React

### Internationalization

The site supports Greek (default), English, and French. All user-facing strings live in [lib/translations.ts](lib/translations.ts). Access translations via the `useLang()` hook from [contexts/LanguageContext.tsx](contexts/LanguageContext.tsx):

```ts
const { t } = useLang();
// t.hero.title, t.pricing.subtitle, etc.
```

Every component is a Client Component (`"use client"`) and consumes this context. The root layout wraps the app in `<LanguageProvider>`.

### Components

Each section of the page is its own component in [components/](components/). The assembly order in [app/page.tsx](app/page.tsx) defines the visual order on the page.

**ContactForm** has two rendering variants:
- `sticky` — floats in the right sidebar on desktop (inside Hero's CSS grid)
- `section` — full-width block rendered inline on mobile

### Design System

Custom Tailwind tokens in [tailwind.config.ts](tailwind.config.ts):
- Brand colors: `teal` (#0a7ea4), `orange` (#e8622a), `navy`, `dark`
- Custom animations: `ticker` (logo carousel), `fade-in-up`, `fade-in`
- Font: Inter (system-ui fallback)

Global CSS animations and ticker styles are in [app/globals.css](app/globals.css).

### Images

Remote image domains allowlisted in [next.config.mjs](next.config.mjs): `images.unsplash.com`, `ui-avatars.com`, `placehold.co`. Local assets live under `public/` in subdirectories: `gallery/`, `masterclasses/`, `member/`, `sponsors/`, `accrediations/`.
