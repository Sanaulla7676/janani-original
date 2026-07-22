export const PHONE = "+91 99809 19936";
export const WHATSAPP = "+91 99809 19936";
export const EMAIL = "jananihealthcare@gmail.com";
export const ADDRESS = "#12, 1st Floor, 3rd Cross,\nNear Main Road, Bengaluru,\nKarnataka – 560045";

export const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Services", href: "#services",
    children: [
      { label: "Nursing Care", href: "#services" },
      { label: "Doctor Visit", href: "#services" },
      { label: "Elderly Care", href: "#services" },
      { label: "Physiotherapy", href: "#services" },
      { label: "Medical Equipment", href: "#equipment" },
      { label: "Lab Assistance", href: "#services" },
    ],
  },
  { label: "Equipment", href: "#equipment" },
  { label: "Care Process", href: "#care-process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const whyChooseUs = [
  {
    icon: "clock",
    title: "24/7 Support",
    description: "Available anytime for emergency and scheduled care",
    badge: "24/7",
  },
  {
    icon: "user-check",
    title: "Experienced Staff",
    description: "Skilled nurses with 15+ years of medical expertise",
    badge: null,
  },
  {
    icon: "zap",
    title: "Quick Response",
    description: "Fast service at your doorstep when you need it most",
    badge: null,
  },
  {
    icon: "indian-rupee",
    title: "Affordable Care",
    description: "Cost-effective solutions with transparent pricing",
    badge: null,
  },
];

export const services = [
  { icon: "stethoscope",   title: "Doctor Visit",          description: "Consultation by experienced doctors at your home." },
  { icon: "syringe",       title: "Injection Services",    description: "IV / IM / SC injections given by trained professionals." },
  { icon: "activity",      title: "BP & Sugar Check",      description: "Regular monitoring for BP and blood sugar (GRBS)." },
  { icon: "bandage",       title: "Wound Care",            description: "Professional wound dressing and management." },
  { icon: "heart-pulse",   title: "Nursing Care",          description: "Bedside nursing and personal care for all age groups." },
  { icon: "wind",          title: "Nebulization",          description: "Safe and effective nebulization therapy at home." },
  { icon: "droplets",      title: "Catheterization",       description: "Urinary catheter insertion and care at home." },
  { icon: "dumbbell",      title: "Physiotherapy",         description: "Expert physiotherapy for faster recovery and mobility." },
  { icon: "tube",          title: "Ryle's Tube Insertion", description: "Ryle's tube insertion and feeding support." },
  { icon: "users",         title: "Elderly Care",          description: "Compassionate care and support for elderly patients." },
  { icon: "shield-cross",  title: "Tracheostomy Care",     description: "Specialized care for tracheostomy patients." },
  { icon: "flask-conical", title: "Lab Assistance",        description: "Sample collection and laboratory support at home." },
];

export const equipment = [
  { title: "Oxygen Cylinder / Concentrator", description: "Continuous oxygen support for patients.",        image: "oxygen-cylinder" },
  { title: "Hospital Bed (Medical Cot)",      description: "Comfortable and adjustable medical beds.",       image: "hospital-bed" },
  { title: "Wheelchair",                      description: "Durable and comfortable wheelchairs for easy mobility.", image: "wheelchair" },
  { title: "Suction Machine",                 description: "Effective suction for safe and clear airways.", image: "suction-machine" },
  { title: "BiPAP / CPAP Machine",            description: "Respiratory support for better breathing and sleep.", image: "bipap-cpap" },
  { title: "Nebulizer",                       description: "Effective treatment for respiratory conditions.", image: "nebulizer" },
  { title: "Walker / Walking Stick",          description: "Support and stability for safe movement.",       image: "walker" },
  { title: "Commode Chair",                   description: "Hygienic and comfortable patient care.",         image: "commode-chair" },
  { title: "Air Bed / Water Bed",             description: "Prevent bed sores and ensure patient comfort.",  image: "air-bed" },
  { title: "DVT Machine",                     description: "Helps in blood circulation and prevents clotting.", image: "dvt-machine" },
  { title: "BP Apparatus",                    description: "Accurate blood pressure monitoring at home.",    image: "bp-apparatus" },
  { title: "Glucometer",                      description: "Easy and accurate blood sugar monitoring.",      image: "glucometer" },
];

