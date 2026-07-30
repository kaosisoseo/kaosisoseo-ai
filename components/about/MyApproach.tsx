import Container from "@/components/layout/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I begin by understanding your business, audience, competitors, and current search performance to identify opportunities for growth.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Every project starts with a clear SEO strategy tailored to your goals, combining technical improvements, content, and local search optimization.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "I implement improvements across your website to strengthen visibility, usability, and how search engines and AI assistants understand your business.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "SEO is a continuous process. I monitor performance, refine strategies, and focus on sustainable growth that delivers long-term results.",
  },
];

export default function MyApproach() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            My Approach
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            A Structured Process for Sustainable SEO Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every engagement follows a clear, repeatable process designed to
            deliver measurable improvements while preparing your business for
            the future of search.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <span className="text-5xl font-extrabold text-green-600">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}