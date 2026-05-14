"use client";

import { motion } from "framer-motion";
import {
  PhoneOff,
  UserPlus,
  Bell,
  ClipboardList,
  Star,
  MessageCircleQuestion,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    icon: PhoneOff,
    title: "Missed-call text-back",
    description:
      "Every missed call gets an instant AI text reply that qualifies the lead and books the next step.",
  },
  {
    icon: UserPlus,
    title: "Lead follow-up",
    description:
      "Multi-touch nurture sequences that re-engage cold leads in your CRM until they convert or opt out.",
  },
  {
    icon: Bell,
    title: "Appointment reminders",
    description:
      "Automated SMS/email reminders + frictionless self-serve rescheduling. Slash no-shows without lifting a finger.",
  },
  {
    icon: ClipboardList,
    title: "Smart intake forms",
    description:
      "AI-personalized intake links that auto-populate your records before the appointment starts.",
  },
  {
    icon: Star,
    title: "Review request loops",
    description:
      "Post-purchase review asks at the right moment, with negative-sentiment routed privately to you.",
  },
  {
    icon: MessageCircleQuestion,
    title: "AI customer support",
    description:
      "An always-on assistant that answers FAQs across SMS, web chat, and Google Business — and escalates only when needed.",
  },
];

// Six core workflows that ship with every Patelligence deployment.
export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Workflows"
          title={
            <>
              Six AI workflows. <span className="gradient-text">One unified system.</span>
            </>
          }
          subtitle="Every Patelligence deployment ships with these core automations, tailored to your tools and brand voice."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Card className="h-full">
                <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-electric/15 ring-1 ring-primary/30">
                  <f.icon className="h-5 w-5 text-electric" />
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription className="mt-3">{f.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
