export const CONTACTS = [
  { name: "Shivu S", phone: "9535594993" },
  { name: "M.Ravish", phone: "7338492044" },
  { name: "DM. Kumar", phone: "7975151165" },
];

export const PHONE = `+91 ${CONTACTS[0].phone.slice(0, 5)} ${CONTACTS[0].phone.slice(5)}`;
export const WHATSAPP = PHONE;
export const EMAIL = "jananihealthcare@gmail.com";
export const ADDRESS =
  "575/A, 8th Main Road, Govindaraja Nagara Ward,\nStage 2, Vijayanagar, Bengaluru,\nKarnataka – 560040";

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
  { icon: "stethoscope",     title: "Doctor Visit",          description: "Consultation by experienced doctors at your home.",          gradient: "from-teal-400 to-teal-600" },
  { icon: "syringe",         title: "Injection Services",    description: "IV / IM / SC injections given by trained professionals.",     gradient: "from-sky-400 to-blue-600" },
  { icon: "heart-pulse",     title: "BP & Sugar Check",      description: "Regular monitoring for BP and blood sugar (GRBS).",           gradient: "from-rose-400 to-pink-600" },
  { icon: "bandage",         title: "Wound Care",            description: "Professional wound dressing and management.",                gradient: "from-amber-400 to-orange-500" },
  { icon: "hand-heart",      title: "Nursing Care",          description: "Bedside nursing and personal care for all age groups.",       gradient: "from-teal-400 to-cyan-600" },
  { icon: "wind",            title: "Nebulization",          description: "Safe and effective nebulization therapy at home.",            gradient: "from-cyan-400 to-sky-600" },
  { icon: "droplets",        title: "Catheterization",       description: "Urinary catheter insertion and care at home.",                gradient: "from-blue-400 to-indigo-600" },
  { icon: "dumbbell",        title: "Physiotherapy",         description: "Expert physiotherapy for faster recovery and mobility.",      gradient: "from-emerald-400 to-teal-600" },
  { icon: "tube",            title: "Ryle's Tube Insertion", description: "Ryle's tube insertion and feeding support.",                  gradient: "from-violet-400 to-purple-600" },
  { icon: "heart-handshake", title: "Elderly Care",          description: "Compassionate care and support for elderly patients.",        gradient: "from-orange-400 to-rose-500" },
  { icon: "shield-cross",    title: "Tracheostomy Care",     description: "Specialized care for tracheostomy patients.",                 gradient: "from-teal-500 to-navy-700" },
  { icon: "flask-conical",   title: "Lab Assistance",        description: "Sample collection and laboratory support at home.",           gradient: "from-fuchsia-400 to-pink-600" },
];

export const equipment = [
  { title: "Oxygen Cylinder / Concentrator", description: "Continuous oxygen support for patients.",        image: "oxygen-cylinder", icon: "wind",           gradient: "from-sky-400 to-blue-600" },
  { title: "Hospital Bed (Medical Cot)",      description: "Comfortable and adjustable medical beds.",       image: "hospital-bed",    icon: "bed",             gradient: "from-teal-400 to-teal-600" },
  { title: "Wheelchair",                      description: "Durable and comfortable wheelchairs for easy mobility.", image: "wheelchair", icon: "accessibility",  gradient: "from-indigo-400 to-blue-600" },
  { title: "Suction Machine",                 description: "Effective suction for safe and clear airways.", image: "suction-machine",  icon: "syringe",         gradient: "from-cyan-400 to-sky-600" },
  { title: "BiPAP / CPAP Machine",            description: "Respiratory support for better breathing and sleep.", image: "bipap-cpap",  icon: "activity",        gradient: "from-emerald-400 to-teal-600" },
  { title: "Nebulizer",                       description: "Effective treatment for respiratory conditions.", image: "nebulizer",      icon: "wind",            gradient: "from-teal-400 to-cyan-600" },
  { title: "Walker / Walking Stick",          description: "Support and stability for safe movement.",       image: "walker",          icon: "footprints",      gradient: "from-amber-400 to-orange-500" },
  { title: "Commode Chair",                   description: "Hygienic and comfortable patient care.",         image: "commode-chair",   icon: "armchair",        gradient: "from-orange-400 to-rose-500" },
  { title: "Air Bed / Water Bed",             description: "Prevent bed sores and ensure patient comfort.",  image: "air-bed",         icon: "bed-double",      gradient: "from-blue-400 to-indigo-600" },
  { title: "DVT Machine",                     description: "Helps in blood circulation and prevents clotting.", image: "dvt-machine",  icon: "heart-pulse",     gradient: "from-rose-400 to-pink-600" },
  { title: "BP Apparatus",                    description: "Accurate blood pressure monitoring at home.",    image: "bp-apparatus",    icon: "gauge",           gradient: "from-red-400 to-rose-600" },
  { title: "Glucometer",                      description: "Easy and accurate blood sugar monitoring.",      image: "glucometer",      icon: "droplets",        gradient: "from-fuchsia-400 to-purple-600" },
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
