import { auth, signOut } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold">داشبورد Insightify</h1>
            <p className="text-gray-400 text-sm mt-1">
              خوش آمدید، {session?.user?.email || "کاربر عزیز"}
            </p>
          </div>

          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600/30 transition text-sm font-semibold"
            >
              خروج از حساب
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-gray-400 text-sm">وضعیت اتصال اینستاگرام</h3>
            <p className="text-xl font-bold mt-2 text-amber-400">متصل نشده</p>
            <p className="text-xs text-gray-500 mt-1">به زودی...</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-gray-400 text-sm">تعداد پست‌ها</h3>
            <p className="text-xl font-bold mt-2">۰</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-gray-400 text-sm">نرخ تعامل (Engagement)</h3>
            <p className="text-xl font-bold mt-2">۰٪</p>
          </div>
        </div>
      </div>
    </div>
  );
}