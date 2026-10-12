"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
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
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("ایمیل یا رمز عبور اشتباه است.");
      } else {
        // پس از ورود موفق، کاربر را به داشبورد هدایت می‌کنیم
        router.push("/dashboard");
      }
    } catch (err) {
      setError("خطایی در ورود به سیستم رخ داد.");
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
          <h1 className="text-2xl font-bold">ورود به حساب کاربری</h1>
          <p className="text-gray-400 text-sm mt-1">خوش آمدید</p>
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
            {loading ? "در حال ورود..." : "ورود"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          حساب کاربری ندارید؟{" "}
          <Link href="/signup" className="text-indigo-400 hover:underline">
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}