import Container from "@/components/layout/Container";

export default function MyStory() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-600">
            My Story
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Search Is Changing. So Is SEO.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
            <p>
              I began my journey helping local businesses improve their online
              visibility through Technical SEO and Local SEO. As search evolved,
              I realized that ranking on Google alone was no longer enough.
            </p>

            <p>
              Today, customers increasingly ask AI assistants like ChatGPT,
              Gemini, Claude and Grok for recommendations instead of searching
              the traditional way. That shift inspired me to specialize in AI
              Visibility alongside modern SEO.
            </p>

            <p>
              My goal is simple: help businesses become easier to discover,
              easier to trust and easier to choose—whether customers search on
              Google or ask an AI assistant for recommendations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}