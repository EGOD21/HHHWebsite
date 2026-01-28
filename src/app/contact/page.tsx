import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Godwin Repair and Construction for your project needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050506] via-[#15060a] to-[#020102] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 mx-auto h-[40rem] max-w-5xl bg-[radial-gradient(circle,_rgba(255,0,0,0.15)_0%,_rgba(15,0,0,.0)_65%)]" />
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-20 md:pt-28">
        {/* Hero section */}
        <section className="relative px-4 pt-12 pb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Let&apos;s Talk
            </span>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Get Started Today
            </h1>
            <p className="text-lg text-white/70">
              Let&apos;s discuss your project and find the right solution.
            </p>
          </div>
        </section>

        {/* Two-column layout */}
        <section className="px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Contact info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Contact Information</h2>
                <p className="text-base text-white/70">
                  Reach out to us by phone, email, or the contact form. We typically respond within one business day.
                </p>
              </div>

              <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8 shadow-xl shadow-black/40">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Phone</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="block text-xl font-semibold text-white hover:text-red-400 transition"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-sm text-white/60">Available for calls and texts</p>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="block text-xl font-semibold text-white hover:text-red-400 transition break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-sm text-white/60">We&apos;ll respond within one business day</p>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Service Area</p>
                  <p className="text-lg font-semibold text-white">Springfield, Missouri</p>
                  <p className="text-sm text-white/60">and surrounding areas</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-red-500/20 to-transparent p-6">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Prefer to talk now?</strong> Call or text us and we&apos;ll pick up. We&apos;re here to answer your questions and schedule a walkthrough at your convenience.
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Additional CTA */}
        <section className="px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/50">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-semibold">What happens next?</h2>
              <div className="grid gap-6 md:grid-cols-3 text-left">
                <div className="space-y-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-200 font-semibold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">We Review</h3>
                  <p className="text-sm text-white/70">
                    We&apos;ll review your project details and reach out within one business day.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-200 font-semibold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">We Schedule</h3>
                  <p className="text-sm text-white/70">
                    We&apos;ll set up a walkthrough or call to discuss your project in detail.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-200 font-semibold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">We Deliver</h3>
                  <p className="text-sm text-white/70">
                    We complete your project with quality craftsmanship and clear communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
