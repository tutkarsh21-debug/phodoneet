"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

const handleRegister = async () => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Account created successfully!");
router.push("/login");
}; 

  return (
    <div className="space-y-5">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-xl border p-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
        onClick={handleRegister}
        className="w-full rounded-xl bg-blue-700 p-4 text-white hover:bg-blue-800"
      >
        Create Account
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account? Login
      </p>
    </div>
  );
}