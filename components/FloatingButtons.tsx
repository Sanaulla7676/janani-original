"use client";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ContactMenu from "./ui/ContactMenu";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp floating button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
      >
        <ContactMenu
          mode="whatsapp"
          panelPosition="top"
          align="right"
          className="relative w-14 h-14 rounded-full bg-whatsapp text-white shadow-xl flex items-center justify-center group"
        >
          {/* Pulse ring */}
          <motion.span
            className="absolute inset-0 rounded-full bg-whatsapp opacity-40"
            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <MessageCircle size={26} />
          <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
        </ContactMenu>
      </motion.div>

      {/* Call floating button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
      >
        <ContactMenu
          mode="call"
          panelPosition="top"
          align="right"
          className="w-14 h-14 rounded-full bg-teal-600 text-white shadow-xl flex items-center justify-center group relative"
        >
          <Phone size={24} />
          <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Call Now
          </span>
        </ContactMenu>
      </motion.div>
    </div>
  );
}
