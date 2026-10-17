import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ServicesCTA() {
  return (
    <section className="bg-green-800 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">Let's talk</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Ready to improve your search visibility?
          </h2>
          <p className="mt-6 text-lg leading-8 text-green-50">
            Tell me about your business, target market, and current challenges. We can discuss practical next steps and whether a one-time project or monthly engagement is the right fit.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://cal.com/ezebuenyik/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-green-800 transition hover:bg-green-50"
            >
              Book a Strategy Call
            </a>
            <Link
              href="/case-studies"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-800"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
