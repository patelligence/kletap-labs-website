// Chatbot knowledge base — used by the smart pattern-matching responder
// in app/api/chat/route.ts. Edit this file to teach the bot about new topics
// without touching the routing code.
//
// Each intent has:
//   - keywords: lowercase substrings that trigger the intent (any-of match)
//   - response: the answer the bot will return
//   - suggestions: optional follow-up prompts shown as quick-reply chips
//
// The first intent whose keywords match wins. The catch-all fallback at the
// bottom handles unmatched queries.

export interface Intent {
  id: string;
  keywords: string[];
  response: string;
  suggestions?: string[];
}

export interface BrandConfig {
  name: string;
  greeting: string;
  fallbackContact: string;
  intents: Intent[];
}

// ─── Kletap Labs brand voice ──────────────────────────────────────────────
export const kletapBrand: BrandConfig = {
  name: "Kletap Labs",
  greeting:
    "Hi! I'm the Kletap Labs assistant. I can answer questions about our services, our flagship product Patelligence AI, pricing, and how to get started. What would you like to know?",
  fallbackContact:
    "I don't have a great answer for that yet. The fastest path is to use the contact form below — we typically reply within 24 hours.",
  intents: [
    {
      id: "what-is-kletap",
      keywords: ["what is kletap", "who are you", "what do you do", "about kletap", "tell me about"],
      response:
        "Kletap Labs is an AI venture studio. We build automation systems, workflow tools, and SaaS products for small and mid-sized businesses. Our flagship product is Patelligence AI — an AI operations platform that automates customer follow-up, scheduling, intake, reviews, and admin work.",
      suggestions: ["What does Patelligence AI do?", "How much does it cost?", "Book a strategy call"],
    },
    {
      id: "patelligence",
      keywords: ["patelligence", "what does patelligence", "main product", "flagship"],
      response:
        "Patelligence AI is our flagship product. It automates the repetitive work that eats up small-business owners' time: missed-call text-back, lead follow-up, appointment reminders, intake forms, review requests, and AI customer support. You can visit the dedicated Patelligence AI site for a deep dive.",
      suggestions: ["Visit Patelligence AI site", "How much does it cost?", "What industries do you serve?"],
    },
    {
      id: "services",
      keywords: ["service", "what we do", "what we offer", "offerings"],
      response:
        "We offer three things: (1) AI Workflow Automation — custom pipelines that handle your repetitive work; (2) SaaS Product Development — niche AI-native products tailored to specific industries; (3) Business Process Optimization — mapping messy operations into intelligent, measurable systems.",
      suggestions: ["Tell me about Patelligence", "How do you work with clients?", "Pricing"],
    },
    {
      id: "pricing",
      keywords: ["price", "pricing", "cost", "how much", "fee", "rate", "budget"],
      response:
        "Pricing depends on the scope of automation you need. Most engagements start in the low four figures for setup, plus a monthly retainer based on workflow complexity and call/message volume. The best next step is a free 20-minute strategy call where we scope your situation and quote precisely.",
      suggestions: ["Book a strategy call", "What's included?", "Do you offer a trial?"],
    },
    {
      id: "industries",
      keywords: ["industries", "industry", "who do you work with", "verticals", "what businesses"],
      response:
        "We focus on small and mid-sized businesses where repetitive customer-facing work is killing margin. Common verticals: gyms, veterinary clinics, contractors, real estate agents, liquor stores, dental practices, med spas, and home services. If you have repetitive admin or front-desk work, we can probably help.",
      suggestions: ["Try the workflow demo", "Pricing", "Book a call"],
    },
    {
      id: "demo",
      keywords: ["demo", "try", "see it", "show me", "example", "how does it work"],
      response:
        "Scroll up to the AI Workflow Builder section — pick your business type and a pain point, then click Generate Workflow. You'll see exactly what an automation for your situation would look like.",
      suggestions: ["What does Patelligence do?", "Pricing", "Book a strategy call"],
    },
    {
      id: "contact",
      keywords: ["contact", "reach", "talk to", "call", "email", "book", "schedule", "strategy"],
      response:
        "Two easy ways: (1) fill out the contact form on this page — we reply within 24 hours, or (2) tap any 'Book a Strategy Call' button to schedule a free 20-minute scoping call.",
      suggestions: ["Pricing", "What does Patelligence do?", "What industries?"],
    },
    {
      id: "timeline",
      keywords: ["how long", "timeline", "when", "fast", "quick", "deploy", "launch"],
      response:
        "Most workflows go live in 2–4 weeks after our scoping call. Simpler workflows (like missed-call text-back) can be live in days. We start with the highest-impact automation first so you see ROI immediately.",
      suggestions: ["Pricing", "Book a strategy call", "What does Patelligence do?"],
    },
    {
      id: "founder",
      keywords: ["founder", "team", "who built", "background", "experience"],
      response:
        "Kletap Labs is founder-led. The background is in technology audit, consulting, and process improvement — which is why we focus on practical AI tools that produce measurable business value, not flashy demos.",
      suggestions: ["What services do you offer?", "Pricing", "Book a strategy call"],
    },
    {
      id: "ai-safety",
      keywords: ["data", "privacy", "secure", "safe", "security", "gdpr", "compliance"],
      response:
        "We treat client data seriously. Workflows run on your own tooling where possible (your CRM, your phone system) and we follow least-privilege access. We can sign NDAs and discuss specific compliance needs (HIPAA-adjacent, SOC 2 alignment, etc.) on a strategy call.",
      suggestions: ["Book a strategy call", "Pricing", "What does Patelligence do?"],
    },
    {
      id: "thanks",
      keywords: ["thanks", "thank you", "appreciate", "great", "awesome", "cool"],
      response: "You're welcome! Anything else I can help with?",
      suggestions: ["Pricing", "Book a strategy call", "Visit Patelligence AI"],
    },
    {
      id: "greeting",
      keywords: ["hi", "hello", "hey", "yo", "good morning", "good afternoon"],
      response:
        "Hey! I can answer questions about Kletap Labs, Patelligence AI, pricing, or how we work. What would you like to know?",
      suggestions: ["What does Patelligence do?", "Pricing", "Book a strategy call"],
    },
  ],
};

