"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACTS } from "@/lib/data";

interface ContactMenuProps {
  mode: "call" | "whatsapp";
  className?: string;
  children: React.ReactNode;
  message?: string;
  align?: "left" | "right" | "center";
  panelPosition?: "top" | "bottom";
}

export default function ContactMenu({
  mode,
  className = "",
  children,
  message,
  align = "right",
  panelPosition = "bottom",
}: ContactMenuProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const alignClass =
    align === "right" ? "right-0" : align === "left" ? "left-0" : "left-1/2 -translate-x-1/2";
  const posClass = panelPosition === "top" ? "bottom-full mb-2" : "top-full mt-2";
  const originClass = panelPosition === "top" ? "origin-bottom" : "origin-top";

  return (
    <div className="relative inline-block" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={className}
      >
        {children}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: panelPosition === "top" ? 8 : -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: panelPosition === "top" ? 8 : -8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${posClass} ${alignClass} ${originClass} z-[70] w-60 bg-white rounded-xl shadow-2xl border border-gray-100 p-1.5 text-left`}
          >
            <p className="px-3 pt-1.5 pb-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
              {mode === "call" ? "Call our team" : "Chat on WhatsApp"}
            </p>
            {CONTACTS.map((c) => {
              const href =
                mode === "call"
                  ? `tel:+91${c.phone}`
                  : `https://wa.me/91${c.phone}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
              const Icon = mode === "call" ? Phone : MessageCircle;
              return (
                <a
                  key={c.phone}
                  href={href}
                  target={mode === "whatsapp" ? "_blank" : undefined}
                  rel={mode === "whatsapp" ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  role="menuitem"
                  className="flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-teal-50 transition-colors group"
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      mode === "call" ? "bg-teal-100 text-teal-600" : "bg-green-100 text-green-600"
                    }`}
                  >
                    <Icon size={14} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy-900 group-hover:text-teal-600 transition-colors">
                      {c.name}
                    </span>
                    <span className="block text-xs text-gray-400">+91 {c.phone}</span>
                  </span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
