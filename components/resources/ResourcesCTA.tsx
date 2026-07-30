import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ResourcesCTA() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-900 py-24 text-white">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Ready for the Next Step?
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">
            Turn SEO Knowledge Into
            <br />
            Sustainable Organic Growth
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100">
            Reading guides and downloading checklists is a great start.
            The real results come from implementing the right SEO strategy
            consistently. If you're ready to grow your search visibility,
            I'd love to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
            >
              Work With Me
            </Link>

            <Link
              href="/case-studies"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
            >
              View Case Studies
            </Link>

          </div>

          <div className="mt-16 grid gap-8 text-left md:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

              <h3 className="text-xl font-semibold">
                Technical SEO
              </h3>

              <p className="mt-3 text-green-100">
                Improve crawlability, indexing, Core Web Vitals and overall
                website performance.
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

              <h3 className="text-xl font-semibold">
                Local SEO
              </h3>

              <p className="mt-3 text-green-100">
                Increase visibility in Google Maps and local search while
                attracting qualified customers.
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

              <h3 className="text-xl font-semibold">
                AI Visibility
              </h3>

              <p className="mt-3 text-green-100">
                Position your business to be discovered and recommended by
                modern AI search assistants.
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}