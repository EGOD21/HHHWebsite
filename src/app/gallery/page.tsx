'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { jobs, JobCategory } from '@/config/jobs';
import JobFilter from '@/components/gallery/job-filter';
import JobGrid from '@/components/gallery/job-grid';
import { siteConfig } from '@/config/site';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | 'all'>('all');

  const filteredJobs = selectedCategory === 'all'
    ? jobs
    : jobs.filter((job) => job.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050506] via-[#15060a] to-[#020102] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 mx-auto h-[40rem] max-w-5xl bg-[radial-gradient(circle,_rgba(255,0,0,0.15)_0%,_rgba(15,0,0,.0)_65%)]" />
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-20 md:pt-28">
        {/* Hero */}
        <section className="relative px-4 pt-12 pb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Our Portfolio
            </span>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Our Work
            </h1>
            <p className="text-lg text-white/70">
              See the quality and craftsmanship we bring to every project.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <section className="px-4">
          <JobFilter
            selectedCategory={selectedCategory}
            onFilterChange={setSelectedCategory}
          />
        </section>

        {/* Job grid */}
        <section className="px-4">
          <JobGrid jobs={filteredJobs} />
        </section>

        {/* CTA */}
        <section className="px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-black/70 via-red-700/20 to-black/70 p-10 shadow-2xl shadow-black/50">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Ready to start your project?</h2>
                <p className="max-w-2xl text-base text-white/80">
                  Let us bring the same quality and attention to detail to your home or business.
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
