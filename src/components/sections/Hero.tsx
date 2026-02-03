export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-black text-white px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Build Smarter Dashboards <br />
          with AI Insights
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Analyze, visualize, and grow your business with real-time intelligent analytics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-500 hover:border-white transition">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}
