"use client";
import { motion, Variants } from "framer-motion";
import { equipment, equipmentBadges, CONTACTS } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import IconMedia from "./ui/IconMedia";
import ContactMenu from "./ui/ContactMenu";
import {
  Truck, ShieldCheck, Tag, Headphones, Phone, MessageCircle,
  Wind, Bed, Accessibility, Syringe, Activity, Footprints,
  Armchair, BedDouble, HeartPulse, Gauge, Droplets,
} from "lucide-react";

const badgeIconMap: Record<string, React.ElementType> = {
  truck: Truck,
  "shield-check": ShieldCheck,
  tag: Tag,
  headphones: Headphones,
};

const equipmentIconMap: Record<string, React.ElementType> = {
  wind: Wind,
  bed: Bed,
  accessibility: Accessibility,
  syringe: Syringe,
  activity: Activity,
  footprints: Footprints,
  armchair: Armchair,
  "bed-double": BedDouble,
  "heart-pulse": HeartPulse,
  gauge: Gauge,
  droplets: Droplets,
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-8"
        >
          {equipment.map((item) => {
            const Icon = equipmentIconMap[item.icon ?? ""] ?? Wind;
            return (
              <motion.div
                key={item.title}
                variants={card}
                whileHover={{ y: -6, boxShadow: "0 16px 34px rgba(26,120,120,0.16)" }}
                className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center text-center shadow-card transition-shadow duration-300 group"
              >
                <IconMedia icon={Icon} gradient={item.gradient} />
                <h3 className="font-bold text-navy-900 text-xs mt-3 mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed flex-1">{item.description}</p>
                <ContactMenu
                  mode="whatsapp"
                  align="center"
                  message={`Hi, I need enquiry about ${item.title}.`}
                  className="text-teal-600 border border-teal-400 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-teal-600 hover:text-white transition-colors w-full"
                >
                  Enquire Now
                </ContactMenu>
              </motion.div>
            );
          })}
        </motion.div>

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
              <p className="text-white/70 text-xs mt-1">📞 {CONTACTS.length} contacts ready to help</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <ContactMenu
                mode="call"
                panelPosition="top"
                className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-colors"
              >
                <Phone size={16} /> Call Now
              </ContactMenu>
              <ContactMenu
                mode="whatsapp"
                panelPosition="top"
                className="bg-whatsapp hover:opacity-90 text-white font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-opacity"
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
