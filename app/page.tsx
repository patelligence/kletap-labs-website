import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatWeDo } from "@/components/what-we-do";
import { PatelligenceFeature } from "@/components/patelligence-feature";
import { WorkflowBuilder } from "@/components/workflow-builder";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Chatbot } from "@/components/chatbot";

// Single-page landing experience for Kletap Labs.
// Sections are composed top-to-bottom and share the same dark theme.
export default function HomePage() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <PatelligenceFeature />
      <WorkflowBuilder />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
