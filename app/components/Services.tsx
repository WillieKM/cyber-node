// src/app/components/Services.tsx
const services = [
  {
    name: "Security Program Assessment",
    summary:
      "Baseline your security posture against NIST, ISO 27001, or SOC 2 and get a prioritized roadmap.",
    bullets: [
      "Gap analysis & maturity scoring",
      "Policy & process review",
      "Practical 6–12 month improvement plan",
    ],
  },
  {
    name: "Threat & Vulnerability Management",
    summary:
      "Identify, prioritize, and remediate vulnerabilities before attackers do.",
    bullets: [
      "Automated and manual vulnerability scanning",
      "Risk-based prioritization and ticketing",
      "Patch & configuration guidance",
    ],
  },
  {
    name: "Incident Response & Breach Management",
    summary:
      "On-demand experts to help you contain, investigate, and recover from incidents.",
    bullets: [
      "Detection & triage support",
      "Forensics and root-cause analysis",
      "Post-incident reporting and lessons learned",
    ],
  },
  {
    name: "Compliance & Regulatory Alignment",
    summary:
      "Translate regulations into practical controls that fit your environment.",
    bullets: [
      "Support for PCI, HIPAA, GDPR, CCPA, and more",
      "Control mapping and documentation",
      "Audit preparation and evidence support",
    ],
  },
  {
    name: "vCISO & Advisory",
    summary:
      "Strategic guidance when you don’t need (or can’t hire) a full-time CISO.",
    bullets: [
      "Security strategy & roadmap",
      "Board and executive reporting",
      "Metrics and risk communication",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
          Services designed for real-world environments
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-2xl">
          We combine threat intelligence, risk assessment, and hands-on
          incident response experience to deliver engagements that are
          actionable, measurable, and aligned to your business.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-semibold text-slate-50">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {service.summary}
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-400">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
