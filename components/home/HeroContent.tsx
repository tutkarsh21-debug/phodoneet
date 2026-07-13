"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <span className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-blue-900">
        🚀 NEET 2027 Admissions Open
      </span>

      <h1 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl">
        Crack NEET 2027
        <br />
        with India's
        <span className="text-yellow-300"> Smartest </span>
        AI Test Platform
      </h1>

      <p className="max-w-xl text-xl text-blue-100">
        Practice smarter with AI-powered analysis, real NTA pattern mock
        tests and detailed performance reports.
      </p>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-300" />
          <span>50,000+ Questions</span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-300" />
          <span>500+ Mock Tests</span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-300" />
          <span>AI Performance Analysis</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
  <Button
    size="lg"
    className="rounded-xl bg-yellow-400 px-8 text-blue-900 hover:bg-yellow-300"
  >
    Start Free Test
  </Button>

  <Button
    variant="secondary"
    size="lg"
    className="rounded-xl"
  >
    Explore Tests
  </Button>
</div>
    </motion.div>
  );
}