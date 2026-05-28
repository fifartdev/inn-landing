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
| `/sponsors` | SponsorsSection |
| `/privacy` | Privacy policy (content from `t.privacy` translations) |
| `/terms` | Terms of use (content from `t.terms` translations) |
| `/apply` | Standalone form-only marketing landing page — full Navbar + Footer, `noindex`, destination URL for all paid ad campaigns |
| `/thank-you` | Post-submission confirmation page — `noindex`, not in sitemap, used as URL-based conversion signal for ad platforms |

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
- `section` — full-width block rendered inline on mobile and on `/apply`

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

### Analytics & Tracking

Tracking IDs are driven by environment variables — no code changes or git pushes needed to add/change pixels.

| Env variable | Platform | Example value |
|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads | `AW-XXXXXXXXX` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta / Facebook Pixel | `1234567890123456` |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | TikTok Pixel | `CXXXXXXXXXXXXXXX` |

- **Local**: copy `.env.example` → `.env.local`, fill in IDs, restart dev server.
- **Production**: set variables in Vercel/Netlify dashboard → click Redeploy (no git push).
- Leave a variable unset or empty to disable that pixel.

[lib/siteConfig.ts](lib/siteConfig.ts) reads the env vars. [components/Analytics.tsx](components/Analytics.tsx) injects the scripts via `<Script strategy="afterInteractive">` and is mounted in `app/layout.tsx`.

### Email (Contact Form)

Handled by [app/api/apply/route.ts](app/api/apply/route.ts) via Resend.

- **From**: `info@innacademy.gr` (verified domain in Resend — must have SPF/DKIM DNS records confirmed)
- **To**: `info@innacademy.gr` (internal notification) + the applicant's email (confirmation)
- **API key**: `RESEND_API_KEY` env var (never `NEXT_PUBLIC_*`)
- **Language-aware confirmation**: ContactForm sends the active `lang` (`gr`/`en`/`fr`) in the POST body. The API route picks the matching template from `confirmationCopy` (defaults to Greek if missing).
- **URL tracking params**: ContactForm reads all query-string params from the URL on mount (e.g. `?utm_source=google&gclid=...`) and sends them as `trackingParams` in the POST body. The API includes them as extra rows in the internal notification email.
- **Spam protection**: ContactForm includes a honeypot field (`name="website"`, off-screen). If it is filled the API silently returns `{ ok: true }` without sending any email.
- **Post-submission redirect**: On successful submission ContactForm fires `fbq('track', 'Lead')` then redirects to `/thank-you` via `window.location.href` (hard redirect, not SPA navigation). A hard redirect is required because Meta Pixel caches the document URL at init time — SPA navigation via `router.push` would report the wrong URL to the pixel.
- **Airtable lead logging**: After emails are sent the API fires a non-blocking `fetch` to `https://api.airtable.com/v0/{AIRTABLE_BASE_ID}/Leads`. Table name must be exactly `Leads`. Columns: Name, Phone, Email, Language, UTM Source, UTM Medium, UTM Campaign, GCLID, Timestamp. A failure never blocks the form response. Requires `AIRTABLE_TOKEN` and `AIRTABLE_BASE_ID` env vars — leave unset to disable.

### Pricing

- **Early Bird**: 1,550€ in three installments — 20% (310€) on registration, 40% (620€) on start date, 40% (620€) up to 2 months after start.
- **Regular**: 1,990€ in three installments — 20% (398€) on registration, 40% (796€) on start date, 40% (796€) up to 2 months after start.

Installment strings live in `t.pricing.earlyBird.installment1/2/3` and `t.pricing.regular.installment1/2/3` in [lib/translations.ts](lib/translations.ts) (all three languages). The FAQ answer for pricing is also in translations and must be updated to match.

### Pricing Includes List Order

The `includesList` in all three languages follows this order:
1. Online courses
2. In-person masterclasses
3. Educational materials
4. Programme Attendance Certificate from Paris Education College School of Hospitality
5. Programme Attendance Certificate from IST College
6. Paris Education College Graduation Ceremony (Τελετή Αποφοίτησης στο Παρίσι)
7. Career Day participation
8. Job listings via Innjobs

### SEO

- **Canonical domain**: `https://www.innacademy.gr` (with `www`). All `canonical`, `hreflang`, `metadataBase`, and sitemap URLs use the `www` form.
- **Sitemap**: dynamically generated by [app/sitemap.ts](app/sitemap.ts) — served at `/sitemap.xml`. The 10 public routes are listed; `/apply` and `/thank-you` are intentionally excluded (both `noindex`). Submit `https://www.innacademy.gr/sitemap.xml` to Google Search Console.
- **robots.txt**: [public/robots.txt](public/robots.txt) — allows all crawlers. Disallows `/api/`. Explicitly allows social media crawlers: `facebookexternalhit`, `LinkedInBot`, `Twitterbot`, `WhatsApp`, `Slackbot`, `TelegramBot`. Also allows AI bots: GPTBot, ClaudeBot, PerplexityBot, etc.
- **Per-page metadata**: each route folder has its own `layout.tsx` (server component) that exports `metadata` with a unique Greek title, description, and full OG block (`url`, `title`, `description`, `type`, `images`). Sub-page layouts must explicitly include `images` in their `openGraph` — they do not inherit it from the root layout when they override `openGraph`.
- **OG image**: `public/innacademyfeatured.jpg` (1200×627) is the shared OG image for all pages — declared in the root layout and repeated explicitly in every sub-page layout.
- **Metadata language**: metadata is in Greek (default language). `hreflang` signals to Google that the same URL serves all three languages.

### Social Media

Facebook, Instagram, and LinkedIn icons are rendered inline (SVG, no external icon library) in two places:

- **Footer** — bottom of the Contact column, always visible.
- **Navbar** — inside the mobile drawer only (not shown on desktop).

Links: `https://www.facebook.com/innacademygreece`, `https://www.instagram.com/innacademygreece`, `https://www.linkedin.com/company/inn-academy-greece`.

### Footer Contact Details

- Email: `info@innacademy.gr`
- Landline: `210 2204187` (`tel:+302102204187`)
- Mobile: `697 34 34 146` (`tel:+306973434146`)
- Address: Πανεπιστημίου 63, 10564, Αθήνα
- External link: `innjobs.net`

### Key UI Notes

- **Hero overlay opacity**: Lighter than default — 0.70/0.55/0.25 layers.
- **Hero stat boxes**: Hidden on mobile (`hidden sm:grid`).
- **MasterclassVenues notes**: Two separate lines (`venueNote1`, `venueNote2`) in translations, rendered with orange `+` prefix.
- **CookieBanner**: Smaller on mobile (reduced padding, text-xs, smaller buttons); scales up on `sm:`.
- **PricingSection bank deposit**: Shows title and icon only — bank name, IBAN and beneficiary fields are intentionally not displayed.
- **CertificationsBar order**: Paris Education College → IST College → Graduation Ceremony. `paris` key is the full certificate text; `parisSub` is "School of Hospitality" across all languages.
- **Navbar desktop vs mobile links**: Desktop nav omits `/guests`, `/countries`, `/france` — they appear only in the mobile drawer.
- **Thank-you page**: `t.thankYou` holds translations in all three languages. No extra pixel calls needed — the hard redirect causes a full page reload so Analytics.tsx fires `PageView` with the correct `/thank-you` URL automatically.
