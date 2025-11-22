// src/app/components/Contact.tsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-[3fr,2fr]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            Book a security conversation
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            Share a few details and we’ll follow up to schedule a 30-minute
            call. We’ll review your current security posture and outline a
            couple of quick wins—no obligation.
          </p>

          <form
            className="mt-6 space-y-4"
            action="#"
            method="post"
          >
            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">
                Work email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">
                Organization
              </label>
              <input
                type="text"
                name="company"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">
                What do you need help with?
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400"
                placeholder="e.g., upcoming audit, recent incident, or general risk assessment"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Request my security assessment
            </button>

            <p className="mt-2 text-[11px] text-slate-500">
              Or contact us directly at <span className="font-mono">[your-email]@cyber-node.com</span>.
            </p>
          </form>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
          <p className="font-semibold text-slate-100 mb-2">
            What to expect after you submit
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>We review your request and follow up within 1–2 business days.</li>
            <li>We schedule a 30-minute call to understand your environment.</li>
            <li>
              You receive a short summary with recommended next steps and a
              clear proposal if appropriate.
            </li>
          </ol>
        </div>
      </div>

      <footer className="mt-12 border-t border-slate-800 pt-6 text-center text-[11px] text-slate-500">
        Cyber-Node is a proud, safety-conscious, equal-opportunity employer. ©
        {new Date().getFullYear()} Cyber-Node. All Rights Reserved.
      </footer>
    </section>
  );
}
