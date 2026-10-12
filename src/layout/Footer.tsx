import Link from "next/link";

const links = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Docs", href: "#" },
      { label: "API", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                ✦
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Insightify
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              A modern analytics platform to visualize your data, get AI insights,
              and make smarter decisions.
            </p>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3 text-sm">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Insightify. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-gray-500 hover:text-white transition">
              Privacy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
