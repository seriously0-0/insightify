export default function CTA() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to build your first dashboard?
          </h3>
          <p className="text-gray-400 max-w-xl">
            Start free, explore features, and upgrade when you’re ready.
            No credit card required.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold">
            Try Free
          </button>
          <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition font-semibold">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
