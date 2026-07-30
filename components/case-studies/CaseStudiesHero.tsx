import Container from "@/components/layout/Container";

export default function CaseStudiesHero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-600">
            SEO Case Studies
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
            SEO Results Backed by Strategy, Not Guesswork
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            Explore how I help businesses improve their visibility across
            Google Search, Local Search and AI-powered search experiences
            through Technical SEO, Local SEO and AI Visibility strategies.
          </p>
        </div>
      </Container>
    </section>
  );
}