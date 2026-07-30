import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-green-700 via-green-800 to-green-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Let's Grow Your Business with SEO
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-100">
          Whether you're looking to improve Google rankings, increase local
          visibility, or position your business to be recommended by AI
          assistants like ChatGPT and Gemini, I'd love to hear about your
          project.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="#contact-form"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
          >
            Start Your Project
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}