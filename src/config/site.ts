export const siteConfig = {
  name: "Godwin Repair and Construction",
  tagline: "Reliable, professional handyman services",
  description:
    "Professional handyman services delivered with excellence, integrity, and care for every project.",
  scripture:
    "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters. — Colossians 3:23",
  mission:
    "We are a company committed to doing excellent work wholeheartedly for the Kingdom of God while providing quality help for the projects your home or business needs.",
  contact: {
    phone: "417-771-6600",
    email: "godwin.repair.construction@gmail.com",
  },
  services: [
    {
      title: "General Repairs",
      description:
        "From drywall patches to door repairs, we handle all your home maintenance needs with precision and care.",
      icon: "wrench",
    },
    {
      title: "Remodelling",
      description:
        "Full upscale remodeling services for kitchens, bathrooms, and entire spaces—transforming your vision into reality.",
      icon: "settings",
    },
    {
      title: "Upscale Projects",
      description:
        "High-end outdoor and interior projects that elevate your property with premium craftsmanship and attention to detail.",
      icon: "leaf",
    },
  ],
  values: [
    {
      title: "Wholehearted Service",
      description:
        "We show up on time, communicate clearly, and honor every home as if it were our own.",
    },
    {
      title: "Skilled Craftsmanship",
      description:
        "Our team trains under experienced mentors to ensure every task is done right the first time.",
    },
    {
      title: "Kingdom Impact",
      description:
        "We believe practical help opens doors for ministry, so every project is a chance to serve with purpose.",
    },
  ],
};

export type ServiceIcon = (typeof siteConfig.services)[number]["icon"];
