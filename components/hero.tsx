"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneIncoming,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero — product-led headline with a live conversation mockup on the right.
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="grid-bg pointer-events-none absolute inset-0" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="chip mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-glow" />
            AI Operations · Built for SMBs
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Your business{" "}
            <span className="gradient-text">on autopilot.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Patelligence AI automates customer follow-up, scheduling, intake,
            reviews, and admin work — so your team can focus on growth, not
            busywork.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#workflow-builder">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Try the Live Demo
              </Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-electric" />
              Live in 2–4 weeks
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-electric" />
              Works with your tools
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-electric" />
              ROI in week one
            </div>
          </div>
        </motion.div>

        {/* Right: conversation mockup with 3 floating UI cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[500px] lg:h-[580px]"
        >
          <div className="absolute inset-0 bg-blue-glow opacity-60" />

          {/* Main "phone-style" SMS conversation */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card absolute right-0 top-6 w-[80%] p-5 lg:right-4"
          >
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-electric">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Patelligence AI</p>
                <p className="text-[10px] text-muted">Auto-replying for Westside Vet</p>
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              <Bubble side="left" delay={0.3}>
                Hi! I missed your call. What can I help with?
              </Bubble>
              <Bubble side="right" delay={0.7}>
                Need to book my dog for shots
              </Bubble>
              <Bubble side="left" delay={1.1}>
                Got it. We have Tue 10am or Thu 2pm with Dr. Lee — which works?
              </Bubble>
              <Bubble side="right" delay={1.5}>
                Tuesday 10
              </Bubble>
              <Bubble side="left" delay={1.9}>
                Booked. Confirmation sent to your email.
              </Bubble>
            </div>
          </motion.div>

          {/* Floating: missed call card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="glass-card absolute left-0 top-0 w-[55%] p-4 lg:w-[44%]"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-electric">
                <PhoneIncoming className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Missed call</p>
                <p className="text-[11px] text-muted">AI replied in 8s</p>
              </div>
            </div>
          </motion.div>

          {/* Floating: appointment booked */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass-card absolute bottom-2 left-2 w-[58%] p-4 lg:w-[50%]"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-electric to-primary">
                <CalendarCheck className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Booked: Tue 10:00am</p>
                <p className="text-[11px] text-muted">Dog shots · Dr. Lee</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Bubble({
  side,
  children,
  delay,
}: {
  side: "left" | "right";
  children: React.ReactNode;
  delay: number;
}) {
  const isLeft = side === "left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
          isLeft
            ? "rounded-bl-sm border border-border bg-white/[0.04] text-foreground"
            : "rounded-br-sm bg-gradient-to-br from-primary to-electric text-white"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}
