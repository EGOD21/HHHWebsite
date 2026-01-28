import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Leaf, Settings, Wrench } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig, type ServiceIcon } from "@/config/site";

const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  leaf: Leaf,
  sparkles: Settings,
  wrench: Wrench,
  settings: Settings,
};

export const metadata = {
  title: "Services",
  description: "Professional handyman services including general repairs, remodelling, and upscale projects.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050506] via-[#15060a] to-[#020102] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 mx-auto h-[40rem] max-w-5xl bg-[radial-gradient(circle,_rgba(255,0,0,0.15)_0%,_rgba(15,0,0,.0)_65%)]" />
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-20 md:pt-28">
        {/* Hero section */}
        <section className="relative px-4 pt-12 pb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              What we offer
            </span>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Full-Service Solutions
            </h1>
            <p className="text-lg text-white/70">
              From simple repairs to complete remodels, we handle it all with excellence.
            </p>
          </div>
        </section>

        {/* Service cards with expanded descriptions */}
        <section className="px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-lg shadow-black/40 transition hover:border-red-400/40"
                >
                  <div className="absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-500/20 to-transparent blur-3xl transition duration-500 group-hover:from-red-400/30" />
                  <div className="relative flex flex-col gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/20 text-red-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-white/70">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How we work section */}
        <section className="px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/50">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">How We Work</h2>
              <div className="grid gap-6 md:grid-cols-3 text-left">
                <div className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-200 font-semibold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">Initial Contact</h3>
                  <p className="text-sm text-white/70">
                    Reach out via phone, email, or our contact form. We&apos;ll discuss your project needs and schedule a walkthrough.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-200 font-semibold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">Assessment & Quote</h3>
                  <p className="text-sm text-white/70">
                    We evaluate the scope of work and provide a clear, detailed estimate with timeline expectations.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-200 font-semibold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">Quality Execution</h3>
                  <p className="text-sm text-white/70">
                    We complete the work with attention to detail, clear communication, and a clean workspace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA to contact */}
        <section className="px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-black/70 via-red-700/20 to-black/70 p-10 shadow-2xl shadow-black/50">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Ready to start your project?</h2>
                <p className="max-w-2xl text-base text-white/80">
                  Get in touch today and we&apos;ll respond within one business day to discuss your needs.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-900/50 transition hover:from-red-400 hover:to-red-500"
                >
                  Get in Touch
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
                >
                  Call {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
