import Image from "next/image";
import Container from "@/components/layout/Container";

export default function AboutHero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-green-600">
              About Me
            </p>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
              Helping Businesses Get Found on Google and AI Search
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              I'm Kaosiso Ezebuenyi, an SEO Specialist helping businesses
              improve their visibility across Google Search and modern AI
              assistants including ChatGPT, Gemini, Claude and Grok.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              My work combines Technical SEO, Local SEO, Entity Optimization
              and AI Visibility strategies to help businesses earn sustainable
              organic growth while preparing for the future of search.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/kaosiso.jpeg"
              alt="Kaosiso Ezebuenyi"
              width={430}
              height={520}
              className="rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}