// src/app/components/CaseStudies.tsx
const cases = [
  {
    label: "Port authority (1,500+ users)",
    outcome:
      "Reduced phishing-related incidents by 70% in 9 months with program assessment, email hardening, and training.",
  },
  {
    label: "Regional healthcare provider",
    outcome:
      "Prepared for HIPAA audit with risk analysis, policy review, and technical control validation.",
  },
  {
    label: "SaaS company (SOC 2)",
    outcome:
      "Aligned security controls to SOC 2, enabling faster enterprise sales cycles and smoother customer reviews.",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="border-b border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
          Outcomes we help clients achieve
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          {cases.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <p className="text-xs uppercase tracking-wide text-emerald-400 mb-2">
                {c.label}
              </p>
              <p className="text-slate-300">{c.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
