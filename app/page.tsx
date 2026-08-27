"use client";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import CareProcess from "@/components/CareProcess";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Navbar />
      <FloatingButtons />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Equipment />
      <CareProcess />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
