"use client";
import Image from "next/image";
import { Phone, BookOpen, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ContactMenu from "./ui/ContactMenu";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end pt-[100px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt="Janani Home Healthcare - Nurse caring for elderly patient"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark gradient overlay — left-heavy so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />

      {/* Ambient floating motion blobs */}
      <motion.div
        className="absolute top-24 right-16 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl pointer-events-none"
        animate={{ y: [0, 24, 0], x: [0, -16, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-40 h-40 rounded-full bg-cyan-300/20 blur-2xl pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, 14, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg"
          >
            Complete Home Healthcare<br />& Patient Care Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-semibold text-sm md:text-base mb-3 drop-shadow"
          >
            15+ Years of Experience | Trusted Care at Your Doorstep | Affordable &amp; Transparent Pricing
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-sm md:text-base mb-8 leading-relaxed drop-shadow"
          >
            We provide end-to-end patient care at home including nursing, medical equipment, and recovery support so your loved ones receive hospital-quality care without hospital stress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <ContactMenu
              mode="call"
              panelPosition="top"
              align="left"
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded-md flex items-center gap-2 text-sm hover:bg-white hover:text-teal-700 transition-all duration-200 active:scale-95"
            >
              <Phone size={16} /> Call Now
            </ContactMenu>
            <ContactMenu
              mode="whatsapp"
              panelPosition="top"
              align="left"
              className="bg-whatsapp text-white font-semibold px-7 py-3 rounded-md flex items-center gap-2 text-sm hover:opacity-90 transition-all duration-200 active:scale-95"
            >
              <MessageCircle size={16} /> WhatsApp
            </ContactMenu>
            <a
              href="#contact"
              className="bg-teal-600 text-white font-semibold px-7 py-3 rounded-md flex items-center gap-2 text-sm hover:bg-teal-700 transition-all duration-200 active:scale-95"
            >
              <BookOpen size={16} /> Book Service
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
