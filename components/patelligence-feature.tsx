"use client";

import { motion } from "framer-motion";
import {
  PhoneOff,
  UserPlus,
  Bell,
  ClipboardList,
  Star,
  MessageCircleQuestion,
  Brain,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// External Patelligence AI site. Override with env var when deploying:
//   NEXT_PUBLIC_PATELLIGENCE_URL=https://patelligence.ai
const PATELLIGENCE_URL =
  process.env.NEXT_PUBLIC_PATELLIGENCE_URL ?? "https://patelligence.ai";

const workflows = [
  { icon: PhoneOff, label: "Missed-call text-back" },
  { icon: UserPlus, label: "Lead follow-up" },
  { icon: Bell, label: "Appointment reminders" },
  { icon: ClipboardList, label: "Intake forms" },
  { icon: Star, label: "Review requests" },
  { icon: MessageCircleQuestion, label: "AI customer support assistant" },
];

// Featured product spotlight for Patelligence AI — the flagship under Kletap Labs.
export function PatelligenceFeature() {
  return (
    <section id="patelligence" className="section">
      <div className="container">
        <div className="glass-card overflow-hidden p-8 md:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="chip mb-5">
                <Brain className="h-3 w-3 text-electric" />
                Featured Product
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Patelligence AI — <span className="gradient-text">your business on autopilot.</span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                Patelligence AI helps small businesses automate customer follow-up,
                scheduling, intake, reviews, and repetitive admin workflows — so your
                team can focus on growth, not busywork.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PATELLIGENCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    Visit Patelligence AI
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#workflow-builder">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Try the Demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {workflows.map((w, i) => (
                <motion.div
                  key={w.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-white/[0.02] p-4 transition-all hover:border-primary/30 hover:bg-white/[0.04]"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-electric/15">
                    <w.icon className="h-4 w-4 text-electric" />
                  </div>
                  <span className="pt-1.5 text-sm font-medium text-foreground">
                    {w.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
