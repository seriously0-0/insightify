
const features = [
    {title:"Real-time Analytics",desc:"Monitor your data live with powerful real-time dashboards.",icon:"📊"},
    {title:"AI Insights",desc:"Get intelligent recommendations powered by machine learning.",icon:"🤖"},
    {title:"Secure Cloud",desc:"Enterprise-grade security with encrypted cloud storage.",icon:"☁️"},
]


export default function Features() {
    return(
        <section id="features" className="relative bg-slate-950 text-white py-24 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto">
                Powerful tools designed to help you understand and grow your
                business.
                </p>
            </div>
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item)=>(
                        <div key={item.title}
                         className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.07] transition">
            <div className="text-4xl mb-4">{item.icon}</div>

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
                      </div>
                    ))}
                  </div>
        </section>
    )
}