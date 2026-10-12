"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "خطایی در ثبت‌نام رخ داد.");
      }

      // بعد از ثبت‌نام موفق، کاربر را به صفحه لاگین هدایت می‌کنیم
      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 mb-3">
            ✦
          </span>
          <h1 className="text-2xl font-bold">ساخت حساب کاربری</h1>
          <p className="text-gray-400 text-sm mt-1">به Insightify خوش آمدید</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">رمز عبور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold disabled:opacity-50 shadow-lg shadow-indigo-600/20"
          >
            {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          قبلاً ثبت‌نام کرده‌اید؟{" "}
          <Link href="/login" className="text-indigo-400 hover:underline">
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
}