import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CaseStudiesCTA() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-600 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-100">
            Ready to Grow?
          </p>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight">
            Let's Build Your SEO Success Story
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-green-100">
            Whether you're looking to improve Google rankings, strengthen your
            local presence, or increase visibility in AI-powered search, I can
            help you build a sustainable SEO strategy tailored to your business.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
            >
              Book a Discovery Call
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}