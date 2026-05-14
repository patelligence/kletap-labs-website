// Chatbot knowledge base for Patelligence AI. Edit this file to teach the
// bot about new topics without touching the routing code.
//
// Each intent has:
//   - keywords: lowercase substrings that trigger the intent (any-of match)
//   - response: the answer the bot returns
//   - suggestions: optional follow-up prompts shown as quick-reply chips
//
// The first intent whose keywords match wins.

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
      suggestions: ["Show me workflows", "How much does it cost?", "Book a demo"],
    },
    {
      id: "workflows",
      keywords: ["workflow", "feature", "automation", "what can you", "capabilities", "what does it do"],
      response:
        "Six core workflows ship with every deployment: (1) Missed-call text-back; (2) Lead follow-up; (3) Appointment reminders & rescheduling; (4) Smart intake forms; (5) Review request loops; (6) AI customer support. Everything is tailored to your tools and brand voice.",
      suggestions: ["Pricing", "How long to set up?", "Book a demo"],
    },
    {
      id: "pricing",
      keywords: ["price", "pricing", "cost", "how much", "fee", "rate", "plan"],
      response:
        "Three plans: Starter (1 workflow, ~$1.5k setup + $500/mo), Growth (3 workflows, ~$3k setup + $1.2k/mo — most popular), and Scale (custom). Every engagement starts with a free 20-minute scoping call. Pricing is illustrative — final quote depends on workflow scope and message volume.",
      suggestions: ["Book a demo", "What's included?", "Do you offer a trial?"],
    },
    {
      id: "trial",
      keywords: ["trial", "free", "try first", "test", "money back"],
      response:
        "We don't run a self-serve free trial because every deployment is tailored — but the scoping call is free, and we always start with the highest-ROI workflow so you see results in week one. You can cancel anytime after 90 days.",
      suggestions: ["Book a scoping call", "Pricing", "What workflows are available?"],
    },
    {
      id: "demo",
      keywords: ["demo", "see it", "show me", "example"],
      response:
        "Two options: (1) Try the live Workflow Builder above — pick your business type and a pain point and see exactly what we'd automate; (2) Book a 20-minute demo call to see Patelligence running on a real client account.",
      suggestions: ["Book a demo call", "Pricing", "Industries"],
    },
    {
      id: "industries",
      keywords: ["industry", "industries", "who do you", "verticals", "businesses", "fit for"],
      response:
        "We work with gyms, vet clinics, contractors, real estate agents, liquor stores, dental practices, med spas, and home services. If your team is buried in repetitive admin or customer follow-up, we can help.",
      suggestions: ["Show me a workflow", "Pricing", "Book a demo"],
    },
    {
      id: "integrations",
      keywords: ["integrate", "integration", "tool", "crm", "stack", "twilio", "calendar", "google", "hubspot"],
      response:
        "Patelligence connects to the tools you already use — phone systems (Twilio, RingCentral), CRMs (HubSpot, GoHighLevel, Salesforce, Pipedrive), calendars (Google, Outlook), POS systems, and most major SMB apps. If your tool has an API or Zapier connector, we can plug in.",
      suggestions: ["Pricing", "How long to set up?", "Book a demo"],
    },
    {
      id: "timeline",
      keywords: ["how long", "timeline", "when", "fast", "deploy", "launch", "setup time", "how quickly"],
      response:
        "Simple workflows (missed-call text-back, review requests) can be live in days. Full deployments typically take 2–4 weeks from the kickoff call. We start with the highest-impact workflow first so you see ROI immediately.",
      suggestions: ["Pricing", "Book a demo", "What workflows are available?"],
    },
    {
      id: "ai-safety",
      keywords: ["data", "privacy", "secure", "safe", "security", "compliance", "hipaa", "gdpr"],
      response:
        "We use least-privilege access, store as little customer data as possible, and run workflows on your own tooling where feasible. We're happy to sign NDAs and discuss compliance specifics (HIPAA-adjacent, SOC 2 alignment) on a call.",
      suggestions: ["Book a demo", "Pricing", "Integrations"],
    },
    {
      id: "kletap",
      keywords: ["kletap", "parent", "company", "venture studio", "who builds"],
      response:
        "Patelligence AI is built by Kletap Labs, our parent venture studio. Kletap Labs handles AI strategy and product development; Patelligence AI is our flagship product. There's a link in the navbar if you want to learn more.",
      suggestions: ["Visit Kletap Labs", "What workflows are available?", "Pricing"],
    },
    {
      id: "contact",
      keywords: ["contact", "reach", "talk", "call", "email", "book", "schedule"],
      response:
        "Two ways: (1) fill out the demo request form on this page — we reply within 24 hours, or (2) tap any 'Book a Demo' button to grab a 20-minute scoping call slot.",
      suggestions: ["Pricing", "What workflows?", "How long to set up?"],
    },
    {
      id: "support",
      keywords: ["support", "help", "ongoing", "after launch", "maintenance"],
      response:
        "Every plan includes ongoing optimization. Starter gets email support; Growth gets bi-weekly optimization reviews + priority support; Scale gets a dedicated success manager and SLA-backed uptime.",
      suggestions: ["Pricing", "Book a demo", "How long to set up?"],
    },
    {
      id: "thanks",
      keywords: ["thanks", "thank you", "appreciate", "great", "awesome", "cool", "perfect"],
      response: "You bet. Anything else?",
      suggestions: ["Pricing", "Book a demo", "What workflows?"],
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

// Find the best-matching intent for a user message.
export function matchIntent(message: string, brand: BrandConfig) {
  const m = message.toLowerCase().trim();
  for (const intent of brand.intents) {
    if (intent.keywords.some((k) => m.includes(k))) {
      return intent;
    }
  }
  return null;
}
