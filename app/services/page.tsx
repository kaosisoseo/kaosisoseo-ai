import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Container from "@/components/layout/Container";
import ServicesCTA from "@/components/services/ServicesCTA";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb";
import { services } from "@/lib/service-content";

const siteUrl = "https://kaosisoseo-ai.vercel.app";

export const metadata: Metadata = {
  title: "SEO Services, Local SEO & AI Search Visibility",
  description: "Explore SEO services from Kaosiso Ezebuenyi, including AI search visibility, Local SEO, technical SEO, content optimization, SEO-focused websites, and SEO audits.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "SEO Services | Kaosiso SEO",
    description: "Practical SEO, local search, and AI visibility services for businesses.",
    url: `${siteUrl}/services`,
    type: "website",
  },
};

const serviceSchema = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/services/${service.slug}#service`,
  name: service.title,
  serviceType: service.title,
  description: service.metaDescription,
  provider: { "@id": `${siteUrl}/#person` },
  areaServed: "Worldwide",
  url: `${siteUrl}/services/${service.slug}`,
}));

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: siteUrl },
  { name: "Services", url: `${siteUrl}/services` },
]);

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
      />
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <section className="bg-gray-950 py-20 text-white sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              SEO Services · Kaosiso_SEO
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Get found on search. Build visibility that supports your business.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
              I’m Kaosiso Ezebuenyi, an Organic Search and AI Visibility Specialist. I help businesses improve their presence on Google, Google Maps, and AI-powered search through focused SEO work built around their goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://cal.com/ezebuenyik/30min" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
                Book a Strategy Call
              </a>
              <Link href="/case-studies" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                View Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Choose the support your business needs
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Every business starts from a different place. Explore each service to understand the work involved, how we would approach it, and the engagement options available.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.slug} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">
                <p className="text-sm font-bold text-green-700">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold text-gray-950">{service.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-gray-600">{service.intro}</p>
                <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-green-800 hover:text-green-950">
                  Explore service <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">How I work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Clear priorities, practical implementation, honest reporting
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              I focus on understanding your current position, finding the most useful opportunities, and agreeing on a realistic plan. I do not promise guaranteed rankings or AI recommendations. The work is tailored to your business, market, and goals.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              { title: "One-time projects", text: "Get focused help with an audit, profile optimization, content improvement, or another defined SEO task." },
              { title: "Monthly support", text: "Continue with agreed implementation, monitoring, refinement, and reporting over time." },
              { title: "Negotiable pricing", text: "Pricing depends on scope, competition, site needs, and ongoing support. Deliverables are agreed before work starts." }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ServicesCTA />
    </>
  );
}
