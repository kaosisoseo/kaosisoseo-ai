import Container from "@/components/layout/Container";

const caseStudies = [
  {
    title: "Drip Dew Funeral Home",
    challenge:
      "Build a strong online presence for a funeral home serving families in Nigeria and improve local search visibility.",

    strategy:
      "Implemented technical SEO, local SEO, structured content, Google Business Profile optimization and website improvements to strengthen search performance.",

    result:
      "Established a solid local SEO foundation, improved discoverability in Google Search and positioned the business for long-term organic growth.",
  },

  {
    title: "AI Visibility for a Funeral Home",

    challenge:
      "Help a funeral home become visible not only in Google Search but also in AI assistants such as ChatGPT and Grok.",

    strategy:
      "Applied entity-focused SEO, topical authority, structured website content, consistent business information and trust signals to improve how AI systems understand and reference the business.",

    result:
      "The funeral home began appearing in relevant responses from ChatGPT and Grok. The experience also led to publishing a LinkedIn article explaining how AI assistants recommend businesses beyond traditional Google rankings.",
  },

  {
    title: "Local SEO Growth Framework",

    challenge:
      "Create a repeatable SEO process that can be applied across different local businesses.",

    strategy:
      "Combined technical SEO, local search optimization, content strategy, entity development and AI visibility techniques into one structured framework.",

    result:
      "This framework now serves as the foundation for every SEO project, helping businesses build sustainable visibility across both search engines and AI platforms.",
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