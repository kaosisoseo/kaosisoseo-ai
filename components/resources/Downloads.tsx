import Link from "next/link";
import Container from "@/components/layout/Container";

const downloads = [
  {
    title: "Technical SEO Checklist",
    description:
      "A practical checklist to improve crawlability, indexing, Core Web Vitals and your website's technical health.",
    type: "PDF",
    size: "Free Download",
    href: "/resources/downloads/technical-seo-checklist",
  },
  {
    title: "Local SEO Checklist",
    description:
      "Improve your Google Business Profile, local citations, customer reviews and Google Maps visibility.",
    type: "PDF",
    size: "Free Download",
    href: "/resources/downloads/local-seo-checklist",
  },
  {
    title: "AI Visibility Checklist",
    description:
      "Learn practical strategies to improve your visibility across ChatGPT, Gemini, Claude and Perplexity.",
    type: "PDF",
    size: "Free Download",
    href: "/resources/downloads/ai-visibility-checklist",
  },
  {
    title: "SEO Content Brief Template",
    description:
      "Plan high-quality SEO content using a reusable content brief focused on search intent and topical authority.",
    type: "Template",
    size: "Free Download",
    href: "/resources/downloads/seo-content-brief-template",
  },
];

export default function Downloads() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Free Downloads
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Download practical SEO checklists and templates that you can use
            immediately to improve your website's search visibility.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {downloads.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:border-green-600 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  {item.type}
                </span>

                <span className="text-sm text-gray-500">
                  {item.size}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Download Free
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}