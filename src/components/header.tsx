"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#values", label: "Our Promise" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileOpen((previous) => !previous);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 text-sm sm:text-base">
        <Link href="#top" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
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
              onClick={closeMobileMenu}
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
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
          >
            Call Now
          </a>
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-black/90 md:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-base">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-white/10 px-4 py-3 text-white/80 transition hover:border-white hover:text-white"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="rounded-xl border border-white/10 px-4 py-3 text-white transition hover:border-white hover:bg-white/10"
              onClick={closeMobileMenu}
            >
              Call {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="rounded-xl border border-white/10 px-4 py-3 text-white transition hover:border-white hover:bg-white/10"
              onClick={closeMobileMenu}
            >
              Email {siteConfig.contact.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
