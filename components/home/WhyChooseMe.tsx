import Container from "@/components/layout/Container";

const reasons = [
  {
    title: "SEO + AI Visibility",
    description:
      "I don't just optimize for Google. I help businesses become visible across AI assistants like ChatGPT, Gemini, Claude and Grok.",
  },

  {
    title: "Data-Driven Strategy",
    description:
      "Every recommendation is backed by research, analytics and measurable performance instead of guesswork.",
  },

  {
    title: "Technical Expertise",
    description:
      "From Core Web Vitals and structured data to indexing and technical audits, every website is built on a strong technical foundation.",
  },

  {
    title: "Local SEO Specialist",
    description:
      "Helping local businesses improve Google Maps visibility, local rankings and customer acquisition.",
  },

  {
    title: "Long-Term Growth",
    description:
      "The goal isn't temporary rankings. It's building a sustainable online presence that continues generating leads over time.",
  },

  {
    title: "Transparent Communication",
    description:
      "Clear reporting, honest recommendations and practical strategies that business owners can understand.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Businesses Choose Kaosiso SEO
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            My approach combines technical SEO, local search optimization and
            AI visibility strategies to help businesses grow with confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:border-green-600 hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {reason.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}