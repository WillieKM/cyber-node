// src/app/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400">
            Cybersecurity Consulting
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Reduce cyber risk without slowing down your business.
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            Cyber-Node partners with organizations to strengthen security
            programs, respond to incidents, and stay ahead of evolving threats,
            using practical, framework-aligned approaches instead of buzzwords.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Book a 30-minute security assessment
            </Link>
            <Link
              href="#services"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-emerald-400"
            >
              View services
            </Link>
          </div>

          <div className="mt-6 grid gap-4 text-xs text-slate-400 md:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-200">Threat intelligence</p>
              <p>Stay ahead of emerging attack patterns and risks.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">
                Incident response
              </p>
              <p>Contain, investigate, and recover from security incidents.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">
                Compliance & audits
              </p>
              <p>
                Align with NIST, ISO 27001, SOC 2, PCI, HIPAA, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
            <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 mb-3">
              Example Engagement Snapshot
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Phishing resilience</span>
                <span className="font-mono text-emerald-400">↓ 70%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mean time to detect</span>
                <span className="font-mono text-emerald-400">↓ 55%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Critical vuln backlog</span>
                <span className="font-mono text-emerald-400">↓ 80%</span>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-slate-500">
              Real-world results for mid-size organizations (500–2,000 users),
              combining security assessments, vulnerability management, and
              training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
