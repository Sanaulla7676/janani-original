"use client";
import { motion, Variants } from "framer-motion";
import {
  Clock, UserCheck, Zap, IndianRupee, Phone,
} from "lucide-react";
import { whyChooseUs, PHONE } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  clock: Clock,
  "user-check": UserCheck,
  zap: Zap,
  "indian-rupee": IndianRupee,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-teal-50/60 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="WHY CHOOSE US"
          title="Trusted Care You Can Rely On"
        />

        {/* 2x2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26,120,120,0.15)" }}
                className="bg-white rounded-xl border border-gray-100 shadow-card p-6 flex flex-col items-center text-center cursor-default"
              >
                <div className="relative w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4 text-teal-600">
                  {item.badge ? (
                    <>
                      <Clock size={28} className="text-teal-600" />
                      <span className="absolute top-0 right-0 text-[9px] font-bold text-teal-600 bg-teal-50 leading-none">24/7</span>
                    </>
                  ) : (
                    <Icon size={28} />
                  )}
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                <div className="w-8 h-0.5 bg-teal-500 mx-auto mb-2 rounded" />
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Row */}
        <FadeIn>
          <div className="bg-teal-600 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-500/50 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Need immediate help?</p>
                <p className="text-teal-100 text-xs">Call us now for quick assistance</p>
              </div>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 border-2 border-white/70 text-white font-semibold px-5 py-2 rounded-md text-sm hover:bg-white hover:text-teal-700 transition-all duration-200 whitespace-nowrap"
            >
              <Phone size={14} /> {PHONE}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
