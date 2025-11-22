// src/app/components/Industries.tsx
const industries = [
  {
    name: "Critical infrastructure & public sector",
    detail:
      "Ports, transportation, utilities, and agencies where uptime and safety are non-negotiable.",
  },
  {
    name: "Healthcare & regulated environments",
    detail:
      "Protect PHI, meet HIPAA and other regulatory requirements, and keep clinicians productive.",
  },
  {
    name: "SaaS & technology",
    detail:
      "Secure cloud-native environments, support customer audits, and enable sales with strong security posture.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="border-b border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
          Built for high-stakes environments
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-2xl">
          Cyber-Node works in sectors where security incidents carry real-world
          impact: financial, operational, safety, and reputational.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          {industries.map((i) => (
            <div
              key={i.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <h3 className="font-semibold text-slate-50">{i.name}</h3>
              <p className="mt-2 text-slate-300">{i.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
