import Image from "next/image";

const certifications = [
  {
    title: "Google Ads Search Certification",
    issuer: "Google",
    year: "2026",
    image: "/certificates/google-ads-search.jpg",
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    year: "2026",
    image: "/certificates/google-analytics.jpg",
  },
  {
    title: "HubSpot SEO II Certification",
    issuer: "HubSpot Academy",
    year: "2026",
    image: "/certificates/hubspot-seo-ii.jpg",
  },
  {
    title: "Google Digital Marketing",
    issuer: "Google Digital Skills for Africa",
    year: "2020",
    image: "/certificates/google-digital-marketing.jpg",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-green-600 font-semibold uppercase tracking-wide">
            Certifications
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Proven Skills. Recognized by Industry Leaders.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Industry-recognized certifications that support my expertise in
            Technical SEO, Local SEO, AI Visibility, Google Search and Digital
            Marketing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={420}
                  className="rounded-t-2xl object-cover"
                />
              </a>

              <div className="p-6">
                <h3 className="font-semibold text-gray-900">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {cert.issuer}
                </p>

                <p className="text-sm text-gray-500">
                  {cert.year}
                </p>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}