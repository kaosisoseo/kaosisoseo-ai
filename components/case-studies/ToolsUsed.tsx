import Container from "@/components/layout/Container";

const tools = [
  "Google Search Console",
  "Google Analytics 4",
  "Google Business Profile",
  "Ahrefs",
  "SEMrush",
  "Ubersuggest",
  "Screaming Frog SEO Spider",
  "PageSpeed Insights",
  "Google PageSpeed API",
  "Schema.org Markup",
  "Google Rich Results Test",
  "Cloudflare",
  "WordPress",
];

export default function ToolsUsed() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-600">
            Tools & Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Professional SEO Toolkit
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I combine industry-leading SEO tools with strategic thinking to
            identify opportunities, solve technical issues, monitor
            performance and improve long-term search visibility.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-2xl border border-gray-200 bg-white px-6 py-5 text-center font-medium text-gray-700 shadow-sm transition hover:-translate-y-1 hover:border-green-500 hover:shadow-md"
            >
              {tool}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}