"use client";
import React from "react";
import { Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { PHONE, EMAIL, ADDRESS, footerServices, footerLinks } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-900 text-gray-300 font-sans border-t border-navy-800">
      {/* Top Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-teal-400 font-black tracking-tight select-none">
              JANANI
            </span>
            <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Care
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed text-left">
            Providing high-quality, reliable, and compassionate healthcare and patient care services directly at your home. 15+ years of trusted clinical excellence.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-navy-800 hover:bg-teal-600 transition-colors flex items-center justify-center cursor-pointer text-white">
              📱
            </div>
            <div className="w-8 h-8 rounded-full bg-navy-800 hover:bg-teal-600 transition-colors flex items-center justify-center cursor-pointer text-white">
              💬
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div className="space-y-4 text-left">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm pt-2">
            {footerServices.map((svc) => (
              <li key={svc}>
                <a
                  href="#services"
                  className="hover:text-teal-400 transition-colors block text-left"
                >
                  {svc}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4 text-left">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm pt-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-teal-400 transition-colors block text-left"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-4 text-left">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-teal-500">
            Get In Touch
          </h4>
          <div className="space-y-3 pt-2 text-sm">
            <a
              href={`tel:${PHONE}`}
              className="flex items-start gap-3 hover:text-teal-400 transition-colors group"
            >
              <Phone size={16} className="text-teal-500 mt-1 shrink-0" />
              <span className="text-left font-medium group-hover:underline">{PHONE}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-3 hover:text-teal-400 transition-colors group"
            >
              <Mail size={16} className="text-teal-500 mt-1 shrink-0" />
              <span className="text-left break-all font-medium group-hover:underline">{EMAIL}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-teal-500 mt-1 shrink-0" />
              <span className="text-left whitespace-pre-line text-xs leading-relaxed">{ADDRESS}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-navy-800 bg-navy-950 py-6 text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Janani Home Healthcare. All rights reserved. Registered Nursing & Attendant Services.
          </p>
          <div className="flex items-center gap-1.5 justify-center text-center">
            <span>Made with</span>
            <Heart size={10} className="text-red-500 fill-red-500" />
            <span>in Bengaluru</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-navy-800 text-teal-400 hover:bg-teal-600 hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-md scroll-smooth active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
