const tools = [
  "Google Search Console",
  "Google Analytics",
  "Google Ads",
  "Ahrefs",
  "SEMrush",
  "Ubersuggest",
  "Screaming Frog",
  "Google Business Profile",
  "WordPress",
  "Shopify",
  "Canva",
  "Others"
];

export default function Tools() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-wide text-green-600">
            Tools I Use
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            The SEO Tools Behind Every Strategy
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I combine industry-leading SEO tools with proven strategies to
            improve search visibility, local rankings and AI discoverability.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-5 text-center font-medium text-gray-700 shadow-sm transition hover:border-green-500 hover:bg-green-50"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}