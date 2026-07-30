import Container from "@/components/layout/Container";

const strengths = [
  {
    title: "Technical SEO",
    description:
      "I build technically sound websites that search engines can crawl, understand, and rank efficiently. From site structure to performance, every improvement supports long-term organic growth.",
  },
  {
    title: "Local SEO",
    description:
      "I help local businesses increase their visibility where customers are searching by optimizing Google Business Profile, local citations, on-page SEO, and location-based strategies.",
  },
  {
    title: "AI Visibility",
    description:
      "Search is evolving. I help businesses improve how AI assistants like ChatGPT, Gemini, Claude, and Grok understand, reference, and recommend their brands through entity optimization and structured content.",
  },
];

export default function WhatMakesMeDifferent() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            What Makes Me Different
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            SEO Built for Today's Search Landscape
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Modern SEO is no longer just about rankings. It's about building a
            digital presence that search engines and AI assistants can trust,
            understand, and recommend.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}