// ─── Patelligence AI brand voice ──────────────────────────────────────────
// The Patelligence site uses this configuration. Tone is more product-led.
export const patelligenceBrand: BrandConfig = {
  name: "Patelligence AI",
  greeting:
    "Hi! I'm the Patelligence AI assistant. Ask me anything about how we automate customer follow-up, scheduling, intake, reviews, or admin work for your business.",
  fallbackContact:
    "Great question — I'd rather get you a real answer than guess. Use the contact form below and we'll reply within 24 hours.",
  intents: [
    {
      id: "what-is",
      keywords: ["what is patelligence", "what do you do", "who are you", "tell me about", "explain"],
      response:
        "Patelligence AI is an AI operations platform for small businesses. We automate the repetitive work that eats up your time — missed-call text-back, lead follow-up, appointment reminders, intake forms, review requests, and AI customer support — so your team can focus on growth.",
      suggestions: ["Show me workflows", "How much does it cost?", "Get started"],
    },
    {
      id: "workflows",
      keywords: ["workflow", "feature", "automation", "what can you", "capabilities"],
      response:
        "The most popular workflows: (1) Missed-call text-back — caller gets a reply in seconds; (2) Lead follow-up — multi-touch nurture; (3) Appointment reminders & rescheduling; (4) Smart intake forms; (5) Review request loops; (6) AI customer support assistant. We tailor everything to your tools and brand voice.",
      suggestions: ["Pricing", "How long to set up?", "Book a demo"],
    },
    {
      id: "pricing",
      keywords: ["price", "pricing", "cost", "how much", "fee", "rate", "plan"],
      response:
        "Pricing scales with your automation complexity and message volume. Most clients start in the low four figures for setup, plus a monthly retainer. Book a free 20-minute scoping call and we'll quote precisely for your situation.",
      suggestions: ["Book a call", "What's included?", "Do you offer a trial?"],
    },
    {
      id: "trial",
      keywords: ["trial", "free", "try first", "demo", "test"],
      response:
        "We don't run a self-serve free trial because every deployment is tailored — but the strategy call is free, and we always start with the highest-ROI workflow so you see results in week one.",
      suggestions: ["Book a strategy call", "Pricing", "What workflows are available?"],
    },
    {
      id: "industries",
      keywords: ["industry", "industries", "who do you", "verticals", "businesses"],
      response:
        "We work with gyms, vet clinics, contractors, real estate agents, liquor stores, dental practices, med spas, and home services. If your team is buried in repetitive admin or customer follow-up, we can help.",
      suggestions: ["Show me a workflow", "Pricing", "Book a call"],
    },
    {
      id: "integrations",
      keywords: ["integrate", "integration", "tool", "crm", "stack", "twilio", "calendar", "google"],
      response:
        "Patelligence connects to the tools you already use — phone systems (Twilio, RingCentral), CRMs (HubSpot, GoHighLevel, Salesforce, Pipedrive), calendars (Google, Outlook), POS, and most major SMBs apps. If your tool has an API or Zapier connector, we can plug in.",
      suggestions: ["Pricing", "How long to set up?", "Book a call"],
    },
    {
      id: "timeline",
      keywords: ["how long", "timeline", "when", "fast", "deploy", "launch", "setup time"],
      response:
        "Simple workflows (missed-call text-back, review requests) can be live in days. Full deployments typically take 2–4 weeks from the kickoff call.",
      suggestions: ["Pricing", "Book a call", "What workflows are available?"],
    },
    {
      id: "ai-safety",
      keywords: ["data", "privacy", "secure", "safe", "security", "compliance", "hipaa"],
      response:
        "We use least-privilege access, store as little as possible, and run workflows on your own tooling where feasible. We're happy to sign NDAs and discuss compliance specifics (HIPAA-adjacent, SOC 2 alignment) on a call.",
      suggestions: ["Book a call", "Pricing", "Integrations"],
    },
    {
      id: "kletap",
      keywords: ["kletap", "parent", "company", "venture studio"],
      response:
        "Patelligence AI is built by Kletap Labs, our parent venture studio. Kletap Labs handles AI strategy and product development; Patelligence AI is our flagship product.",
      suggestions: ["Visit Kletap Labs", "What workflows are available?", "Pricing"],
    },
    {
      id: "contact",
      keywords: ["contact", "reach", "talk", "call", "email", "book", "schedule", "demo"],
      response:
        "Two ways: (1) fill out the contact form on this page — we reply within 24 hours, or (2) tap any 'Book a Demo' button to grab a 20-minute strategy call slot.",
      suggestions: ["Pricing", "What workflows?", "How long to set up?"],
    },
    {
      id: "thanks",
      keywords: ["thanks", "thank you", "appreciate", "great", "awesome", "cool"],
      response: "You bet. Anything else?",
      suggestions: ["Pricing", "Book a call", "What workflows?"],
    },
    {
      id: "greeting",
      keywords: ["hi", "hello", "hey", "yo", "good morning", "good afternoon"],
      response:
        "Hey! I can answer questions about Patelligence AI, our workflows, pricing, integrations, or setup. What's on your mind?",
      suggestions: ["What does Patelligence do?", "Pricing", "How long to set up?"],
    },
  ],
};

// Find the best-matching intent for a user message. Returns the catch-all
// fallback if nothing matches.
export function matchIntent(message: string, brand: BrandConfig) {
  const m = message.toLowerCase().trim();
  for (const intent of brand.intents) {
    if (intent.keywords.some((k) => m.includes(k))) {
      return intent;
    }
  }
  return null;
}
