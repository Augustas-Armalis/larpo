# Larpo Studio

A production-ready website for Larpo Studio, built with React, TypeScript, Framer Motion, Lenis, and Geist.

## Run locally

```bash
pnpm install
pnpm run dev
```

## Verify

```bash
pnpm run typecheck
pnpm run build
```

## Publish

Every push to `main` builds and deploys the site through GitHub Pages. The Vite base path switches to `/larpo/` only inside GitHub Actions, so local development stays at `/`.

The primary CTA uses Augustas's existing intro-booking page. The secondary CTA opens the verified `@augustasdesign` Telegram contact.
