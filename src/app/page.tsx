import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Leaf, Settings, Sparkles, Wrench } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { siteConfig, type ServiceIcon } from "@/config/site";

const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  leaf: Leaf,
  sparkles: Sparkles,
  wrench: Wrench,
  settings: Settings,
};

const highlights = [
  {
    label: "Student-led craftsmanship",
    detail: "A vetted team of Highlands College students you can trust in your home.",
  },
  {
    label: "Flexible scheduling",
    detail: "Transparent communication before, during, and after every project.",
  },
  {
    label: "Wholehearted service",
    detail: "We bring excellence, integrity, and care to every repair and improvement.",
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-[#050506] via-[#15060a] to-[#020102] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 mx-auto h-[40rem] max-w-5xl bg-[radial-gradient(circle,_rgba(255,0,0,0.15)_0%,_rgba(15,0,0,.0)_65%)]" />
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-20 md:pt-28">
        <section className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Highlands students at your service
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Hands-on help delivered with excellence, integrity, and heart.
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              Highlands HandyHelp LLC provides professional handyman services for homes, ministries, and small businesses. We combine skilled work with responsive communication so you can check projects off the list with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-900/50 transition hover:from-red-400 hover:to-red-500"
              >
                Call {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                Email Us
              </a>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:text-white hover:underline"
              >
                Explore Services
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl shadow-black/30"
                >
                  <dt className="text-sm font-semibold uppercase tracking-wide text-red-300">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm text-white/70">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="relative w-full max-w-md self-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="absolute inset-y-0 right-[-30%] h-full w-[70%] bg-gradient-to-br from-red-500/40 to-transparent blur-3xl" />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/20 bg-black/30">
                  <Image
                    src="/hhh-logo.png"
                    alt="Highlands HandyHelp logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">Mission</p>
                  <p className="text-lg font-semibold text-white">Serve with Heart</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/70">{siteConfig.mission}</p>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm italic text-white/80">
                {siteConfig.scripture}
              </div>
              <div className="space-y-2 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Contact
                </p>
                <a href={`tel:${siteConfig.contact.phone}`} className="block font-semibold text-white">
                  {siteConfig.contact.phone}
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="block font-semibold text-white">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section id="services" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
                How we can help
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Full-service handyman solutions</h2>
              <p className="text-base text-white/70">
                From quick fixes to multi-day projects, we tailor our approach to your to-do list. Each visit includes a clean workspace, respectful communication, and a clear summary of the work completed.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Schedule a walkthrough
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
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

        <section id="values" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
                Our promise
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">What you can expect from every visit</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 shadow-lg shadow-black/30"
              >
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-black/70 via-red-700/20 to-black/70 p-10 shadow-2xl shadow-black/50"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-200">
                Why we do this
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Workmanship that reflects our faith</h2>
              <p className="text-base text-white/80">
                Highlands HandyHelp LLC began as a team of Highlands College students using their practical skills to serve the community. Every project is approached as ministry in action—meeting tangible needs while displaying the love of Christ through dependable work and genuine care.
              </p>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-white/70 shadow-xl shadow-black/40">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Guiding verse</p>
              <p className="text-lg italic text-white/90">{siteConfig.scripture}</p>
              <p>
                We pursue excellence in every detail, from the initial walk-through to the final cleanup. Our team communicates proactively, respects your schedule, and leaves each space better than we found it.
              </p>
            </div>
          </div>
        </section>

        <section
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-2xl shadow-black/50"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Need help this week?</h2>
              <p className="max-w-2xl text-base text-white/80">
                Let us know what you need and we’ll respond within one business day with next steps. We can often accommodate evening or weekend projects to fit your schedule.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                Call or text us
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-900/50 transition hover:from-red-400 hover:to-red-500"
              >
                Start a project
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-10 md:grid-cols-[0.85fr_1fr]">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
                Contact
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Tell us about your project</h2>
              <p className="text-base text-white/70">
                Share a few details and we’ll reach out to schedule a walk-through or provide a quick estimate. Prefer to talk now? Call or text and we’ll pick up.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-xl shadow-black/40">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Phone</p>
                <a href={`tel:${siteConfig.contact.phone}`} className="block text-lg font-semibold text-white">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Email</p>
                <a href={`mailto:${siteConfig.contact.email}`} className="block text-lg font-semibold text-white">
                  {siteConfig.contact.email}
                </a>
              </div>
              <p className="text-sm text-white/60">
                Serving homeowners, ministries, and local businesses with dependable help that fits your timeline.
              </p>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
