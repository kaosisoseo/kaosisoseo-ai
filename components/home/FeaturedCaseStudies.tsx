import Container from "@/components/layout/Container";

const caseStudies = [
  {
    title: "Local SEO Growth for a Service Business",

    challenge:
      "A local service business had limited online visibility, making it difficult for potential customers to discover its services through Google Search.",

    strategy:
      "Implemented a comprehensive SEO strategy that included technical SEO, local SEO, Google Business Profile optimization, structured content, on-page optimization, and website improvements to strengthen search performance.",

    result:
      "Built a strong local search presence, improved Google visibility, increased qualified organic traffic, and established a sustainable foundation for long-term organic growth.",
  },

  {
    title: "AI Visibility Optimization",

    challenge:
      "Explore how a local business could become visible not only in Google Search but also in AI assistants such as ChatGPT, Gemini, Claude, and Grok.",

    strategy:
      "Applied entity-focused SEO, topical authority, structured content, consistent business information, schema markup, and trust signals to improve how AI systems understand and recommend the business.",

    result:
      "Successfully improved the business's visibility in AI-generated recommendations. The project also inspired a LinkedIn article explaining how businesses can optimize for AI search and recommendation systems beyond traditional Google rankings.",
  },

  {
    title: "SEO & AI Visibility Framework",

    challenge:
      "Develop a repeatable SEO methodology that delivers consistent results for local businesses while preparing them for the future of AI-powered search.",

    strategy:
      "Created a structured framework combining technical SEO, local SEO, content strategy, entity optimization, and AI Visibility techniques into a single scalable process.",

    result:
      "The framework now serves as the foundation of every SEO engagement, helping businesses improve search rankings while increasing their visibility across Google and modern AI assistants.",
  },
];

export default function FeaturedCaseStudies() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Case Studies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every project begins with understanding the client's challenge,
            developing a clear strategy and delivering measurable improvements
            in search visibility.
          </p>
        </div>

        <div className="space-y-10">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-3xl bg-white p-10 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="mb-8 text-3xl font-bold text-gray-900">
                {study.title}
              </h3>

              <div className="grid gap-8 lg:grid-cols-3">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-green-600">
                    Challenge
                  </h4>

                  <p className="leading-7 text-gray-600">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-semibold text-green-600">
                    Strategy
                  </h4>

                  <p className="leading-7 text-gray-600">
                    {study.strategy}
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-semibold text-green-600">
                    Results
                  </h4>

                  <p className="leading-7 text-gray-600">
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}