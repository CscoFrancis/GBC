# Grace Fellowship — Phase 1 (Next.js, static/local-data site)

A faithful Next.js (App Router + TypeScript + Tailwind CSS) rebuild of the
original single-file HTML site, structured so that Phase 2 (migrating
content into Payload CMS) requires minimal code changes.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Placeholder images — read this first

This sandbox environment has no internet access to Unsplash, so the images
referenced by `data/*.json` (under `public/images/...`) are **generated
placeholders** — solid-color rectangles labeled with their filename and
dimensions, not real photos.

To swap in real photos:
1. Drop replacement images into `public/images/hero`, `public/images/gallery`,
   `public/images/team`, and `public/images/about`, using the **same
   filenames** referenced in the `data/*.json` files (e.g. `hero-1.jpg`,
   `home-3.jpg`, `elder-2.jpg`).
2. Or regenerate `scripts/gen_placeholders.py` filenames/sizes if you want a
   different set — it's a standalone script, not part of the app build.

The original HTML's images were hosted on Unsplash; if you want those exact
photos, search Unsplash for equivalent church/worship/community imagery, or
use your own church's photos (recommended for a real deployment).

## Contact form email sending

The contact form POSTs to `/api/contact`, which sends an email via
[Resend](https://resend.com).

1. Create a free Resend account and verify a sending domain (or use their
   test domain during development).
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=
   CONTACT_TO_EMAIL=      # where messages should be delivered
   CONTACT_FROM_EMAIL=    # a verified sender on your Resend domain
   ```
3. Restart `npm run dev` after adding env vars.

If you'd rather use a different provider (SMTP/Nodemailer, SendGrid, etc.),
only `lib/mailer.ts` needs to change — the API route and form don't know or
care which provider is behind `sendContactEmail()`.

## Project structure

```
app/               routes: / , /about , /gallery , /api/contact
components/
  layout/          Navbar, TopBar, Footer, ThemeProvider
  sections/        page-specific sections (home/about/gallery)
  ui/              reusable primitives (Button, Card, Section, etc.)
  shared/          Lightbox, ContactForm — used across pages
data/              local JSON content — the Phase 2 swap point
lib/
  data.ts          zod-validated loader functions (getHero(), getElders(), ...)
  mailer.ts        Resend email sending
hooks/             useCarousel, useLightbox
types/             shared content types
public/images/     local image assets (see placeholder note above)
```

## Phase 2 (Payload CMS) migration path

Every content-consuming component calls a `getX()` function from
`lib/data.ts` rather than importing JSON directly. To migrate a section to
Payload later:

```ts
// Before (Phase 1)
export function getHero(): HeroSlide[] {
  return z.array(heroSlideSchema).parse(heroJson);
}

// After (Phase 2)
export async function getHero(): Promise<HeroSlide[]> {
  const res = await payload.find({ collection: "hero-slides" });
  return z.array(heroSlideSchema).parse(res.docs);
}
```

Only `lib/data.ts` changes, plus adding `await` at each call site (and making
the calling Server Component `async`, which Next.js already supports
natively). No component markup or props need to change.

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # run the production build
npm run lint     # ESLint
npm run format   # Prettier, writes in place
```

## Notes

- No CMS, database, or auth in this phase — all content is local, validated
  JSON, per the Phase 1 scope.
- Dark/light theme is a manual toggle (persisted to `localStorage`), matching
  the original site's theme pill rather than following OS preference only.
- Git was intentionally not initialized in this project per your request —
  run `git init` yourself whenever you're ready to start tracking history.
