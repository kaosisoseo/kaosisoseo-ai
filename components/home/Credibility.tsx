import Container from "@/components/layout/Container";

const points = [
  {
    title: "Research-Driven SEO",
    description:
      "Every recommendation is backed by research, analytics and industry best practices rather than assumptions.",
  },
  {
    title: "Google + AI Visibility",
    description:
      "My strategies are designed for both traditional search engines and modern AI assistants such as ChatGPT, Gemini, Claude and Grok.",
  },
  {
    title: "Continuous Learning",
    description:
      "SEO and AI search evolve constantly. I stay current with new technologies, search updates and emerging best practices.",
  },
];

export default function Credibility() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Built on Trust, Strategy and Results
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            My focus is helping businesses build long-term visibility through
            ethical SEO practices, technical excellence and AI-ready strategies.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:border-green-600 hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {point.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}