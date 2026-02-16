"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-400">Welcome to your analytics dashboard.</p>
    </main>
  );
}