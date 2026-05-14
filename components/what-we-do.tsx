"use client";

import { motion } from "framer-motion";
import { Workflow, Boxes, GitBranch } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Custom automation pipelines that handle missed calls, follow-ups, reminders, and intake — running 24/7 in the background.",
  },
  {
    icon: Boxes,
    title: "SaaS Product Development",
    description:
      "We design and ship niche, AI-native SaaS products tailored to specific industries — from real estate to veterinary clinics.",
  },
  {
    icon: GitBranch,
    title: "Business Process Optimization",
    description:
      "We map your messy operations into intelligent, measurable systems — replacing manual work with AI-driven workflows.",
  },
];

// "What We Do" — three premium cards introducing the studio's services.
export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Three disciplines, <span className="gradient-text">one outcome.</span>
            </>
          }
          subtitle="We blend AI engineering, product design, and operations expertise to build systems that scale your business without scaling your team."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <div className="mb-6 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-electric/20 ring-1 ring-primary/30">
                  <s.icon className="h-5 w-5 text-electric" />
                </div>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription className="mt-3">{s.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
