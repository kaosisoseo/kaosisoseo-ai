import Container from "@/components/layout/Container";

export default function BlogHero() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-600">
            SEO Insights
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
            SEO, AI Visibility & Digital Growth
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            Practical articles on Technical SEO, Local SEO, AI Visibility,
            website optimization, content strategy and the future of search.
          </p>
        </div>
      </Container>
    </section>
  );
}