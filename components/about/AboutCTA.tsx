import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-[#0B0F19] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-semibold uppercase tracking-wide text-green-500">
          Ready to Grow?
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Let's Build a Stronger SEO Strategy for Your Business
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Whether you're looking to improve your Google rankings, strengthen
          your local presence, or increase your visibility in AI assistants like
          ChatGPT and Grok, I'll help you build an SEO strategy focused on
          long-term results.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            Book a Free Consultation
          </Link>

          <Link
            href="/case-studies"
            className="rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}