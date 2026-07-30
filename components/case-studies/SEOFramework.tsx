import Container from "@/components/layout/Container";

const framework = [
  {
    step: "01",
    title: "Technical SEO Foundation",
    description:
      "Every successful SEO campaign begins with a technically healthy website. I improve crawlability, indexing, Core Web Vitals, structured data, internal linking and overall site architecture.",
  },
  {
    step: "02",
    title: "Search Intent & Keyword Research",
    description:
      "Rather than chasing high-volume keywords, I identify search intent and opportunities that align with business goals and customer needs.",
  },
  {
    step: "03",
    title: "Content & Topical Authority",
    description:
      "I create content structures that demonstrate expertise, answer user questions, and build topical authority around core business services.",
  },
  {
    step: "04",
    title: "Local SEO & Entity Optimization",
    description:
      "For local businesses, I optimize Google Business Profiles, citations, local landing pages and entity signals that improve visibility in local search and AI-powered search experiences.",
  },
  {
    step: "05",
    title: "AI Visibility Optimization",
    description:
      "Modern SEO goes beyond Google. I structure websites so they are more understandable by AI assistants like ChatGPT, Gemini, Claude and Grok using entity reinforcement, semantic relationships and trust signals.",
  },
  {
    step: "06",
    title: "Measurement & Continuous Improvement",
    description:
      "SEO is an ongoing process. I monitor rankings, traffic, conversions, indexing, technical health and AI discoverability to continually improve long-term performance.",
  },
];

export default function SEOFramework() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-600">
            My SEO Framework
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            A Repeatable Process for Sustainable Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every project follows a structured framework designed to improve
            technical performance, search visibility and long-term business
            growth—not short-term ranking tricks.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {framework.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:border-green-500 hover:shadow-lg"
            >
              <span className="text-sm font-bold tracking-widest text-green-600">
                {item.step}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}