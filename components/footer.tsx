import { Sparkles } from "lucide-react";

const PATELLIGENCE_URL =
  process.env.NEXT_PUBLIC_PATELLIGENCE_URL ?? "https://patelligence.ai";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Kletap Labs", href: "#top" },
      { label: "What We Do", href: "#what-we-do" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Patelligence AI", href: PATELLIGENCE_URL, external: true },
      { label: "Try the Demo", href: "#workflow-builder" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

// Footer — brand, sitemap, and copyright.
export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border bg-background-2/60">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-electric shadow-lg shadow-primary/30">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-base font-bold tracking-tight">
                Kletap Labs
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              An AI venture studio building intelligent systems for modern
              businesses.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-[10px] uppercase tracking-wider text-electric">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => {
                  const external = "external" in l && l.external;
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {l.label}
                        {external && <span aria-hidden>↗</span>}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Kletap Labs. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
            Built with care · Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
