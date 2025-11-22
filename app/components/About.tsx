// src/app/components/About.tsx
export default function About() {
  return (
    <section
      id="about"
      className="border-b border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-[2fr,1fr]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            About Cyber-Node
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Cyber-Node was founded to help organizations navigate the increasing
            complexity of cyber risk with clear, actionable guidance. We blend
            experience from security operations, architecture, and compliance to
            provide advice that is both technically sound and business-aware.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            We are a safety-conscious, equal-opportunity employer and partner
            with teams in operations where uptime and human safety matter.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
          <p className="font-semibold text-slate-100 mb-2">
            How we work with you
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Start with a focused assessment instead of a multi-year project.</li>
            <li>Summarize findings in plain language, not just scan reports.</li>
            <li>Align recommendations with your risk, budget, and timelines.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
