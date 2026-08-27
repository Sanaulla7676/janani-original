export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  gradient?: string;
}

export interface EquipmentItem {
  image: string;
  icon?: string;
  title: string;
  description: string;
  gradient?: string;
}

export interface CareStep {
  step: number;
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface TrustItem {
  icon: string;
  label: string;
}
