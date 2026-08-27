"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { stats, trustItems } from "@/lib/data";
import SectionHeader from "./ui/SectionHeader";
import FadeIn from "./ui/FadeIn";
import {
  ShieldCheck, Users, UserCheck, Clock,
  Award, Clipboard, Zap, Heart, IndianRupee, Home,
} from "lucide-react";

const statIconMap: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  users: Users,
  "user-check": UserCheck,
  clock: Clock,
};

const trustIconMap: Record<string, React.ElementType> = {
  award: Award,
  clipboard: Clipboard,
  zap: Zap,
  heart: Heart,
  "indian-rupee": IndianRupee,
  home: Home,
};

export default function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <FadeIn direction="left">
            <div className="space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-widest">
                <span className="h-px w-8 bg-teal-400 inline-block" />
                ABOUT US
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
                Compassionate Care,<br />Trusted for 15+ Years
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                With over 15 years of experience in the medical field, we are committed to providing reliable, professional, and compassionate home healthcare services.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our mission is to ensure patient comfort, faster recovery, and peace of mind for families.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {stats.map((s) => {
                  const Icon = statIconMap[s.icon];
                  return (
                    <div key={s.label} className="flex items-start gap-3">
                      {Icon && <Icon size={20} className="text-teal-600 mt-0.5 shrink-0" />}
                      <div>
                        <div className="text-2xl font-extrabold text-navy-900">{s.value}</div>
                        <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Right: Image */}
          <FadeIn direction="right">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.png"
                alt="Janani Healthcare – compassionate home nursing"
                fill
                className="object-cover object-top"
              />
            </div>
          </FadeIn>
        </div>

        {/* Why Families Trust Us */}
        <FadeIn>
          <div className="bg-gray-50 rounded-2xl p-8">
            <SectionHeader
              label="WHY FAMILIES TRUST US"
              title=""
              subtitle=""
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-6">
              {trustItems.map((item) => {
                const Icon = trustIconMap[item.icon];
                return (
                  <div key={item.label} className="flex flex-col items-center text-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
                      {Icon && <Icon size={24} className="text-teal-600" />}
                    </div>
                    <p className="text-xs font-medium text-navy-800 leading-snug whitespace-pre-line">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
