import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import { serviceBySlug, services } from "@/lib/service-content";

const siteUrl = "https://kaosisoseo-ai.vercel.app";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  const canonical = `${siteUrl}/services/${service.slug}`;
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: canonical,
      type: "website",
      siteName: "Kaosiso SEO",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.metaDescription,
    },
  };
}

function SectionHeading({ eyebrow, title, dark = false }: { eyebrow?: string; title: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-green-300" : "text-green-700"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-gray-950"}`}>
        {title}
      </h2>
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const canonical = `${siteUrl}/services/${service.slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: canonical },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: canonical,
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: "Worldwide",
  };

  const relatedServices = service.related
    .map((relatedSlug) => serviceBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-white">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-green-700">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services" className="hover:text-green-700">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-gray-800">{service.shortTitle}</li>
          </ol>
        </Container>
      </nav>

      <section className="overflow-hidden bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">{service.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                {service.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">{service.intro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://cal.com/ezebuenyik/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                >
                  Book a Strategy Call
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:border-green-700 hover:text-green-800"
                >
                  Explore Case Studies
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Practical SEO support from Kaosiso Ezebuenyi · Kaosiso_SEO
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-semibold text-green-700">A clear, practical approach</p>
                <h2 className="mt-3 text-2xl font-bold text-gray-950">Understand the gaps. Prioritize the work. Measure progress.</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  The plan is based on your business, current visibility, target market, and the work that makes sense for your goals. No guaranteed rankings or one-size-fits-all package.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Review your current position", "Identify useful opportunities", "Agree on scope and priorities", "Track available evidence"].map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium text-gray-700">
                      <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-800">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="The service" title={service.overviewHeading} />
          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            {service.overview.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-gray-600">{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Who it's for" title="Is this service right for your business?" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.audience.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5">
                <span aria-hidden="true" className="text-xl font-bold text-green-700">✓</span>
                <p className="mt-3 leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What I do" title="What's included in the service" />
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            The final scope depends on your starting point and goals. These are the areas we can prioritize together before work begins.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-green-300 hover:shadow-md">
                <p className="text-sm font-bold text-green-700">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading eyebrow="How we work" title="A straightforward process" dark />
          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold">{index + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-gray-300">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {service.proof && (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">Selected project</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">{service.proof.heading}</h2>
              <div className="mt-7 grid gap-7 md:grid-cols-3">
                <div>
                  <h3 className="font-bold text-gray-950">The challenge</h3>
                  <p className="mt-2 leading-7 text-gray-700">{service.proof.challenge}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-950">The work</h3>
                  <p className="mt-2 leading-7 text-gray-700">{service.proof.work}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-950">Observed outcome</h3>
                  <p className="mt-2 leading-7 text-gray-700">{service.proof.outcome}</p>
                </div>
              </div>
              <p className="mt-6 border-t border-green-200 pt-5 text-sm leading-6 text-gray-600">{service.proof.takeaway}</p>
              <Link href="/case-studies" className="mt-5 inline-flex font-semibold text-green-800 underline underline-offset-4 hover:text-green-950">
                View case studies
              </Link>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Tools and evidence" title="Tools selected for the work" />
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            I use tools to investigate, validate, and monitor relevant issues. Tool selection depends on the website, available access, and agreed project scope.
          </p>
          <ul className="mt-7 flex flex-wrap gap-3">
            {service.tools.map((tool) => (
              <li key={tool} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">{tool}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Engagement options" title="One-time project or ongoing support" />
              <p className="mt-5 leading-8 text-gray-600">
                You can hire me for a defined project, such as an audit or focused optimization, or for monthly support when continued implementation and monitoring are needed.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Pricing is negotiable and depends on the scope, competition, website, number of locations where relevant, and level of ongoing support. We will discuss the requirements and agree on the scope before work begins.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 p-7 sm:p-8">
              <h3 className="text-xl font-bold text-gray-950">How to hire me</h3>
              <ol className="mt-5 space-y-4">
                {[
                  ["Book a strategy call", "Tell me about your business, goals, and current challenges."],
                  ["Discuss the scope", "We identify the work that fits your situation and priorities."],
                  ["Agree on the engagement", "We confirm deliverables, timing, responsibilities, and negotiable pricing before work starts."]
                ].map(([title, description], index) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">{index + 1}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{title}</h4>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a
                href="https://cal.com/ezebuenyik/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Explore more" title="Related services" />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/services/${related.slug}`} className="group rounded-2xl border border-gray-200 p-5 transition hover:border-green-300 hover:shadow-md">
                <h3 className="font-bold text-gray-950 group-hover:text-green-800">{related.shortTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{related.metaDescription}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-green-700">Explore service <span aria-hidden="true" className="ml-1">→</span></span>
              </Link>
            ))}
          </div>
          <Link href="/services" className="mt-7 inline-flex font-semibold text-green-800 underline underline-offset-4">View all services</Link>
        </Container>
      </section>

      <section className="bg-green-800 py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">Let's talk</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Ready to improve your search visibility?</h2>
            <p className="mt-5 text-lg leading-8 text-green-50">
              Tell me what your business is trying to achieve. We can discuss the current gaps, suitable next steps, and whether a one-time project or monthly engagement is the right fit.
            </p>
            <a href="https://cal.com/ezebuenyik/30min" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-green-900 transition hover:bg-green-50">
              Book a Strategy Call
            </a>
          </div>
        </Container>
      </section>

      <ServiceFAQ serviceName={service.shortTitle} items={service.faq} />
    </>
  );
}
