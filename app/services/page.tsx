import Script from "next/script";
import Container from "@/components/layout/Container";
import ServicesCTA from "@/components/services/ServicesCTA";

const services = [
  {
    title: "Technical SEO",
    description:
      "Improve crawlability, indexing, Core Web Vitals, site architecture, structured data, XML sitemaps and technical performance so search engines can understand your website.",
    deliverables: [
      "Technical SEO Audit",
      "Core Web Vitals",
      "Schema Markup",
      "Site Architecture",
      "Indexing & Crawl Optimization",
    ],
  },
  {
    title: "Local SEO",
    description:
      "Increase your visibility in Google Search and Google Maps through local optimization strategies that help nearby customers discover your business.",
    deliverables: [
      "Google Business Profile",
      "Local Citations",
      "Location Pages",
      "Review Strategy",
      "Local Keyword Research",
    ],
  },
  {
    title: "AI Visibility",
    description:
      "Optimize your website so businesses can become discoverable inside AI assistants such as ChatGPT, Google AI Overviews, Gemini, Claude, Grok and other emerging AI search platforms.",
    deliverables: [
      "Entity Optimization",
      "Topical Authority",
      "Structured Content",
      "Knowledge Reinforcement",
      "AI Search Optimization",
    ],
  },
  {
    title: "SEO Audits",
    description:
      "Receive a comprehensive audit identifying technical issues, content opportunities, keyword gaps and growth recommendations.",
    deliverables: [
      "Technical Audit",
      "Content Audit",
      "Competitor Analysis",
      "Keyword Gap Analysis",
      "Priority Action Plan",
    ],
  },
  {
    title: "Website Design",
    description:
      "Build modern, SEO-friendly websites that are fast, responsive and optimized for search engines from day one.",
    deliverables: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Foundations",
      "Conversion Focus",
      "Accessibility",
    ],
  },
  {
    title: "Content Strategy",
    description:
      "Develop content that builds topical authority, answers user intent and supports long-term organic growth.",
    deliverables: [
      "Keyword Research",
      "Content Planning",
      "SEO Copywriting",
      "Internal Linking",
      "Content Optimization",
    ],
  },
  {
    title: "E-commerce SEO",
    description:
      "Optimize online stores for higher organic visibility, improved product rankings, category page performance and increased revenue from search.",
    deliverables: [
      "Product Page SEO",
      "Category Page Optimization",
      "Technical E-commerce SEO",
      "Structured Product Schema",
      "Conversion Optimization",
    ],
  },
];

const serviceSchema = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",

  name: service.title,

  description: service.description,

  provider: {
    "@id": "https://kaosisoseo-ai.vercel.app/#person",
  },

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Worldwide",
  },

  url: "https://kaosisoseo-ai.vercel.app/services",
}));

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <section className="bg-gray-50 py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Services
            </span>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
              SEO Strategies That Drive Sustainable Growth
            </h1>

            <p className="mt-6 text-xl leading-8 text-gray-600">
              Every business is different. My approach combines Technical SEO,
              Local SEO and AI Visibility strategies to improve search
              performance while building long-term authority across both Google
              and AI-powered search experiences.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Work With Kaosiso SEO?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              My work focuses on building sustainable organic visibility rather
              than chasing short-term ranking gains. Every strategy is designed
              to strengthen your website's technical foundation, improve search
              performance and increase visibility across both traditional search
              engines and AI-powered search experiences.
            </p>
          </div>
        </Container>
      </section>

      <ServicesCTA />
    </>
  );
}