import Container from "@/components/layout/Container";

const companies = [
  "Google",
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "HubSpot",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-14">
      <Container>
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
          Trusted technologies and platforms
        </p>

        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-gray-200 bg-white px-6 py-5 font-semibold text-gray-700 shadow-sm transition hover:shadow-md"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}