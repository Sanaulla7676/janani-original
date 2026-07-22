"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import { Star } from "lucide-react";

const avatarMap: Record<string, string> = {
  ramesh: "/images/avatar-male.png",
  sunitha: "/images/avatar-female.png",
  vijay: "/images/avatar-male.png",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-teal-50/60 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="TESTIMONIALS"
          title="What Our Clients Say"
          subtitle="Trusted experiences from families we've cared for."
        />
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card flex flex-col"
              >
                {/* Quote mark */}
                <div className="text-4xl text-teal-400 font-serif leading-none mb-2">"</div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-teal-100">
                    <Image
                      src={avatarMap[t.avatar] ?? "/images/avatar-male.png"}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
