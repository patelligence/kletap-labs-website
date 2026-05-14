import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Industries } from "@/components/industries";
import { WorkflowBuilder } from "@/components/workflow-builder";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Chatbot } from "@/components/chatbot";

// Single-page Patelligence AI marketing site. Sections compose top-to-bottom
// and share the dark theme defined in app/globals.css.
export default function HomePage() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Industries />
      <WorkflowBuilder />
      <Pricing />
      <Contact />
      <Footer />
      <Chatbot
        brandLabel="Patelligence Assistant"
        greeting="Hi! I'm the Patelligence AI assistant. Ask me anything about our workflows, pricing, integrations, or setup."
        initialSuggestions={[
          "What does Patelligence do?",
          "Pricing",
          "How long to set up?",
        ]}
      />
    </main>
  );
}
