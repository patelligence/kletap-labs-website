"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";

// Demo-request form. Submission is console-logged; swap with a real endpoint
// (Resend, Formspree, or an API route) when wiring up production.
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("[Patelligence AI · Demo request]", form);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Book a Demo"
          title={
            <>
              Show me what Patelligence{" "}
              <span className="gradient-text">could automate for me.</span>
            </>
          }
          subtitle="20-minute call. We map your highest-leverage workflow live. No sales pressure — if it's not a fit, we'll tell you."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-card mx-auto max-w-2xl p-6 md:p-10"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-muted">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Patel"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-muted">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@business.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-muted">
                    Business type
                  </label>
                  <Input
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    placeholder="e.g. Veterinary clinic, contractor, gym"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-muted">
                    What workflow do you want to automate first?
                  </label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="e.g. We miss 5+ calls a day, no one follows up on leads, scheduling is chaos…"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Book my demo <Send className="h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted">
                  We reply within 24 hours. No sales pressure.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-electric shadow-lg shadow-primary/30"
                >
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  Demo request received.
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted">
                  Thanks, {form.name || "friend"} — we&apos;ll be in touch at{" "}
                  <span className="text-foreground">
                    {form.email || "your email"}
                  </span>{" "}
                  within 24 hours to schedule your 20-minute call.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", businessType: "", message: "" });
                  }}
                >
                  Send another
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
