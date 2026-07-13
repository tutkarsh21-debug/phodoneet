"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setEmail(user.email ?? "");
      setLoading(false);
    }

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl p-8">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold text-blue-700">
              Student Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Welcome,
              <span className="font-semibold">
                {" "}
                {email}
              </span>
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700"
          >
            Logout
          </button>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 shadow">
            <h2 className="text-xl font-bold">
              Tests Attempted
            </h2>

            <p className="mt-4 text-5xl font-bold text-blue-700">
              0
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <h2 className="text-xl font-bold">
              Best Score
            </h2>

            <p className="mt-4 text-5xl font-bold text-green-600">
              0%
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <h2 className="text-xl font-bold">
              Available Tests
            </h2>

            <p className="mt-4 text-5xl font-bold text-orange-500">
              0
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}