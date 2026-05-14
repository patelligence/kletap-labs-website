"use client";

import { motion } from "framer-motion";
import { Search, Settings2, Rocket, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Scope",
    body: "Free 20-minute call. We map your highest-leverage workflows and quote precisely.",
  },
  {
    n: "02",
    icon: Settings2,
    title: "Build",
    body: "We connect to your tools (CRM, phone, calendar) and configure the AI playbooks for your brand.",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Launch",
    body: "Workflows go live in 2–4 weeks. Most clients see ROI in week one.",
  },
  {
    n: "04",
    icon: BarChart3,
    title: "Measure",
    body: "Monthly reports show time saved, leads captured, and revenue recovered.",
  },
];

// Four-step timeline showing the engagement model.
export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              Four steps from{" "}
              <span className="gradient-text">scoping to ROI.</span>
            </>
          }
          subtitle="No long sales cycles. We design, build, and launch your automation stack inside a month."
        />

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover relative p-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-electric">
                Step {s.n}
              </span>
              <div className="mt-3 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-electric/15 ring-1 ring-primary/30">
                <s.icon className="h-5 w-5 text-electric" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
