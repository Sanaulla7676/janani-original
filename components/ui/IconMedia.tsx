"use client";
import { motion } from "framer-motion";

interface IconMediaProps {
  icon: React.ElementType;
  gradient?: string;
  size?: "sm" | "lg";
  className?: string;
}

export default function IconMedia({
  icon: Icon,
  gradient = "from-teal-400 to-teal-600",
  size = "lg",
  className = "",
}: IconMediaProps) {
  const dim = size === "lg" ? "w-20 h-20 rounded-2xl" : "w-14 h-14 rounded-xl";
  const iconSize = size === "lg" ? 32 : 22;

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 3 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative ${dim} bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-black/10 overflow-hidden shrink-0 ${className}`}
    >
      {/* decorative glow blobs to give the badge visual depth, like a small illustration */}
      <span className="absolute -top-3 -right-3 w-10 h-10 bg-white/25 rounded-full blur-md" />
      <span className="absolute -bottom-4 -left-4 w-12 h-12 bg-black/10 rounded-full blur-lg" />
      <Icon size={iconSize} className="text-white relative z-10" strokeWidth={1.75} />
    </motion.div>
  );
}
