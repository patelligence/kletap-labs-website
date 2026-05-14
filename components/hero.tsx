"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Activity, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero — first impression with animated grid, gradient headline, and
// a floating "AI dashboard" mockup on the right.
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Animated grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="chip mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-glow" />
            AI Venture Studio · Built for SMBs
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Kletap Labs builds{" "}
            <span className="gradient-text">AI-powered systems</span> for modern
            businesses.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We create automation workflows, intelligent tools, and SaaS products
            that help businesses operate faster, smarter, and leaner.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#ventures">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Our Systems
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Book a Strategy Call
              </Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-electric" />
              Founder-led
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-electric" />
              Production-grade automation
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-electric" />
              Measurable ROI
            </div>
          </div>
        </motion.div>

        {/* Right: AI dashboard mockup + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[480px] lg:h-[560px]"
        >
          <div className="absolute inset-0 bg-blue-glow opacity-60" />

          {/* Main dashboard panel */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card absolute right-0 top-8 w-[88%] p-5 lg:right-4 lg:top-12"
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400/70" />
                <div className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <div className="h-2 w-2 rounded-full bg-green-400/70" />
              </div>
              <span className="font-mono text-[10px] text-muted">automation.kletap</span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">Active Workflows</p>
                <p className="font-display text-2xl font-bold text-foreground">24</p>
              </div>
              <div className="rounded-lg bg-primary/10 px-2 py-1 text-[10px] font-semibold text-electric">
                +12% wk
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { label: "Missed-call text-back", value: 92 },
                { label: "Lead follow-up", value: 78 },
                { label: "Appointment reminders", value: 96 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-muted">{row.label}</span>
                    <span className="font-mono text-electric">{row.value}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${row.value}%` }}
                      transition={{ duration: 1.2, delay: 0.4 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-electric"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
              {[
                { icon: MessageSquare, label: "1.2k msgs" },
                { icon: Calendar, label: "340 booked" },
                { icon: Activity, label: "98% uptime" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-lg bg-white/[0.03] p-2 text-center">
                  <Icon className="mx-auto mb-1 h-3.5 w-3.5 text-electric" />
                  <p className="font-mono text-[9px] text-muted">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating notification card #1 */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="glass-card absolute left-0 top-0 w-[58%] p-4 lg:w-[48%]"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-electric">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">New lead replied</p>
                <p className="mt-0.5 text-[11px] text-muted">AI booked appointment · 2m ago</p>
              </div>
            </div>
          </motion.div>

          {/* Floating notification card #2 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass-card absolute bottom-4 left-4 w-[60%] p-4 lg:w-[52%]"
          >
            <p className="text-xs text-muted">This week</p>
            <p className="mt-1 font-display text-xl font-bold text-foreground">
              28.5 hrs saved
            </p>
            <div className="mt-2 flex h-8 items-end gap-1">
              {[40, 60, 35, 80, 55, 90, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.07 }}
                  className="w-2 rounded-sm bg-gradient-to-t from-primary/40 to-electric"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
