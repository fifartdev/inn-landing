# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Keep this file up to date.** Update CLAUDE.md whenever structural or behavioural changes are made to the project.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

Multi-page Next.js 15 site for InnAcademy (hospitality education). The homepage (`/`) uses hash-based anchor navigation; several sections have been promoted to dedicated routes.

**Stack**: Next.js App Router · TypeScript · Tailwind CSS · Lucide React

### Page Structure

| Route | Content |
|---|---|
| `/` | Hero, LogoTicker, CertificationsBar, AboutSection, ProgramHighlights, CurriculumSection, MasterclassVenues, PricingSection, SponsorsSection, Footer |
| `/professors` | ProfessorsSection |
| `/guests` | GuestSpeakersSection |
| `/france` | FranceTripSection |
| `/gallery` | GallerySection |
| `/faq` | FAQSection |
| `/countries` | CountriesSection |

When adding nav links or cross-links, always point to these routes — not hash anchors.

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

### Data

All professor and course data lives in [lib/translations.ts](lib/translations.ts):

- **`professorsData`** — array of professor objects. Fields: `name`, `nameLatin`, `category`, `linkedin`, `image`. Add `guestSpeaker: true` to include in GuestSpeakersSection.
- **`courseData`** — array of course objects used by CurriculumSection.
- **`categoryColors`** — maps category keys to Tailwind pill classes.

Professor images live under `public/professors/`. The CurriculumSection shows only the `#` index, category pill, and course title — the instructor column has been intentionally removed from all viewport sizes.

### Design System

Custom Tailwind tokens in [tailwind.config.ts](tailwind.config.ts):
- Brand colors: `teal` (#0a7ea4), `orange` (#e8622a), `navy`, `dark`
- Custom animations: `ticker` (logo carousel), `fade-in-up`, `fade-in`
- Font: Inter (system-ui fallback)

Global CSS animations and ticker styles are in [app/globals.css](app/globals.css).

### Images

Remote image domains allowlisted in [next.config.mjs](next.config.mjs): `images.unsplash.com`, `ui-avatars.com`, `placehold.co`. Local assets live under `public/` in subdirectories: `gallery/`, `masterclasses/`, `member/`, `sponsors/`, `accrediations/`, `professors/`.

### Key UI Notes

- **Hero overlay opacity**: Lighter than default — 0.70/0.55/0.25 layers.
- **Hero stat boxes**: Hidden on mobile (`hidden sm:grid`).
- **MasterclassVenues notes**: Two separate lines (`venueNote1`, `venueNote2`) in translations, rendered with orange `+` prefix.
- **CookieBanner**: Smaller on mobile (reduced padding, text-xs, smaller buttons); scales up on `sm:`.
- **PricingSection bank deposit**: Shows title and icon only — bank name, IBAN and beneficiary fields are intentionally not displayed.
- **CertificationsBar Paris Education**: `parisSub` is "School of Hospitality" across all languages.
