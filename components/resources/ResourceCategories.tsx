import Link from "next/link";
import Container from "@/components/layout/Container";

const categories = [
  {
    title: "Technical SEO",
    description:
      "Improve website health, crawlability, indexing and Core Web Vitals.",
    href: "/resources/technical-seo",
    icon: "⚙️",
  },
  {
    title: "Local SEO",
    description:
      "Learn how to improve visibility in Google Search and Google Maps.",
    href: "/resources/local-seo",
    icon: "📍",
  },
  {
    title: "AI Visibility",
    description:
      "Discover strategies for becoming more discoverable in AI-powered search experiences.",
    href: "/resources/ai-visibility",
    icon: "🤖",
  },
  {
    title: "SEO Templates",
    description:
      "Download reusable templates for audits, metadata, planning and optimization.",
    href: "/resources/templates",
    icon: "📄",
  },
  {
    title: "SEO Playbooks",
    description:
      "Step-by-step implementation frameworks for different business types.",
    href: "/resources/playbooks",
    icon: "📘",
  },
  {
    title: "Free Downloads",
    description:
      "Access downloadable checklists, worksheets and practical SEO resources.",
    href: "/resources/downloads",
    icon: "⬇️",
  },
];

export default function ResourceCategories() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore by Category
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Browse practical SEO resources organised by topic to help you
            learn, implement and improve your organic visibility.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
            >
              <div className="text-4xl">
                {category.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-green-600">
                {category.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {category.description}
              </p>

              <span className="mt-6 inline-flex font-semibold text-green-600">
                Explore →
              </span>
            </Link>
          ))}

        </div>

      </Container>
    </section>
  );
}