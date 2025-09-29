import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/80 py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="max-w-xl leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-white/70">
          <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
            {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
            {siteConfig.contact.email}
          </a>
          <Link href="#top" className="hover:text-white">
            Back to top
          </Link>
        </div>
        <p className="text-xs text-white/40">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
