"use client";

import { useMemo, useState } from "react";

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type FormStatus = "idle" | "submitting" | "success" | "error" | "unconfigured";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const disabled = useMemo(() => status === "submitting", [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formspreeEndpoint) {
      setStatus("unconfigured");
      setMessage(
        "Form submission is not configured yet. Please call or email us directly while we finalize online requests."
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setStatus("submitting");
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thank you! Your message is on its way. We'll follow up within one business day."
        );
        form.reset();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "Something went wrong while sending your request. Please try again or reach out by phone or email."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl shadow-black/30 backdrop-blur"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium uppercase tracking-wide text-white/70">
          Name
          <input
            name="name"
            type="text"
            placeholder="Full name"
            required
            className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition focus:border-white/40 focus:bg-black/60"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium uppercase tracking-wide text-white/70">
          Email
          <input
            name="email"
            type="email"
            placeholder="name@email.com"
            required
            className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition focus:border-white/40 focus:bg-black/60"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium uppercase tracking-wide text-white/70">
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="417-771-6600"
            className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition focus:border-white/40 focus:bg-black/60"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium uppercase tracking-wide text-white/70">
          Project Type
          <select
            name="service"
            className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition focus:border-white/40 focus:bg-black/60"
          >
            <option value="General Repairs">General Repairs</option>
            <option value="Assembly & Installations">Assembly & Installations</option>
            <option value="Outdoor Projects">Outdoor Projects</option>
            <option value="Custom Request">Custom Request</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium uppercase tracking-wide text-white/70">
        Project Details
        <textarea
          name="message"
          rows={4}
          placeholder="Share how we can help—timelines, details, and goals."
          className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-white/40 focus:bg-black/60"
        />
      </label>
      <button
        type="submit"
        disabled={disabled}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-900/50 transition hover:from-red-400 hover:to-red-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request a Project"}
      </button>
      {message && (
        <p
          className={`text-sm ${
            status === "success"
              ? "text-emerald-300"
              : status === "error"
                ? "text-red-300"
                : "text-yellow-200"
          }`}
        >
          {message}
        </p>
      )}
      {!formspreeEndpoint && status === "idle" && (
        <p className="text-xs text-white/50">
          Prefer instant contact? Call or text us at 417-771-6600 and we will respond quickly.
        </p>
      )}
    </form>
  );
}