export const equipmentBadges = [
  { icon: "truck",        label: "Free Delivery",      sub: "On Rent Orders" },
  { icon: "shield-check", label: "Well Maintained",    sub: "Hygienic & Safe" },
  { icon: "tag",          label: "Affordable Rates",   sub: "Rent & Sale Options" },
  { icon: "headphones",   label: "24/7 Support",       sub: "Always Here to Help" },
];

export const careSteps = [
  { step: 1, icon: "message-circle", title: "Consultation",    description: "Call or WhatsApp us to discuss the patient's condition and requirements.",                          image: "step-consultation" },
  { step: 2, icon: "clipboard-list", title: "Assessment",       description: "Our medical team evaluates the patient's condition through home visit or reports.",                image: "step-assessment" },
  { step: 3, icon: "file-check",     title: "Care Plan",        description: "We create a customized care plan with treatment, services, and cost estimation.",                  image: "step-care-plan" },
  { step: 4, icon: "home",           title: "Service Setup",    description: "We arrange nurses, equipment, and all necessary services at your home.",                          image: "step-service-setup" },
  { step: 5, icon: "activity",       title: "Monitoring",       description: "Regular monitoring, updates, and follow-ups to ensure continuous and better care.",               image: "step-monitoring" },
  { step: 6, icon: "heart-handshake",title: "Recovery Support", description: "Continued support for recovery, rehabilitation, and long-term care if required.",                 image: "step-recovery" },
];

export const pricingFeatures = [
  { icon: "x-circle",    label: "No Hidden Costs" },
  { icon: "piggy-bank",  label: "Budget-Friendly Plans" },
  { icon: "refresh-ccw", label: "Rent Instead of Buy" },
  { icon: "star",        label: "Quality Care Assured" },
];

export const stats = [
  { value: "15+", label: "Years of Experience",       icon: "shield-check" },
  { value: "1000+", label: "Happy Families",           icon: "users" },
  { value: "50+", label: "Expert Care Professionals", icon: "user-check" },
  { value: "24/7", label: "Support Available",         icon: "clock" },
];

export const trustItems = [
  { icon: "award",        label: "Experienced\n& Certified Staff" },
  { icon: "clipboard",    label: "Personalized\nCare Plans" },
  { icon: "zap",          label: "Quick Response\nTime" },
  { icon: "heart",        label: "Patient-Centered\nApproach" },
  { icon: "indian-rupee", label: "Affordable &\nTransparent Pricing" },
  { icon: "home",         label: "Care at the\nComfort of Home" },
];

export const testimonials = [
  {
    quote: "Excellent service and very caring staff. My father recovered comfortably at home. Highly recommended!",
    name: "Ramesh B.",
    role: "Son of Patient",
    avatar: "ramesh",
  },
  {
    quote: "The nurses are very professional and supportive. They handle everything with so much care and patience.",
    name: "Sunitha K.",
    role: "Daughter of Patient",
    avatar: "sunitha",
  },
  {
    quote: "Equipment was delivered on time and in perfect condition. Very reliable and affordable services.",
    name: "Vijay M.",
    role: "Patient",
    avatar: "vijay",
  },
];

export const footerServices = [
  "Nursing Care", "Doctor Visit", "Elderly Care", "Physiotherapy", "Medical Equipment", "Lab Assistance",
];

export const footerLinks = [
  { label: "Home",         href: "#home" },
  { label: "Services",     href: "#services" },
  { label: "Equipment",    href: "#equipment" },
  { label: "Care Process", href: "#care-process" },
  { label: "About Us",     href: "#about" },
  { label: "Contact Us",   href: "#contact" },
];
