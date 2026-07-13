"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="space-y-5">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full rounded-xl border p-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border p-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full rounded-xl bg-blue-700 p-4 text-white hover:bg-blue-800"
      >
        Login
      </button>

      <p className="text-center text-sm text-gray-500">
        Don't have an account? Register
      </p>
    </div>
  );
}