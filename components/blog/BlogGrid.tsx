import Container from "@/components/layout/Container";
import Link from "next/link";

const posts = [
  {
    title: "Google Ranks Websites. AI Recommends Businesses.",
    excerpt:
      "Why modern SEO is no longer just about rankings and how AI search is changing online visibility.",
    href: "/blog/google-ranks-ai-recommends",
  },
  {
    title: "Technical SEO Checklist for Small Businesses",
    excerpt:
      "A practical guide to improving crawlability, speed, indexing and overall website health.",
    href: "/blog/technical-seo-checklist",
  },
  {
    title: "Local SEO Strategies That Actually Work",
    excerpt:
      "Learn how Google Business Profile, local citations and on-page optimization work together.",
    href: "/blog/local-seo-strategies",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-gray-200 p-8 transition hover:border-green-500 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                {post.title}
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                {post.excerpt}
              </p>

              <Link
                href={post.href}
                className="mt-8 inline-block font-semibold text-green-600 hover:text-green-700"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}