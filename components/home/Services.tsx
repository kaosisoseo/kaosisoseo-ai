import Container from "@/components/layout/Container";

const services = [
  {
    title: "Technical SEO",
    description:
      "Improve website speed, indexing, Core Web Vitals, crawlability and technical performance.",
  },
  {
    title: "Local SEO",
    description:
      "Rank your business in Google Maps and dominate local search results.",
  },
  {
    title: "AI Visibility (GEO & AEO)",
    description:
      "Increase your chances of being recommended by ChatGPT, Gemini, Claude and Perplexity.",
  },
  {
    title: "Website Design",
    description:
      "Build fast, SEO-friendly websites designed to convert visitors into customers.",
  },
  {
    title: "SEO Content Strategy",
    description:
      "Create topical authority with content that ranks on Google and answers AI search queries.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track rankings, traffic, conversions and business growth with clear performance dashboards.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Services That Grow Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every strategy is designed to improve your visibility,
            generate qualified leads and position your business for
            long-term growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}