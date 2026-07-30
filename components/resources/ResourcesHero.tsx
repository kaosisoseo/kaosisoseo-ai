import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ResourcesHero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Free SEO Learning Center
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
            SEO Resources
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            Explore practical SEO guides, checklists, frameworks and
            educational resources designed to help businesses improve
            Google rankings, Local SEO performance and AI Visibility.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="#featured-resources"
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Browse Resources
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-600"
            >
              Need SEO Help?
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}