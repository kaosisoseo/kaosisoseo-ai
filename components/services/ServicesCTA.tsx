import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ServicesCTA() {
  return (
    <section className="bg-green-700 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Grow Your Organic Visibility?
          </h2>

          <p className="mt-6 text-lg leading-8 text-green-100">
            Whether you need Technical SEO, Local SEO, AI Visibility, or a
            complete SEO strategy, I can help your business improve its online
            presence and generate sustainable organic growth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
            >
              Request an SEO Audit
            </Link>

            <Link
              href="/case-studies"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}