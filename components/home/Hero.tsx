import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-green-600 px-4 py-2 text-sm font-semibold text-green-700">
            SEO • AI Visibility • GEO • AEO
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
            Helping Businesses Rank on Google
            <br />
            and Get Recommended by AI
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            I'm <strong>Kaosiso Ezebuenyi</strong>, an SEO & AI Visibility
            Specialist helping businesses increase organic traffic, dominate
            local search, and become trusted recommendations in AI assistants
            like ChatGPT, Gemini, Claude, and Perplexity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://cal.com/ezebuenyik/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Book a Strategy Call
            </a>

            <a
              href="/case-studies"
              className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}