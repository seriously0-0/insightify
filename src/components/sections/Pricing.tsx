const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "For personal projects and learning.",
    features: ["1 Dashboard", "Basic analytics", "Community support"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    desc: "For freelancers and small teams.",
    features: ["Unlimited dashboards", "AI insights", "Export reports", "Priority support"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For companies with advanced needs.",
    features: ["SSO / SAML", "Custom integrations", "Dedicated manager", "Security review"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Pick the plan that fits your workflow. Upgrade anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p) => (
          <div
            key={p.name}
            className={[
              "relative rounded-2xl border backdrop-blur-xl p-8 transition",
              p.highlighted
                ? "border-indigo-500/40 bg-indigo-500/10 shadow-lg shadow-indigo-600/10 scale-[1.02]"
                : "border-white/10 bg-white/5 hover:bg-white/[0.07]",
            ].join(" ")}
          >
            {p.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600">
                Popular
              </div>
            )}

            <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
            <p className="text-gray-400 text-sm mb-6">{p.desc}</p>

            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-bold">{p.price}</span>
              {p.price !== "Custom" && <span className="text-gray-400 mb-1">/mo</span>}
            </div>

            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-indigo-400">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={[
                "w-full py-3 rounded-xl font-semibold transition",
                p.highlighted
                  ? "bg-indigo-600 hover:bg-indigo-500"
                  : "bg-white/10 hover:bg-white/15",
              ].join(" ")}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}