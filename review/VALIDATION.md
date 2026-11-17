# Validation record — 17 November 2026

## Build and source

- `npm.cmd run build` passes with Next.js 16.2.7: compilation, TypeScript validation, and static page generation all complete.
- The Vercel production build also passes and creates the static homepage.
- `npx eslint app/page.tsx app/layout.tsx next.config.ts components/studio/StudioPortfolio.tsx components/studio/SystemsStudio.tsx` passes.
- Whole-repository `npm run lint` still reports one React lint error in the original inactive `components/sections/HeroSection.tsx:60` (`react-hooks/set-state-in-effect`). That legacy component is not rendered by the new homepage. This repository-wide lint item was not silently counted as a pass.
- `git diff --check` passes for the shipped changes.

## Responsive and interaction review

Browser review covered 320 × 740, 390 × 844, 820 × 1180, and 1440 × 900 viewports. The layouts were inspected with no document horizontal overflow. The portrait remains visually clear at phone, tablet, and desktop sizes.

The mobile menu, Escape close and focus return, section navigation, all six project panels, modal keyboard focus containment, and the three system-study selectors were exercised. Motion pause and emulated operating-system reduced motion both disable movement as intended. Copy-email feedback appears only after clipboard success. No contact message is sent by the site.

## Production deployment

- GitHub repository: `Dharanish99/Dharanish_R_P_Portfolio`, branch `main`.
- Vercel project: `dharanish-r-p-portfolio`.
- Production alias: `https://dharanish-r-p-portfolio.vercel.app`.
- The initial production deployment completed successfully on 17 November 2026. The deployed page returned HTTP 200; the portrait and both project covers loaded in the browser.

## Scope and limits

This is browser and production-build verification, not physical-phone or cross-browser certification. Smart Bin and Microplastic Detection remain concepts; the document-intelligence project describes exploration. No unverified performance results are claimed. The preserved GitHub and LinkedIn profile destinations were not independently verified. The site has no backend contact submission; it uses direct email links and clipboard copy.
