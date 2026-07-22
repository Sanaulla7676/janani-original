"use client";
import { motion } from "framer-motion";
import {
  Stethoscope, Syringe, Activity, Bandage, HeartPulse,
  Wind, Droplets, Dumbbell, Pipette, Users, ShieldPlus, FlaskConical,
  Phone, MessageCircle,
} from "lucide-react";
import { services, PHONE } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  activity: Activity,
  bandage: Bandage,
  "heart-pulse": HeartPulse,
  wind: Wind,
  droplets: Droplets,
  dumbbell: Dumbbell,
  tube: Pipette,
  users: Users,
  "shield-cross": ShieldPlus,
  "flask-conical": FlaskConical,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          label="OUR HEALTHCARE SERVICES"
          title="Professional Care at Your Doorstep"
          subtitle="We provide a wide range of home healthcare services with compassion and expertise."
        />

        {/* 4-col card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] || Stethoscope;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 10px 28px rgba(26,120,120,0.14)" }}
                className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center text-center shadow-card cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mb-3 text-teal-600">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy-900 text-sm mb-1.5 leading-snug">{svc.title}</h3>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed flex-1">{svc.description}</p>
                <a
                  href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-enquire text-xs"
                >
                  Enquire Now
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-teal-600">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Nurse image placeholder */}
            <div className="hidden md:flex w-14 h-14 rounded-full bg-teal-500/40 items-center justify-center text-white text-2xl flex-shrink-0">
              👩‍⚕️
            </div>
            <div>
              <p className="text-white font-bold text-base">Need Immediate Assistance?</p>
              <p className="text-teal-100 text-xs">Our team is available 24/7 to help you with your healthcare needs.</p>
              <p className="text-white font-semibold text-sm mt-0.5 flex items-center gap-1">
                <Phone size={13} /> {PHONE}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a href={`tel:${PHONE}`} className="bg-white text-teal-700 font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 text-sm hover:bg-teal-50 transition-colors">
              <Phone size={15} /> Call Now
            </a>
            <a
              href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
