"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Stethoscope,
  Wine,
  Hammer,
  Home as HomeIcon,
  Smile,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const industries = [
  { icon: Dumbbell, name: "Gyms & Studios" },
  { icon: Stethoscope, name: "Vet Clinics" },
  { icon: Wine, name: "Liquor Stores" },
  { icon: Hammer, name: "Contractors" },
  { icon: HomeIcon, name: "Real Estate" },
  { icon: Smile, name: "Dental Practices" },
  { icon: Sparkles, name: "Med Spas" },
  { icon: Wrench, name: "Home Services" },
];

// Compact 8-up grid of supported verticals.
export function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built for{" "}
              <span className="gradient-text">small business operators.</span>
            </>
          }
          subtitle="If your team is buried in repetitive customer-facing work, we can probably help."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card glass-card-hover flex flex-col items-center gap-3 p-6 text-center"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-electric/15 ring-1 ring-primary/30">
                <ind.icon className="h-5 w-5 text-electric" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
