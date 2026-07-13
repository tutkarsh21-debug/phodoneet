"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FloatingCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  position: string;
};

export default function FloatingCard({
  icon: Icon,
  title,
  value,
  position,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute ${position} rounded-2xl bg-white/95 p-4 shadow-2xl`}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-8 w-8 text-blue-700" />

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="text-xl font-bold text-gray-800">
            {value}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}