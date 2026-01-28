import Link from "next/link";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About",
  description: "Learn about Godwin Repair and Construction - quality workmanship with integrity.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050506] via-[#15060a] to-[#020102] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 mx-auto h-[40rem] max-w-5xl bg-[radial-gradient(circle,_rgba(255,0,0,0.15)_0%,_rgba(15,0,0,.0)_65%)]" />
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-20 md:pt-28">
        {/* Hero section */}
        <section className="relative px-4 pt-12 pb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Our Story
            </span>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Workmanship that reflects our faith
            </h1>
            <p className="text-lg text-white/70">
              Quality craftsmanship delivered with integrity and care.
            </p>
          </div>
        </section>

        {/* Company story */}
        <section className="px-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-black/70 via-red-700/20 to-black/70 p-10 shadow-2xl shadow-black/50">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-200">
                  Who we are
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">Built on Excellence</h2>
                <p className="text-base text-white/80">
                  Godwin Repair and Construction serves the community with practical skills and genuine care. Every project is approached with excellence—meeting needs while displaying integrity and dependable work.
                </p>
                <p className="text-base text-white/80">
                  We pursue excellence in every detail, from the initial walk-through to the final cleanup. Our team communicates proactively, respects your schedule, and leaves each space better than we found it.
                </p>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-white/70 shadow-xl shadow-black/40">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Guiding verse</p>
                <p className="text-lg italic text-white/90">{siteConfig.scripture}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="px-4">
          <div className="space-y-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
                Our promise
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">What you can expect from every visit</h2>
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
          </div>
        </section>

        {/* Mission statement */}
        <section className="px-4">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-10 shadow-2xl shadow-black/50">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
                Our Mission
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                {siteConfig.mission}
              </p>
            </div>
          </div>
        </section>

        {/* CTA to contact */}
        <section className="px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-red-500/20 to-transparent p-10 shadow-2xl shadow-black/50">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Let&apos;s work together</h2>
                <p className="max-w-2xl text-base text-white/80">
                  Ready to bring your project to life? We&apos;re here to help with all your home repair and construction needs.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-900/50 transition hover:from-red-400 hover:to-red-500"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
