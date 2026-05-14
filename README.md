# Patelligence AI — Website

Marketing website for **Patelligence AI**, an AI operations platform that
automates customer follow-up, scheduling, intake, reviews, and admin work
for small businesses.

Built by **Kletap Labs**.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn/ui style (Button, Card, Input, Textarea, Select)
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** Inter via `next/font`

## Sections

1. Hero with live SMS-conversation mockup
2. Six core workflows
3. How It Works (4-step timeline)
4. Industries we serve
5. **Interactive AI Workflow Builder** demo
6. Pricing (3 tiers)
7. Demo request form
8. Footer with link back to Kletap Labs
9. **Floating AI chatbot** (smart pattern-matched)

---

## Run Locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Push to a new GitHub repo

1. On GitHub: **New repository** → name it `patelligence-ai-website` → leave all checkboxes unchecked → **Create**
2. In this folder:

```bash
git init
git add .
git commit -m "Initial Patelligence AI site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/patelligence-ai-website.git
git push -u origin main
```

## Deploy on Vercel

1. Go to <https://vercel.com/new>
2. Import the `patelligence-ai-website` repo
3. Click **Deploy** — done in ~60 seconds

## Custom domain

1. In Vercel: **Settings → Domains** → add `patelligence.ai` (or whatever domain you bought)
2. Update DNS at your registrar to point to Vercel
3. Free SSL is auto-issued

## Link back to Kletap Labs

The navbar and footer link to `https://kletaplabs.com` by default.
To override, set this environment variable in Vercel:

```
NEXT_PUBLIC_KLETAP_URL=https://your-kletap-url.com
```

## Customize

| Element                | File                                          |
| ---------------------- | --------------------------------------------- |
| Workflow tiles         | `components/features.tsx`                     |
| How it works steps     | `components/how-it-works.tsx`                 |
| Industries grid        | `components/industries.tsx`                   |
| Demo workflows         | `components/workflow-builder.tsx`             |
| Pricing tiers          | `components/pricing.tsx`                      |
| Chatbot knowledge      | `lib/chat-knowledge.ts`                       |
| Colors                 | `tailwind.config.ts` and `app/globals.css`    |

To wire up real form submissions, replace the `console.log` in
`components/contact.tsx` with a fetch call to your API route, Resend,
Formspree, or a Vercel serverless function.

## Upgrade chatbot to a real LLM (optional)

Edit `app/api/chat/route.ts` and replace the `matchIntent` call with a
fetch to OpenAI or Anthropic. The front-end contract stays the same.

---

© Patelligence AI · A product of Kletap Labs
