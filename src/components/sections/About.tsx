const stats = [
  { label: "Active teams", value: "2,400+" },
  { label: "Dashboards created", value: "18k+" },
  { label: "Avg. time saved", value: "35%" },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-indigo-400 font-semibold mb-3">Why Insightify</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Make decisions faster with clear, trustworthy analytics.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Insightify helps teams turn messy data into clean dashboards and AI-driven insights.
            Designed for speed, clarity, and real-world workflows — from startups to enterprise.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
              Next.js 14
            </span>
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
              TypeScript
            </span>
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
              TailwindCSS
            </span>
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
              SaaS UI
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl"
            >
              <div className="text-3xl font-bold mb-2">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
