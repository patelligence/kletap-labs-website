"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Workflow, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Audit-grade rigor",
    body: "A background in technology audit means we build for reliability, security, and traceability — not just demos.",
  },
  {
    icon: Workflow,
    title: "Operations-first",
    body: "We start by mapping your real workflows, then design AI that fits — never the other way around.",
  },
  {
    icon: LineChart,
    title: "Measurable outcomes",
    body: "Every automation ships with metrics: time saved, leads captured, revenue recovered.",
  },
];

// About section — founder-led positioning, three pillars.
export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About Kletap Labs"
          title={
            <>
              From messy operations to{" "}
              <span className="gradient-text">intelligent systems.</span>
            </>
          }
          subtitle="Kletap Labs was created to help businesses turn messy operations into intelligent systems. With a background in technology audit, consulting, and process improvement, we focus on practical AI tools that create measurable business value."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-6"
            >
              <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-electric/15 ring-1 ring-primary/30">
                <p.icon className="h-5 w-5 text-electric" />
              </div>
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
