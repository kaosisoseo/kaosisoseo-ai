import ResourceHero from "@/components/resources/ResourceHero";
import ResourceCTA from "@/components/resources/ResourceCTA";

export default function KeywordResearchWorkbookPage() {
  return (
    <>
      <ResourceHero
        badge="Free Keyword Research Resource"
        title="Keyword Research Workbook"
        description="Download a practical Keyword Research Workbook to discover, organize and prioritize keywords that support long-term SEO growth and AI Visibility."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Build Smarter Keyword Strategies
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Keyword research is the foundation of every successful SEO
            strategy. This workbook helps you organize keyword ideas,
            understand search intent, evaluate competition and prioritize
            opportunities that drive long-term organic growth.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🔍</div>

              <h3 className="mt-5 text-2xl font-bold">
                Discover Keywords
              </h3>

              <p className="mt-4 text-gray-600">
                Collect keyword ideas from multiple sources and organize them
                in one place.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">📊</div>

              <h3 className="mt-5 text-2xl font-bold">
                Prioritize Opportunities
              </h3>

              <p className="mt-4 text-gray-600">
                Compare search volume, competition and intent to identify your
                best opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🚀</div>

              <h3 className="mt-5 text-2xl font-bold">
                Plan Future Content
              </h3>

              <p className="mt-4 text-gray-600">
                Turn keyword research into an organized content roadmap that
                supports sustainable SEO growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Build a Better SEO Strategy?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Download the free Keyword Research Workbook and organize your SEO
            strategy with confidence.
          </p>

          <a
            href="/downloads/keyword-research-workbook.pdf"
            download
            className="mt-8 inline-flex rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            Download Free PDF
          </a>

        </div>
      </section>

      <ResourceCTA />
    </>
  );
}