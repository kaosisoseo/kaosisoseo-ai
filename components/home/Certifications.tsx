import Image from "next/image";

const certifications = [
  {
    title: "Google Ads Search Certification",
    issuer: "Google",
    year: "2026",
    image: "/certificates/google-ads-search.jpeg",
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    year: "2026",
    image: "/certificates/google-analytics.jpeg",
  },
  {
    title: "HubSpot SEO II Certification",
    issuer: "HubSpot Academy",
    year: "2026",
    image: "/certificates/hubspot-seo-ii.png",
  },
  {
    title: "Google Digital Marketing Certification",
    issuer: "Google Digital Skills for Africa",
    year: "2020",
    image: "/certificates/google-digital-marketing.png",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Certifications
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Proven Skills. Recognized by Industry Leaders.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            My expertise is backed by globally recognized certifications in
            Technical SEO, Google Search, Analytics, Digital Marketing and AI
            Visibility.
          </p>
        </div>

        {/* Certification Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={700}
                  height={500}
                  className="h-56 w-full object-cover"
                />
              </a>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {cert.issuer}
                </p>

                <p className="text-sm text-gray-500">
                  Issued {cert.year}
                </p>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
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