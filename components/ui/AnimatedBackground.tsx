"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const color1 = variant === "dark" ? "bg-teal-500/25" : "bg-teal-200/50";
  const color2 = variant === "dark" ? "bg-cyan-400/15" : "bg-cyan-200/40";
  const color3 = variant === "dark" ? "bg-navy-700/40" : "bg-sky-200/30";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute -top-28 -left-20 w-72 h-72 rounded-full blur-3xl ${color1}`}
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-1/3 -right-24 w-80 h-80 rounded-full blur-3xl ${color2}`}
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className={`absolute -bottom-24 left-1/3 w-64 h-64 rounded-full blur-3xl ${color3}`}
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );
}
