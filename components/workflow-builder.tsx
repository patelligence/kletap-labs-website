"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Brain,
  Target,
  TrendingUp,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { SectionHeading } from "@/components/section-heading";

type BusinessType =
  | "Gym"
  | "Veterinary Clinic"
  | "Liquor Store"
  | "Contractor"
  | "Real Estate Agent";

type PainPoint =
  | "Missed calls"
  | "Scheduling"
  | "Intake forms"
  | "Lead follow-up"
  | "Review requests"
  | "Customer FAQs";

type Workflow = {
  name: string;
  problem: string;
  trigger: string;
  aiAction: string;
  result: string;
  hoursSaved: string;
};

// Hand-authored "AI-generated" workflow library — keyed by [business][pain].
// Falls back to a sensible generic if a combo isn't explicitly defined.
const workflowLibrary: Record<string, Workflow> = {
  "Gym|Missed calls": {
    name: "Missed-Call Recovery for Gyms",
    problem: "New members can't reach the front desk during peak hours and walk away.",
    trigger: "A call to the gym goes unanswered for 30+ seconds.",
    aiAction:
      "AI assistant texts the caller within 10s, qualifies their interest (membership vs. drop-in), offers a free trial pass, and books a tour automatically.",
    result: "Captured leads who would have been lost. Trial passes booked on autopilot.",
    hoursSaved: "8–12 hrs/week",
  },
  "Gym|Lead follow-up": {
    name: "Trial-to-Member Conversion Engine",
    problem: "Free-trial members drop off without a structured follow-up sequence.",
    trigger: "A prospect completes a trial class or tour.",
    aiAction:
      "AI sends a personalized 5-touch sequence over 10 days — coaching tips, social proof, and a tailored membership offer based on their goals.",
    result: "Higher trial-to-member conversion, fully hands-off for staff.",
    hoursSaved: "6 hrs/week",
  },
  "Veterinary Clinic|Scheduling": {
    name: "AI Front-Desk Scheduling",
    problem: "Staff spends hours each day on the phone booking and rescheduling.",
    trigger: "Pet owner texts, calls after hours, or submits a booking form.",
    aiAction:
      "AI checks calendar availability, asks about the visit reason, books the slot, and sends a confirmation with pre-visit instructions.",
    result: "Front-desk freed up. Zero double-bookings.",
    hoursSaved: "10–15 hrs/week",
  },
  "Veterinary Clinic|Intake forms": {
    name: "Smart Pet Intake",
    problem: "Paper intake forms slow down check-in and lose critical history.",
    trigger: "Appointment is confirmed.",
    aiAction:
      "AI texts a personalized digital intake link, parses the responses, and pre-populates the patient record before the visit.",
    result: "Faster check-in, cleaner records, better visits.",
    hoursSaved: "7 hrs/week",
  },
  "Liquor Store|Customer FAQs": {
    name: "AI Storefront Concierge",
    problem: "Same questions over and over: hours, in-stock items, pairings, delivery.",
    trigger: "Customer messages on web chat, SMS, or Google Business.",
    aiAction:
      "AI answers using your live inventory and policies, suggests pairings, and routes complex orders to staff.",
    result: "Faster responses, higher average ticket from upsells.",
    hoursSaved: "9 hrs/week",
  },
  "Liquor Store|Review requests": {
    name: "Post-Purchase Review Loop",
    problem: "Loyal customers love you — but never leave a Google review.",
    trigger: "POS marks a transaction as complete.",
    aiAction:
      "AI sends a personalized thank-you SMS 2 hours later with a one-tap review link, then escalates negative sentiment privately.",
    result: "More 5-star Google reviews, protected reputation.",
    hoursSaved: "4 hrs/week",
  },
  "Contractor|Lead follow-up": {
    name: "Quote-to-Close Follow-Up",
    problem: "Quotes go cold because no one follows up after the estimate is sent.",
    trigger: "An estimate is sent and not signed within 48 hours.",
    aiAction:
      "AI sends contextual follow-ups (objection handling, financing options, social proof) and books a call when the lead engages.",
    result: "More signed contracts from the same leads.",
    hoursSaved: "6–9 hrs/week",
  },
  "Contractor|Missed calls": {
    name: "Job-Site Missed-Call Capture",
    problem: "You're on a roof — leads call, don't leave a voicemail, and ghost.",
    trigger: "An incoming call is missed.",
    aiAction:
      "AI texts the caller, captures job type, address, and timeline, then drops a structured lead into your CRM.",
    result: "Zero lost leads while you're working.",
    hoursSaved: "5 hrs/week",
  },
  "Real Estate Agent|Lead follow-up": {
    name: "Buyer & Seller Nurture Sequences",
    problem: "Cold leads sit in your CRM untouched for weeks.",
    trigger: "A new lead is added or marked 'cold.'",
    aiAction:
      "AI sends a multi-channel nurture with tailored listings, market updates, and timely check-ins until the lead re-engages.",
    result: "More appointments booked from your existing pipeline.",
    hoursSaved: "10 hrs/week",
  },
  "Real Estate Agent|Scheduling": {
    name: "Showing & Open-House Scheduler",
    problem: "Coordinating showings via text and email is a calendar nightmare.",
    trigger: "Prospect requests a showing or RSVPs to an open house.",
    aiAction:
      "AI checks your calendar + listing access, proposes 3 times, locks the appointment, and sends reminders.",
    result: "More showings, fewer no-shows.",
    hoursSaved: "8 hrs/week",
  },
};

