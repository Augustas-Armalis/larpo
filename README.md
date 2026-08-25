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

Every push to `main` builds and deploys the site through GitHub Pages at `https://larpo.studio/`.

The primary CTA uses Augustas's existing intro-booking page. The secondary CTA opens the `@larpostudiobot` Telegram bot. Every message link passes a `?start=web_<placement>` payload so the bot can attribute the lead to its first touch; the recognised placements are listed in the `Placement` union in `src/App.tsx`. Because the set is complete, an unrecognised payload means a stale cached page or a hand-edited link, not an unlabelled anchor.
