"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  CalendarCheck,
  ClipboardList,
  PhoneOff,
  MessageCircleQuestion,
  FileText,
  BellRing,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: CalendarCheck, label: "Appointment scheduling" },
  { icon: ClipboardList, label: "Pet owner intake forms" },
  { icon: PhoneOff, label: "Missed-call recovery" },
  { icon: MessageCircleQuestion, label: "FAQ automation" },
  { icon: FileText, label: "Visit summary generation" },
  { icon: BellRing, label: "Reminder workflows" },
];

// VetFlow AI product preview — sister product under Kletap Labs.
export function VetFlowPreview() {
  return (
    <section id="vetflow" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-card relative overflow-hidden p-8 md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-electric shadow-lg shadow-primary/30">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>

              <span className="chip mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                VetFlow AI · Beta
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                AI front desk for{" "}
                <span className="gradient-text">veterinary clinics.</span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                Built specifically for vets. VetFlow handles scheduling, intake,
                missed calls, and post-visit follow-ups — freeing your team to focus
                on patients.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request Beta Access
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#" className="text-center">
                  <Button size="lg" variant="ghost" className="w-full sm:w-auto">
                    Learn more →
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] p-4 transition-all hover:border-primary/30 hover:bg-white/[0.04]"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/30 to-electric/15">
                    <f.icon className="h-4 w-4 text-electric" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
