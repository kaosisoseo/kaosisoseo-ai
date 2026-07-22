import Container from "@/components/layout/Container";

export default function CallToAction() {
  return (
    <section className="bg-green-600 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-8 text-xl leading-8 text-green-100">
            Whether you want to rank higher on Google, improve your local
            visibility or become recommended by AI assistants like ChatGPT,
            Gemini and Grok, let's build a strategy that delivers measurable
            results.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="https://cal.com/ezebuenyik/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-green-700 transition hover:bg-gray-100"
            >
              Book a Strategy Call
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-green-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}