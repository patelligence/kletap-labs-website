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

## Folder Structure

```
kletap-labs-website/
├── app/
│   ├── globals.css           # Tailwind layers + global tokens
│   ├── layout.tsx            # Root layout, fonts, metadata
│   └── page.tsx              # Home page composition
├── components/
│   ├── ui/                   # shadcn-style primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── textarea.tsx
│   ├── animated-background.tsx
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── section-heading.tsx
│   ├── what-we-do.tsx
│   ├── venture-studio.tsx
│   ├── patelligence-feature.tsx
│   ├── workflow-builder.tsx  # Interactive AI demo
│   ├── vetflow-preview.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── footer.tsx
├── lib/
│   └── utils.ts              # cn() class-merge helper
├── public/                   # Static assets (favicon, og images)
├── .eslintrc.json
├── .gitignore
├── components.json           # shadcn config
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Run Locally

### Prerequisites

- Node.js **18.17+** (or 20+)
- npm, pnpm, or yarn

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# → http://localhost:3000
```

### Available scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Next.js dev server             |
| `npm run build`   | Production build                         |
| `npm run start`   | Run the production build locally         |
| `npm run lint`    | Run ESLint                               |
| `npm run typecheck` | Type-check the project with `tsc`      |

---

## Push to GitHub

### 1. Create a new GitHub repository

1. Go to <https://github.com/new>
2. Repository name: `kletap-labs-website`
3. Visibility: **Public** or **Private** — your choice
4. **Do NOT** initialize with a README, .gitignore, or license (this repo already has them)
5. Click **Create repository**

### 2. Initialize git locally and push

From the project root, run:

```bash
git init
git add .
git commit -m "Initial Kletap Labs build"
git branch -M main
git remote add origin https://github.com/<your-username>/kletap-labs-website.git
git push -u origin main
```

> Replace `<your-username>` with your GitHub handle.

---

## Deploy on Vercel

Vercel is the recommended host for Next.js — zero config.

### One-click flow

1. Go to <https://vercel.com/new>
2. Click **Import Project** and select your `kletap-labs-website` repository
3. Vercel auto-detects Next.js — leave defaults as-is
4. Click **Deploy**
5. In ~60 seconds you'll get a live URL like `kletap-labs-website.vercel.app`

### CLI flow (alternative)

```bash
npm i -g vercel
vercel           # follow prompts → preview deploy
vercel --prod    # production deploy
```

Every `git push` to `main` will auto-deploy to production. Every push to a
feature branch creates a preview URL.

---

## Connect a Custom Domain

1. In Vercel, open the project → **Settings** → **Domains**
2. Click **Add** and enter your domain (e.g. `kletaplabs.com`)
3. Choose one of the suggested DNS configurations:
   - **A record:** point `@` to `76.76.21.21`
   - **CNAME:** point `www` to `cname.vercel-dns.com`
4. Update DNS records at your registrar (Namecheap, GoDaddy, Cloudflare, etc.)
5. Vercel auto-issues a free SSL certificate within minutes

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
| Contact form submission target    | `components/contact.tsx` → `handleSubmit` (currently `console.log`)  |
| Footer columns                    | `components/footer.tsx` → `columns`                                  |

To wire up real form submissions, replace the `console.log` in
`components/contact.tsx` with a fetch call to your API route, Resend, Formspree,
or a Vercel serverless function.

---

## License

© Kletap Labs. All rights reserved.
