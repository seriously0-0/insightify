"use client";

import Link from "next/link";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                ✦
              </span>
              <span className="text-white font-semibold tracking-tight">
                Insightify
              </span>
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="hidden sm:inline-flex px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                Login
              </Link>

              <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-sm font-semibold text-white shadow-lg shadow-indigo-600/20">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}