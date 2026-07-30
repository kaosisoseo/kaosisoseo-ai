import ResourceHero from "@/components/resources/ResourceHero";
import ResourceCTA from "@/components/resources/ResourceCTA";

export default function WebsiteSEOAuditTemplatePage() {
  return (
    <>
      <ResourceHero
        badge="Free SEO Audit Resource"
        title="Website SEO Audit Template"
        description="Download a practical Website SEO Audit Template to help you evaluate your website's technical SEO, on-page optimization, content quality and AI Visibility."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Why Every Website Needs an SEO Audit
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            An SEO audit helps you identify technical issues, content gaps and
            optimization opportunities that may be limiting your website's
            performance. This template provides a structured framework for
            evaluating your website and prioritizing improvements.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">📊</div>

              <h3 className="mt-5 text-2xl font-bold">
                Audit Your Website
              </h3>

              <p className="mt-4 text-gray-600">
                Review the most important SEO elements using one structured
                checklist.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🔍</div>

              <h3 className="mt-5 text-2xl font-bold">
                Find SEO Issues
              </h3>

              <p className="mt-4 text-gray-600">
                Discover technical, content and on-page issues that affect
                rankings.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🚀</div>

              <h3 className="mt-5 text-2xl font-bold">
                Prioritize Improvements
              </h3>

              <p className="mt-4 text-gray-600">
                Turn audit findings into a practical action plan for improving
                search performance.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Audit Your Website?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Download the free Website SEO Audit Template and begin evaluating
            your website like an SEO professional.
          </p>

          <a
            href="/downloads/website-seo-audit-template.pdf"
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