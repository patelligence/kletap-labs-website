"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    tagline: "One automation, fully managed.",
    price: "from $1.5k",
    cadence: "setup + $500/mo",
    features: [
      "1 core workflow live",
      "SMS / email channels",
      "CRM + calendar integration",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "Three workflows. Most popular.",
    price: "from $3k",
    cadence: "setup + $1.2k/mo",
    features: [
      "3 core workflows live",
      "SMS, email, web chat",
      "Custom brand voice tuning",
      "Bi-weekly optimization reviews",
      "Priority support",
      "Quarterly strategy session",
    ],
    cta: "Most teams pick this",
    featured: true,
  },
  {
    name: "Scale",
    tagline: "Unlimited workflows + dedicated support.",
    price: "custom",
    cadence: "annual contract",
    features: [
      "All 6 core workflows + custom",
      "Multi-location / multi-team",
      "Dedicated success manager",
      "Quarterly executive reviews",
      "SLA-backed uptime",
      "White-glove onboarding",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

// Three pricing tiers — Growth is highlighted as the recommended option.
export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple pricing.{" "}
              <span className="gradient-text">ROI in week one.</span>
            </>
          }
          subtitle="Every plan includes setup, integration, and ongoing optimization. No long contracts. Cancel anytime after 90 days."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "glass-card glass-card-hover relative flex flex-col p-6 md:p-8",
                t.featured && "border-primary/40 ring-1 ring-primary/40"
              )}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-electric px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                  Most Popular
                </span>
              )}

              <p className="font-mono text-[10px] uppercase tracking-wider text-electric">
                {t.name}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold">{t.tagline}</h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-foreground">
                  {t.price}
                </span>
              </div>
              <p className="text-xs text-muted">{t.cadence}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-8">
                <Button
                  className="w-full"
                  variant={t.featured ? "default" : "secondary"}
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Pricing is illustrative — final quote depends on workflow scope and message volume.
          Every engagement starts with a free 20-minute scoping call.
        </p>
      </div>
    </section>
  );
}
