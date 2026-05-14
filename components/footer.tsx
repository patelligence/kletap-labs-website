import { Bot } from "lucide-react";

const KLETAP_URL =
  process.env.NEXT_PUBLIC_KLETAP_URL ?? "https://kletaplabs.com";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Industries", href: "#industries" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Demo",
    links: [
      { label: "Try the Workflow Builder", href: "#workflow-builder" },
      { label: "Book a Demo", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Kletap Labs", href: KLETAP_URL, external: true },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

// Footer with brand, sitemap, copyright, and link back to Kletap Labs.
export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border bg-background-2/60">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-electric shadow-lg shadow-primary/30">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-base font-bold tracking-tight">
                Patelligence AI
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              AI operations for small businesses. Automate follow-up, scheduling,
              intake, and admin work so your team can focus on growth.
            </p>
            <p className="mt-4 text-xs text-muted">
              A product of{" "}
              <a
                href={KLETAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric underline-offset-2 hover:underline"
              >
                Kletap Labs
              </a>
              .
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
            © {new Date().getFullYear()} Patelligence AI. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
            Built by Kletap Labs · Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
