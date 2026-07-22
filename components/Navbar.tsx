"use client";
import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, PHONE } from "@/lib/data";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active nav on scroll
  useEffect(() => {
    const sections = ["home", "services", "equipment", "care-process", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => href.replace("#", "") === activeSection;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row */}
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-teal-600 flex items-center justify-center relative flex-shrink-0">
              <svg viewBox="0 0 40 40" className="w-7 h-7 fill-white">
                <path d="M20 8 C14 8 8 14 8 20 C8 28 20 35 20 35 C20 35 32 28 32 20 C32 14 26 8 20 8Z" opacity="0.3"/>
                <rect x="17" y="12" width="6" height="16" rx="1"/>
                <rect x="12" y="17" width="16" height="6" rx="1"/>
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-xl text-teal-700 leading-none tracking-wide">JANANI</div>
              <div className="text-[9px] text-teal-500 tracking-[0.2em] font-medium">— HEALTH CARE —</div>
            </div>
          </a>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:flex items-center gap-1.5 border border-teal-600 text-teal-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-teal-600 hover:text-white transition-all duration-200"
            >
              <Phone size={14} /> Call Now
            </a>
            <a
              href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-whatsapp text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden ml-2 text-teal-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Nav links – desktop */}
        <nav className="hidden md:flex items-center gap-1 py-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className={`flex items-center gap-1 px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href) ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {link.label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-100 py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {link.children.map((child) => (
                    <a key={child.label} href={child.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-teal-600 border-b-2 border-teal-500"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(link.href) ? "text-teal-600 bg-teal-50" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-gray-600 hover:text-teal-600">
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={`tel:${PHONE}`} className="mt-2 btn-primary justify-center">
                <Phone size={14} /> Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
