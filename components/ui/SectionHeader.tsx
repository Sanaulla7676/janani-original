import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <FadeIn className={center ? "text-center mb-10" : "mb-10"}>
      <p className="section-label">{label}</p>
      <h2 className={`text-3xl md:text-4xl font-bold text-navy-900 leading-tight ${center ? "text-center" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-gray-500 text-sm md:text-base max-w-xl ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
