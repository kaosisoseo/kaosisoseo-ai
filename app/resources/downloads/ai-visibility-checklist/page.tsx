import ResourceHero from "@/components/resources/ResourceHero";
import ResourceCTA from "@/components/resources/ResourceCTA";

export default function AIVisibilityChecklistPage() {
  return (
    <>
      <ResourceHero
        badge="Free AI Visibility Resource"
        title="AI Visibility Checklist"
        description="Download a practical AI Visibility Checklist designed to help your business become more discoverable across ChatGPT, Gemini, Perplexity and other AI-powered search platforms."
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Why AI Visibility Matters
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Search is changing. More people are asking AI assistants for
            recommendations instead of using traditional search engines. This
            checklist helps you build the trust, authority and structured
            information that AI systems use to recommend businesses.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🤖</div>
              <h3 className="mt-5 text-2xl font-bold">
                Build Trust
              </h3>
              <p className="mt-4 text-gray-600">
                Create content and signals that establish your business as a
                trustworthy source.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🌐</div>
              <h3 className="mt-5 text-2xl font-bold">
                Strengthen Your Entity
              </h3>
              <p className="mt-4 text-gray-600">
                Help AI understand who you are, what you do and where your
                business operates.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="text-5xl">🚀</div>
              <h3 className="mt-5 text-2xl font-bold">
                Increase Visibility
              </h3>
              <p className="mt-4 text-gray-600">
                Improve your chances of being referenced by AI-powered search
                experiences.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Improve Your AI Visibility?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Download the free AI Visibility Checklist and start preparing your
            business for the future of AI-powered search.
          </p>

          <a
            href="/downloads/ai-visibility-checklist.pdf"
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