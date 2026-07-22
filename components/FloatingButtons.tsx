"use client";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE, WHATSAPP } from "@/lib/data";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    // Pulse animation interval
    const interval = setInterval(() => setPulse(p => !p), 2500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp floating button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-whatsapp text-white shadow-xl flex items-center justify-center group"
      >
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full bg-whatsapp opacity-40"
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <MessageCircle size={26} />
        {/* Tooltip */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call floating button */}
      <motion.a
        href={`tel:${PHONE}`}
        aria-label="Call us now"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-teal-600 text-white shadow-xl flex items-center justify-center group relative"
      >
        <Phone size={24} />
        {/* Tooltip */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
