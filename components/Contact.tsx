"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { PHONE, WHATSAPP, EMAIL, ADDRESS, services } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", phone: "", service: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top: heading + nurse image row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <span className="h-px w-8 bg-teal-400 inline-block" />
              CONTACT US
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight mb-4">
              We Are Here to Help You<br />Anytime You Need
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Reach out to us for home healthcare services, equipment rental, or any assistance. Our team is always ready to help.
            </p>
          </div>
          <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/contact.png"
              alt="Janani Healthcare support nurse"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-card flex flex-col gap-5">
            <h3 className="font-bold text-navy-900 text-lg text-left">Get in Touch</h3>

            <a href={`tel:${PHONE}`} className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-medium">Phone</p>
                <p className="text-sm font-semibold text-navy-900 group-hover:text-teal-600 transition-colors">{PHONE}</p>
              </div>
            </a>

            <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <MessageCircle size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-medium">WhatsApp</p>
                <p className="text-sm font-semibold text-navy-900 group-hover:text-green-600 transition-colors">{WHATSAPP}</p>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-medium">Email</p>
                <p className="text-sm font-semibold text-navy-900 group-hover:text-blue-600 transition-colors break-all">{EMAIL}</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <MapPin size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-medium">Address</p>
                <p className="text-sm font-semibold text-navy-900 whitespace-pre-line leading-snug">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <Clock size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-medium">Working Hours</p>
                <p className="text-sm font-semibold text-navy-900">Monday – Sunday</p>
                <p className="text-sm text-gray-500">24 Hours (Open All Days)</p>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden h-36 bg-gray-100 mt-1 border border-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=Vijayanagar,+Bengaluru,+Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Janani Healthcare Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
            <h3 className="font-bold text-navy-900 text-lg text-left mb-5">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 bg-gray-50"
              />
              <input
                type="tel"
                required
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 bg-gray-50"
              />
              <select
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 bg-gray-50 text-gray-600"
              >
                <option value="">Select a Service</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
                <option value="Medical Equipment">Medical Equipment Rent/Purchase</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 bg-gray-50 resize-none"
              />
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send size={17} /> Send Message
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-semibold text-sm bg-green-50 p-3 rounded-xl border border-green-100"
                >
                  ✅ Thank you! We'll contact you shortly.
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-8 bg-teal-600 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-white">24/7</div>
            <div className="text-left text-white">
              <p className="font-bold text-lg">Need Immediate Medical Assistance?</p>
              <p className="text-white/80 text-sm">Our team is available 24/7 for emergencies. Just call us anytime.</p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href={`tel:${PHONE}`} className="bg-navy-900 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 text-sm hover:bg-navy-800 transition-colors">
              <Phone size={16} /> Call Now<br /><span className="text-xs font-normal">{PHONE}</span>
            </a>
            <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 text-sm hover:opacity-90 transition-opacity">
              <MessageCircle size={16} /> WhatsApp Us<br /><span className="text-xs font-normal">{WHATSAPP}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
