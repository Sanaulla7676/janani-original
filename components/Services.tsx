"use client";
import { motion, Variants } from "framer-motion";
import {
  Stethoscope, Syringe, HeartPulse, Bandage, HandHeart,
  Wind, Droplets, Dumbbell, Pipette, HeartHandshake, ShieldPlus, FlaskConical,
  Phone, MessageCircle,
} from "lucide-react";
import { services, CONTACTS } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import IconMedia from "./ui/IconMedia";
import AnimatedBackground from "./ui/AnimatedBackground";
import ContactMenu from "./ui/ContactMenu";

const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  "heart-pulse": HeartPulse,
  bandage: Bandage,
  "hand-heart": HandHeart,
  wind: Wind,
  droplets: Droplets,
  dumbbell: Dumbbell,
  tube: Pipette,
  "heart-handshake": HeartHandshake,
  "shield-cross": ShieldPlus,
  "flask-conical": FlaskConical,
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-16">
      <AnimatedBackground variant="light" />
      <div className="relative max-w-6xl mx-auto px-4">
        <SectionHeader
          label="OUR SERVICES"
          title="Professional Care at Your Doorstep"
          subtitle="We provide a wide range of home healthcare services with compassion and expertise."
        />

        {/* 4-col illustrated card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
        >
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] || Stethoscope;
            return (
              <motion.div
                key={svc.title}
                variants={card}
                whileHover={{ y: -6, boxShadow: "0 16px 34px rgba(26,120,120,0.18)" }}
                className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center text-center shadow-card cursor-default"
              >
                <IconMedia icon={Icon} gradient={svc.gradient} />
                <h3 className="font-bold text-navy-900 text-sm mt-3 mb-1.5 leading-snug">{svc.title}</h3>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed flex-1">{svc.description}</p>
                <ContactMenu
                  mode="whatsapp"
                  align="center"
                  message={`Hi, I'd like to enquire about ${svc.title}.`}
                  className="btn-enquire text-xs w-full"
                >
                  Enquire Now
                </ContactMenu>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="relative bg-teal-600">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex w-14 h-14 rounded-full bg-teal-500/40 items-center justify-center text-white text-2xl flex-shrink-0">
              👩‍⚕️
            </div>
            <div>
              <p className="text-white font-bold text-base">Need Immediate Assistance?</p>
              <p className="text-teal-100 text-xs">Our team is available 24/7 to help you with your healthcare needs.</p>
              <p className="text-white font-semibold text-sm mt-0.5 flex items-center gap-1">
                <Phone size={13} /> {CONTACTS.length} numbers available below
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <ContactMenu
              mode="call"
              panelPosition="top"
              className="bg-white text-teal-700 font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 text-sm hover:bg-teal-50 transition-colors"
            >
              <Phone size={15} /> Call Now
            </ContactMenu>
            <ContactMenu
              mode="whatsapp"
              panelPosition="top"
              className="bg-whatsapp text-white font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={15} /> Chat on WhatsApp
            </ContactMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
