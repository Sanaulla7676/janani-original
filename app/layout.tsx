import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janani Health Care – Complete Home Healthcare & Patient Care Services",
  description:
    "15+ Years of trusted home healthcare in Bengaluru. Nursing care, doctor visits, medical equipment rent & sale, physiotherapy and more. Call +91 95355 94993.",
  keywords: "home healthcare Bengaluru, nursing care at home, medical equipment rent, doctor visit home, physiotherapy home",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
