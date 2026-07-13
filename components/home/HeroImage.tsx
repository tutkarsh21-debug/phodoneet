"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";

import {
  Brain,
  Trophy,
  BookOpen,
} from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      <Image
        src="/images/hero-doctor.png"
        alt="Medical Student"
        width={700}
        height={850}
        priority
        className="w-full max-w-2xl"
      />

      <FloatingCard
        icon={Brain}
        title="AI Score"
        value="98%"
        position="-left-0 top-20"
      />

      <FloatingCard
        icon={Trophy}
        title="AIR Rank"
        value="128"
        position="-right-4 top-8"
      />

      <FloatingCard
        icon={BookOpen}
        title="Questions"
        value="12,500+"
        position="bottom-10 -left-6"
      />
    </motion.div>
  );
}