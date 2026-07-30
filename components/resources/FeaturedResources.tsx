import Link from "next/link";
import Container from "@/components/layout/Container";

const resources = [
  {
    title: "Technical SEO Checklist",
    description:
      "Improve crawlability, indexing, Core Web Vitals and your website's technical foundation with this practical checklist.",
    href: "/resources/downloads/technical-seo-checklist",
    category: "Checklist",
  },
  {
    title: "Local SEO Checklist",
    description:
      "Follow a proven checklist to improve your Google Business Profile, citations, reviews and local search visibility.",
    href: "/resources/downloads/local-seo-checklist",
    category: "Checklist",
  },
  {
    title: "AI Visibility Checklist",
    description:
      "Learn the practical steps to improve your visibility across ChatGPT, Gemini, Claude and Perplexity.",
    href: "/resources/downloads/ai-visibility-checklist",
    category: "AI SEO",
  },
  {
    title: "Website SEO Audit Template",
    description:
      "Use a structured audit template to evaluate your website's technical SEO, on-page optimization and content performance.",
    href: "/resources/downloads/website-seo-audit-template",
    category: "Template",
  },
  {
    title: "SEO Content Brief Template",
    description:
      "Plan SEO-friendly content using a reusable template focused on search intent, topical authority and AI visibility.",
    href: "/resources/downloads/seo-content-brief-template",
    category: "Template",
  },
  {
    title: "Keyword Research Workbook",
    description:
      "Organize keywords, search intent and content opportunities with a practical keyword research workbook.",
    href: "/resources/downloads/keyword-research-workbook",
    category: "Template",
  },
];

export default function FeaturedResources() {
  return (
    <section
      id="featured-resources"
      className="bg-gray-50 py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Resources
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Start with our most popular SEO checklists, templates and practical
            resources designed to help businesses improve their search visibility.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {resource.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                {resource.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {resource.description}
              </p>

              <Link
                href={resource.href}
                className="mt-8 inline-flex font-semibold text-green-600 transition hover:text-green-700"
              >
                View Resource →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}