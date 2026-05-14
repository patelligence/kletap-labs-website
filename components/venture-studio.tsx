"use client";

import { motion } from "framer-motion";
import { Brain, Stethoscope, Home, Users, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const ventures = [
  {
    icon: Brain,
    name: "Patelligence AI",
    tag: "AI Operations",
    description: "AI automation systems for small businesses.",
    status: "Live",
  },
  {
    icon: Stethoscope,
    name: "VetFlow AI",
    tag: "Vertical SaaS",
    description: "AI scheduling, intake, and virtual assistant tools for veterinary clinics.",
    status: "Beta",
  },
  {
    icon: Home,
    name: "BRRRBoard",
    tag: "Real Estate",
    description: "Real estate investing and BRRRR deal analysis platform.",
    status: "Building",
  },
  {
    icon: Users,
    name: "FamKnows",
    tag: "Consumer",
    description: "AI-powered family and household management system.",
    status: "Concept",
  },
];

// Venture studio grid showcasing sub-brands under Kletap Labs.
export function VentureStudio() {
  return (
    <section id="ventures" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Venture Studio"
          title={
            <>
              One lab. <span className="gradient-text">Multiple intelligent products.</span>
            </>
          }
          subtitle="Kletap Labs incubates niche AI-native products that solve concrete problems in specific industries."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ventures.map((v, i) => (
            <motion.a
              key={v.name}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card glass-card-hover relative flex flex-col p-6"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-electric/15 ring-1 ring-primary/30">
                  <v.icon className="h-5 w-5 text-electric" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
              </div>

              <p className="font-mono text-[10px] uppercase tracking-wider text-electric">
                {v.tag}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                {v.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {v.description}
              </p>

              <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-glow" />
                {v.status}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
