import ResourceHero from "@/components/resources/ResourceHero";
import ResourceCTA from "@/components/resources/ResourceCTA";

export default function SEOContentBriefTemplatePage() {
  return (
    <>
      <ResourceHero
        badge="Free SEO Content Resource"
        title="SEO Content Brief Template"
        description="Download a practical SEO Content Brief Template to help you plan content that aligns with search intent, topical authority and AI-powered search."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Plan Better Content Before You Write
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Great SEO content starts with a clear strategy. This template helps
            you organize keywords, search intent, audience goals, page
            structure and optimization opportunities before writing your first
            draft.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">📝</div>

              <h3 className="mt-5 text-2xl font-bold">
                Organize Ideas
              </h3>

              <p className="mt-4 text-gray-600">
                Plan every article using a consistent SEO-focused workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🎯</div>

              <h3 className="mt-5 text-2xl font-bold">
                Match Search Intent
              </h3>

              <p className="mt-4 text-gray-600">
                Create content that answers the questions your audience is
                actually searching for.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🚀</div>

              <h3 className="mt-5 text-2xl font-bold">
                Publish With Confidence
              </h3>

              <p className="mt-4 text-gray-600">
                Ensure every article is optimized before it goes live.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Plan Better SEO Content?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Download the free SEO Content Brief Template and streamline your
            content creation process.
          </p>

          <a
            href="/downloads/seo-content-brief-template.pdf"
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