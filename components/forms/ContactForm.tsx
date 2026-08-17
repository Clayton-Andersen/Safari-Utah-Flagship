"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "62addfbd-2462-4521-b1bc-d57cbc432911");
    formData.append("from_name", "Safari Utah Website");
    formData.append("subject", "New Safari Utah inquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        console.error("Web3Forms error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-xs uppercase tracking-[0.2em] text-sand/70"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          className="w-full rounded-lg border border-sand/30 bg-night/60 px-3 py-3 text-sm text-bone outline-none placeholder:text-sand/40 focus:border-sand"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-xs uppercase tracking-[0.2em] text-sand/70"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className="w-full rounded-lg border border-sand/30 bg-night/60 px-3 py-3 text-sm text-bone outline-none placeholder:text-sand/40 focus:border-sand"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-xs uppercase tracking-[0.2em] text-sand/70"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us your tour date, group size, pickup area, and any questions."
          className="w-full rounded-lg border border-sand/30 bg-night/60 px-3 py-3 text-sm text-bone outline-none placeholder:text-sand/40 focus:border-sand"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full border border-sand/70 px-5 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-sand hover:text-night disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="mt-1 text-xs text-emerald-400">
            Thank you. Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="mt-1 text-xs text-red-400">
            Something went wrong. Please try again, or email safariutah@gmail.com.
          </p>
        )}
      </div>
    </form>
  );
}
