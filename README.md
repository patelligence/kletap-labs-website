# Kletap Labs — Website

The official website for **Kletap Labs**, an AI venture studio building
automation systems, workflow tools, and niche SaaS products for modern
businesses.

Built as a production-ready, mobile-first single-page landing experience with a
premium, founder-led aesthetic.

---

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript (strict)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + custom design tokens
- **UI Primitives:** [shadcn/ui](https://ui.shadcn.com/) (Button, Card, Input, Textarea, Select)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Fonts:** Inter (loaded via `next/font`)

---

## Features

- Dark, premium SaaS aesthetic with glassmorphism cards
- Electric blue accents, animated gradient orbs, subtle grid background
- Responsive navbar with mobile menu
- Smooth scroll between sections
- **Interactive "AI Workflow Builder" demo** — picks a business + pain point and generates a tailored automation workflow
- Founder-led storytelling
- Working contact form (console-logged + success state)
- 100% mobile-first responsive design

---

## Run Locally

### Prerequisites

- Node.js **18.17+** (or 20+)
- npm, pnpm, or yarn

### Steps

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Available scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Next.js dev server             |
| `npm run build`   | Production build                         |
| `npm run start`   | Run the production build locally         |
| `npm run lint`    | Run ESLint                               |
| `npm run typecheck` | Type-check with `tsc`                  |

---

## Deploy on Vercel

1. Go to <https://vercel.com/new>
2. Import this repository
3. Click **Deploy** — Vercel auto-detects Next.js
4. ~60 seconds later you'll have a live URL

Every push to `main` auto-deploys to production.

---

## Customization

| What                              | Where                                                                |
| --------------------------------- | -------------------------------------------------------------------- |
| Brand colors                      | `tailwind.config.ts` → `theme.extend.colors`                         |
| Navigation links                  | `components/navbar.tsx` → `navLinks`                                 |
| Hero copy + CTAs                  | `components/hero.tsx`                                                |
| Venture brands                    | `components/venture-studio.tsx` → `ventures`                         |
| Patelligence workflow chips       | `components/patelligence-feature.tsx` → `workflows`                  |
| Workflow Builder demo content     | `components/workflow-builder.tsx` → `workflowLibrary`                |
| Contact form submission target    | `components/contact.tsx` → `handleSubmit`                            |
| Footer columns                    | `components/footer.tsx` → `columns`                                  |

---

## License

© Kletap Labs. All rights reserved.
