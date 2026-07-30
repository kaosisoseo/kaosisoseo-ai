import Container from "@/components/layout/Container";

const projects = [
  {
    title: "Local SEO Strategy for a Service-Based Business",

    challenge:
      "The business had limited online visibility and needed a stronger presence in Google Search and local search results.",

    strategy: [
      "Technical SEO improvements",
      "Google Business Profile optimization",
      "Local SEO optimization",
      "Website content improvements",
      "Internal linking",
      "Structured SEO implementation",
    ],

    result:
      "Built a stronger SEO foundation, improved local discoverability and positioned the business for long-term organic growth.",
  },

  {
    title: "AI Visibility Optimization",

    challenge:
      "Help a business become discoverable not only on Google but also within AI assistants such as ChatGPT and Grok.",

    strategy: [
      "Entity optimization",
      "Structured content",
      "Topical authority",
      "Website trust signals",
      "Knowledge reinforcement",
      "AI-friendly content architecture",
    ],

    result:
      "Successfully improved AI discoverability and demonstrated that modern SEO extends beyond traditional search rankings.",
  },

  {
    title: "Scalable SEO Workflow",

    challenge:
      "Develop a repeatable SEO process that could be adapted across multiple industries while maintaining consistent quality.",

    strategy: [
      "Technical SEO",
      "Keyword research",
      "Content planning",
      "Local SEO",
      "Entity optimization",
      "Performance monitoring",
    ],

    result:
      "Created a structured SEO workflow that now serves as the foundation for every optimization project.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-600">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Real Strategies. Sustainable Results.
          </h2>
        </div>

        <div className="mt-16 space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >
              <h3 className="text-3xl font-bold text-gray-900">
                {project.title}
              </h3>

              <div className="mt-8 grid gap-10 lg:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-green-600">
                    Challenge
                  </h4>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600">
                    Strategy
                  </h4>

                  <ul className="mt-4 space-y-2 text-gray-600">
                    {project.strategy.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600">
                    Outcome
                  </h4>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.result}
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