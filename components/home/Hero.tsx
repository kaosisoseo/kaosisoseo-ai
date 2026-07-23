import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              Technical SEO • Local SEO • AI Visibility
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-6xl">
              Helping Businesses Rank Higher on Google
              <span className="block text-green-600">
                and Become Recommended by AI
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
              I help businesses increase their online visibility through
              Technical SEO, Local SEO and AI Visibility Optimization—so they
              rank higher on Google, attract qualified customers, and become
              the businesses AI assistants recommend.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

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
                className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                View Case Studies
              </a>

            </div>

            <div className="mt-16 grid grid-cols-2 gap-6">

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-3xl font-bold text-green-600">
                  7+
                </h3>

                <p className="mt-2 text-gray-600">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-3xl font-bold text-green-600">
                  20+
                </h3>

                <p className="mt-2 text-gray-600">
                  Businesses Served
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-xl font-bold text-gray-900">
                  Technical SEO
                </h3>

                <p className="mt-2 text-gray-600">
                  Website optimization that improves rankings and performance.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-xl font-bold text-gray-900">
                  AI Visibility
                </h3>

                <p className="mt-2 text-gray-600">
                  Helping businesses become recommended by AI assistants.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-md">

              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">

                <img
                  src="/images/kaosiso.jpeg"
                  alt="Kaosiso Ezebuenyi"
                  className="h-auto w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}