"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { careSteps, pricingFeatures } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import ContactMenu from "./ui/ContactMenu";
import {
  MessageCircle, ClipboardList, FileCheck, Home,
  Activity, HeartHandshake, Phone, XCircle, PiggyBank,
  RefreshCcw, Star, IndianRupee
} from "lucide-react";

const stepIconMap: Record<string, React.ElementType> = {
  "message-circle": MessageCircle,
  "clipboard-list": ClipboardList,
  "file-check": FileCheck,
  home: Home,
  activity: Activity,
  "heart-handshake": HeartHandshake,
};

const pricingIconMap: Record<string, React.ElementType> = {
  "x-circle": XCircle,
  "piggy-bank": PiggyBank,
  "refresh-ccw": RefreshCcw,
  star: Star,
};

export default function CareProcess() {
  return (
    <section id="care-process" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="OUR CARE PROCESS"
          title="How Our Care Works"
          subtitle="We follow a simple and structured process to ensure the best care and faster recovery for your loved ones."
        />

        {/* Steps — vertical timeline style */}
        <div className="mt-10 space-y-6 relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-teal-100 hidden md:block" />

          {careSteps.map((step, i) => {
            const Icon = stepIconMap[step.icon] ?? Activity;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-5 bg-white rounded-2xl p-5 shadow-card border border-gray-100 relative"
              >
                {/* Step number circle */}
                <div className="shrink-0 w-16 h-16 rounded-full bg-teal-600 text-white flex flex-col items-center justify-center z-10">
                  <span className="text-xs font-bold leading-none">{step.step}</span>
                  <Icon size={20} className="mt-0.5" />
                </div>

                {/* Text */}
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-navy-900 text-base mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Affordable & Transparent Care banner */}
        <FadeIn>
          <div className="mt-10 bg-teal-50 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center border border-teal-100">
            {/* Left */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center">
                  <IndianRupee size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg">Affordable &amp; Transparent Care</h3>
                  <p className="text-gray-500 text-xs mt-0.5">We help you save on unnecessary hospital expenses with home-based care and rental options for medical equipment.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {pricingFeatures.map((f) => {
                  const Icon = pricingIconMap[f.icon] ?? Star;
                  return (
                    <div key={f.label} className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-xs font-medium text-teal-700 shadow-sm border border-teal-100">
                      <Icon size={13} className="text-teal-500" />
                      {f.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: family photo */}
            <div className="shrink-0 w-full md:w-56 h-40 rounded-xl overflow-hidden shadow">
              <Image src="/images/care-family.png" alt="Happy family with home healthcare" width={224} height={160} className="object-cover w-full h-full" />
            </div>
          </div>
        </FadeIn>

        {/* CTA bottom banner */}
        <FadeIn>
          <div className="mt-6 bg-teal-600 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-white">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white text-center leading-tight">
                24/7
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">We Are Always Here to Help</p>
                <p className="text-white/80 text-sm">For any emergency or assistance, our team is just a call away.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <ContactMenu
                mode="call"
                panelPosition="top"
                className="bg-navy-900 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 text-sm hover:bg-navy-800 transition-colors"
              >
                <Phone size={16} /> Call Now
              </ContactMenu>
              <ContactMenu
                mode="whatsapp"
                panelPosition="top"
                className="bg-whatsapp text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </ContactMenu>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
