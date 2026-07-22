import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              SEO • GEO • AEO • AI Visibility
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              Helping Businesses Rank on Google
              <br />
              and Become Recommended by AI
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-8 text-gray-600">
              I help businesses improve their visibility on Google and
              become trusted recommendations across AI assistants like
              ChatGPT, Claude, Gemini and Perplexity through modern SEO,
              Local SEO, GEO and AEO strategies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
                Book a Strategy Call
              </button>

              <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100">
                View Case Studies
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="flex h-[500px] w-[420px] items-center justify-center rounded-3xl border border-gray-200 bg-gray-100 text-center">

              <p className="text-gray-500">
                Your Professional Photo
                <br />
                will go here
              </p>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}