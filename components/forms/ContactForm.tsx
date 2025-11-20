"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      // For now we just log; later you can hook this to an email service or API route.
      console.log("Contact form submission:", data);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-sm">
      <div>
        <label className="block mb-1 text-xs uppercase tracking-[0.2em] text-sand/70">
          Name
        </label>
        <input
          name="name"
          required
          className="w-full rounded-lg border border-sand/30 bg-night/60 px-3 py-2 text-sm outline-none focus:border-sand"
        />
      </div>
      <div>
        <label className="block mb-1 text-xs uppercase tracking-[0.2em] text-sand/70">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-lg border border-sand/30 bg-night/60 px-3 py-2 text-sm outline-none focus:border-sand"
        />
      </div>
      <div>
        <label className="block mb-1 text-xs uppercase tracking-[0.2em] text-sand/70">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-sand/30 bg-night/60 px-3 py-2 text-sm outline-none focus:border-sand"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full border border-sand/70 px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-sand hover:text-night transition disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="text-xs text-emerald-400 mt-1">
          Thank you—your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-400 mt-1">
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  );
}
