import Container from "@/components/layout/Container";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "I begin by understanding your business, your audience and your current online presence through a comprehensive SEO audit.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "A customized SEO and AI visibility strategy is created based on your goals, competitors and opportunities.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Technical SEO, on-page optimization, local SEO, structured data and content improvements are implemented carefully.",
  },
  {
    number: "04",
    title: "Monitoring & Growth",
    description:
      "Performance is continuously monitored and refined to improve rankings, visibility and business results over time.",
  },
];

export default function SEOProcess() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            My SEO Process
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every project follows a proven process designed to deliver
            measurable improvements while keeping clients informed at every
            stage.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-5xl font-extrabold text-green-600">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
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