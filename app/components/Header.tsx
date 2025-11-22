// src/app/components/Header.tsx
"use client";

import Link from "next/link";

const sections = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#case-studies", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg border border-emerald-400/60 flex items-center justify-center text-xs font-bold tracking-tight">
            CN
          </div>
          <span className="text-sm font-semibold tracking-wide uppercase text-slate-100">
            Cyber-Node
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-emerald-400 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
          >
            Book a security review
          </a>
        </div>
      </nav>
    </header>
  );
}