// Generic fallback for any business+pain combo not authored above.
function genericWorkflow(business: BusinessType, pain: PainPoint): Workflow {
  return {
    name: `AI ${pain} Automation for ${business}s`,
    problem: `${business}s lose time and revenue managing "${pain.toLowerCase()}" manually.`,
    trigger: `An event tied to "${pain.toLowerCase()}" occurs in your business (e.g., a new lead, a missed message, a calendar event).`,
    aiAction:
      "Patelligence AI detects the event, runs a tailored playbook, sends the right message to the right person at the right time, and logs the outcome.",
    result: "Hands-off operations with measurable improvement in response time and conversion.",
    hoursSaved: "5–10 hrs/week",
  };
}

const businesses: BusinessType[] = [
  "Gym",
  "Veterinary Clinic",
  "Liquor Store",
  "Contractor",
  "Real Estate Agent",
];

const pains: PainPoint[] = [
  "Missed calls",
  "Scheduling",
  "Intake forms",
  "Lead follow-up",
  "Review requests",
  "Customer FAQs",
];

// Interactive AI Workflow Builder — the centerpiece interactive demo.
export function WorkflowBuilder() {
  const [business, setBusiness] = useState<BusinessType>("Veterinary Clinic");
  const [pain, setPain] = useState<PainPoint>("Scheduling");
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [generating, setGenerating] = useState(false);

  function generate() {
    setGenerating(true);
    // Small artificial delay to feel like AI is "thinking."
    setTimeout(() => {
      const key = `${business}|${pain}`;
      const result = workflowLibrary[key] ?? genericWorkflow(business, pain);
      setWorkflow(result);
      setGenerating(false);
    }, 700);
  }

  return (
    <section id="workflow-builder" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Interactive Demo"
          title={
            <>
              AI Workflow Builder — <span className="gradient-text">try it live.</span>
            </>
          }
          subtitle="Pick a business type and a pain point. We'll generate the exact automation Patelligence AI would build for you."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 lg:col-span-2 md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-electric">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-electric">
                  Configure
                </p>
                <h3 className="font-display text-lg font-bold">Workflow inputs</h3>
              </div>
            </div>

            <label className="mb-2 block text-xs font-medium text-muted">
              Business type
            </label>
            <Select
              value={business}
              onChange={(e) => setBusiness(e.target.value as BusinessType)}
            >
              {businesses.map((b) => (
                <option key={b} value={b} className="bg-background">
                  {b}
                </option>
              ))}
            </Select>

            <label className="mb-2 mt-5 block text-xs font-medium text-muted">
              Pain point
            </label>
            <Select
              value={pain}
              onChange={(e) => setPain(e.target.value as PainPoint)}
            >
              {pains.map((p) => (
                <option key={p} value={p} className="bg-background">
                  {p}
                </option>
              ))}
            </Select>

            <Button
              onClick={generate}
              size="lg"
              className="mt-8 w-full"
              disabled={generating}
            >
              {generating ? (
                <>
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  Generating…
                </>
              ) : (
                <>
                  Generate Workflow
                  <Zap className="h-4 w-4" />
                </>
              )}
            </Button>

            <p className="mt-4 text-xs leading-relaxed text-muted">
              Demo only. Real Patelligence deployments are tailored to your tools,
              data, and brand voice.
            </p>
          </motion.div>

          {/* Output */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!workflow && !generating && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card flex h-full min-h-[420px] flex-col items-center justify-center p-10 text-center"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-electric/10 ring-1 ring-primary/30">
                    <Brain className="h-6 w-6 text-electric" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">
                    Your AI workflow appears here
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Configure a business and pain point on the left, then click{" "}
                    <span className="text-foreground">Generate Workflow</span>.
                  </p>
                </motion.div>
              )}

              {generating && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card flex h-full min-h-[420px] flex-col items-center justify-center p-10 text-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-electric"
                  >
                    <Sparkles className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="mt-5 font-display text-xl font-bold">
                    Designing your workflow…
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Mapping triggers, AI actions, and business outcomes.
                  </p>
                </motion.div>
              )}

              {workflow && !generating && (
                <motion.div
                  key={workflow.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <span className="chip mb-3">
                        <Sparkles className="h-3 w-3 text-electric" />
                        Generated by Patelligence AI
                      </span>
                      <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                        {workflow.name}
                      </h3>
                    </div>
                    <div className="hidden shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-electric/10 px-3 py-2 ring-1 ring-primary/30 md:block">
                      <p className="font-mono text-[10px] uppercase text-muted">Saves</p>
                      <p className="font-display text-base font-bold text-electric">
                        {workflow.hoursSaved}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Row icon={AlertCircle} label="Problem Solved" value={workflow.problem} />
                    <Row icon={Zap} label="Trigger" value={workflow.trigger} />
                    <Row icon={Brain} label="AI Action" value={workflow.aiAction} />
                    <Row icon={Target} label="Business Result" value={workflow.result} />
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-electric/5 p-4 md:hidden">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Clock className="h-4 w-4 text-electric" />
                      Estimated time saved
                    </div>
                    <span className="font-display text-base font-bold text-electric">
                      {workflow.hoursSaved}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-electric/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <TrendingUp className="h-4 w-4 text-electric" />
                      Ready to deploy this for your business?
                    </div>
                    <a href="#contact">
                      <Button size="sm">Get this workflow</Button>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-4">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-electric/15">
        <Icon className="h-4 w-4 text-electric" />
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-electric">
          {label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-foreground">{value}</p>
      </div>
    </div>
  );
}
