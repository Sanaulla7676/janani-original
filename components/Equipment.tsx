"use client";
import { motion } from "framer-motion";
import { equipment, equipmentBadges, PHONE, WHATSAPP } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import { Truck, ShieldCheck, Tag, Headphones, Phone, MessageCircle } from "lucide-react";

const badgeIconMap: Record<string, React.ElementType> = {
  truck: Truck,
  "shield-check": ShieldCheck,
  tag: Tag,
  headphones: Headphones,
};

// Emoji icons mapped to each equipment item for visual richness (fallback to medical emoji)
const equipmentEmoji: Record<string, string> = {
  "oxygen-cylinder": "🫁",
  "hospital-bed": "🛏️",
  wheelchair: "♿",
  "suction-machine": "💉",
  "bipap-cpap": "😮‍💨",
  nebulizer: "💨",
  walker: "🦽",
  "commode-chair": "🪑",
  "air-bed": "🛌",
  "dvt-machine": "🦵",
  "bp-apparatus": "❤️",
  glucometer: "🩸",
};

// Teal tones for card backgrounds (cycling)
const cardColors = [
  "bg-teal-50",
  "bg-blue-50",
  "bg-cyan-50",
  "bg-sky-50",
];

export default function Equipment() {
  return (
    <section id="equipment" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          label="MEDICAL EQUIPMENT"
          title="Equipment for Rent & Sale"
          subtitle="High-quality medical equipment delivered and installed at your home for your comfort and care."
        />

        {/* Equipment Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-8">
          {equipment.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center text-center shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              {/* Icon area */}
              <div className={`w-20 h-20 ${cardColors[i % 4]} rounded-xl flex items-center justify-center mb-3 text-4xl group-hover:scale-105 transition-transform duration-300`}>
                {equipmentEmoji[item.image] ?? "🏥"}
              </div>
              <h3 className="font-bold text-navy-900 text-xs mb-1.5 leading-snug">{item.title}</h3>
              <p className="text-gray-400 text-xs mb-3 leading-relaxed flex-1">{item.description}</p>
              <a
                href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=Hi, I need enquiry about ${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 border border-teal-400 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-teal-600 hover:text-white transition-colors w-full"
              >
                Enquire Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Badges Row */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {equipmentBadges.map((badge) => {
              const Icon = badgeIconMap[badge.icon];
              return (
                <div key={badge.label} className="flex items-center gap-2 bg-teal-50 text-teal-800 rounded-full px-5 py-2.5 text-sm border border-teal-100">
                  {Icon && <Icon size={16} className="text-teal-600" />}
                  <div>
                    <span className="font-semibold">{badge.label}</span>
                    <span className="text-teal-600 text-xs block leading-none">{badge.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* CTA bar */}
        <FadeIn>
          <div className="bg-teal-600 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white text-left">
              <p className="font-bold text-lg">Need Any Equipment?</p>
              <p className="text-white/80 text-sm">Call us now or WhatsApp to check availability and pricing.</p>
              <p className="text-white/70 text-xs mt-1">📞 {PHONE}</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-colors"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:opacity-90 text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-opacity"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
