import ContactForm from "@/components/forms/ContactForm";

export default function Footer() {
  return (
    <footer className="border-t border-sand/20 bg-night/95">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl mb-4">Quiet, intimate wildlife encounters.</h2>
          <p className="text-sm text-sand/80 max-w-md">
            Based in Utah, inspired by Africa. Private, expert-guided safaris with an emphasis on
            ecology, photography, and stillness.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-6 text-xs text-sand/60 flex justify-between">
        <p>© {new Date().getFullYear()} Safari Utah. All rights reserved.</p>
        <p className="space-x-4">
          <a href="/policies" className="hover:text-bone">Policies</a>
        </p>
      </div>
    </footer>
  );
}
