"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));

    router.push("/dashboard");
  };


  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}