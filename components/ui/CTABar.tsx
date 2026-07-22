import { Phone, MessageCircle } from "lucide-react";
import { PHONE } from "@/lib/data";

interface CTABarProps {
  variant?: "teal" | "dark";
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  showWhatsapp?: boolean;
  image?: React.ReactNode;
}

export default function CTABar({
  variant = "teal",
  title,
  subtitle,
  showWhatsapp = false,
  image,
}: CTABarProps) {
  const bg = variant === "dark" ? "bg-navy-900" : "bg-teal-600";

  return (
    <div className={`${bg} text-white`}>
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {image && <div className="hidden md:block">{image}</div>}
          <div>
            <p className="font-bold text-base md:text-lg">{title}</p>
            <p className="text-teal-100 text-sm">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-white text-teal-700 font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 text-sm hover:bg-teal-50 transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>
          {showWhatsapp && (
            <a
              href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
