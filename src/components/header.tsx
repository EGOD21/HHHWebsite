import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#values", label: "Our Promise" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 text-sm sm:text-base">
        <Link href="#top" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10">
            <Image
              src="/hhh-logo.png"
              alt="Highlands HandyHelp logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-semibold tracking-tight text-white">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-white hover:bg-white/10"
          >
            Call {siteConfig.contact.phone}
          </a>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-white hover:bg-white/10"
          >
            Call
          </a>
          <nav className="flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
