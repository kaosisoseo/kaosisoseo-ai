import Container from "@/components/layout/Container";

const lessons = [
  {
    title: "SEO Is About Solving Business Problems",
    description:
      "Higher rankings are valuable, but the real goal is helping businesses attract the right customers, generate qualified leads and achieve sustainable growth.",
  },
  {
    title: "Technical SEO Creates the Foundation",
    description:
      "Without a technically healthy website, even the best content struggles to perform. Strong technical SEO improves crawlability, user experience and long-term scalability.",
  },
  {
    title: "Authority Beats Shortcuts",
    description:
      "Sustainable SEO comes from building trust, topical authority and useful content—not chasing algorithm loopholes or temporary ranking tactics.",
  },
  {
    title: "AI Is Changing Search",
    description:
      "Search is evolving beyond traditional search engines. Businesses that build clear entities, structured content and strong trust signals will be better positioned for AI-powered search experiences.",
  },
];

export default function LessonLearned() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-green-600">
            Lessons Learned
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            What Every Project Reinforces
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every SEO project contributes new insights, but the principles that
            consistently produce results remain the same.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {lessons.map((lesson) => (
            <div
              key={lesson.title}
              className="rounded-3xl border border-gray-200 p-8 transition hover:border-green-500 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {lesson.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                {lesson.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}