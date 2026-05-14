import { Sparkles } from "lucide-react";

const columns = [
  {
    title: "Studio",
    links: [
      { label: "Kletap Labs", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Ventures", href: "#ventures" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Patelligence AI", href: "#patelligence" },
      { label: "VetFlow AI", href: "#vetflow" },
      { label: "BRRRBoard", href: "#" },
      { label: "FamKnows", href: "#" },
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
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
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
