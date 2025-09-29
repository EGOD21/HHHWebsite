export const siteConfig = {
  name: "Highlands HandyHelp LLC",
  tagline: "Reliable student-powered handyman services",
  description:
    "Professional handyman services delivered by Highlands College students who work with excellence, integrity, and care for every project.",
  scripture:
    "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters. — Colossians 3:23",
  mission:
    "We are a company formed of Highlands College students who are committed to doing excellent work wholeheartedly for the Kingdom of God while providing quality help for the projects your home or business needs.",
  contact: {
    phone: "417-771-6600",
    email: "HighlandsHandyHelp@gmail.com",
  },
  services: [
    {
      title: "General Repairs",
      description:
        "From drywall touch-ups to fixture replacements, we handle the punch list items that keep your space in top condition.",
      icon: "wrench",
    },
    {
      title: "Assembly & Installations",
      description:
        "Furniture, shelving, smart home devices, and more — carefully assembled and securely installed.",
      icon: "settings",
    },
    {
      title: "Outdoor Projects",
      description:
        "Pressure washing, yard refreshes, and seasonal projects that boost curb appeal and protect your investment.",
      icon: "leaf",
    },
    {
      title: "Custom Requests",
      description:
        "Have a unique project? We collaborate with you to scope the work, set expectations, and deliver with excellence.",
      icon: "sparkles",
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
        "Students train under experienced mentors to ensure every task is done right the first time.",
    },
    {
      title: "Kingdom Impact",
      description:
        "We believe practical help opens doors for ministry, so every project is a chance to serve with purpose.",
    },
  ],
};

export type ServiceIcon = (typeof siteConfig.services)[number]["icon"];
