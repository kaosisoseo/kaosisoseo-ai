import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Newsletter() {
  return (
    <section className="bg-gray-900 py-24 text-white">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold">
            Free SEO Insights
          </span>

          <h2 className="mt-8 text-4xl font-bold">
            Stay Ahead of Search & AI
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Receive practical SEO strategies, Technical SEO tips, Local SEO
            updates, AI Visibility insights, and actionable search marketing
            advice designed to help businesses grow organically.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Join the Newsletter
            </Link>

            <Link
              href="/blog"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Read Latest Articles
            </Link>

          </div>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">

            <div className="rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold">
                Technical SEO
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Website health, crawling, indexing, Core Web Vitals and
                technical optimization.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold">
                Local SEO
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Google Business Profile, Maps rankings, local authority and
                reputation management.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold">
                AI Visibility
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Learn how modern AI assistants discover, evaluate and recommend
                businesses.
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}