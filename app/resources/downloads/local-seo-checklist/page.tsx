import ResourceHero from "@/components/resources/ResourceHero";
import ResourceCTA from "@/components/resources/ResourceCTA";

export default function LocalSEOChecklistPage() {
  return (
    <>
      <ResourceHero
        badge="Free Local SEO Resource"
        title="Local SEO Checklist"
        description="Download a practical Local SEO Checklist designed to help you improve your Google Business Profile, local citations, online reviews and visibility in Google Search and Google Maps."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Why Local SEO Matters
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Local SEO helps customers find your business when they search for
            products or services in your area. This checklist provides a simple,
            practical framework for improving your local search visibility and
            attracting more customers.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">📍</div>
              <h3 className="mt-5 text-2xl font-bold">
                Google Business Profile
              </h3>
              <p className="mt-4 text-gray-600">
                Optimize your profile so customers can easily find accurate
                business information.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">⭐</div>
              <h3 className="mt-5 text-2xl font-bold">
                Customer Reviews
              </h3>
              <p className="mt-4 text-gray-600">
                Learn how reviews improve trust and strengthen your local
                rankings.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🗺️</div>
              <h3 className="mt-5 text-2xl font-bold">
                Local Rankings
              </h3>
              <p className="mt-4 text-gray-600">
                Follow proven Local SEO practices that improve visibility in
                Google Search and Google Maps.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Improve Your Local Visibility?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Download the free Local SEO Checklist and start improving your local
            search presence today.
          </p>

          <a
            href="/downloads/local-seo-checklist.pdf"
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