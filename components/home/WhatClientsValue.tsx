const values = [
  {
    title: "Clear Communication",
    description:
      "Every project includes transparent communication, regular progress updates, and clear explanations so you always understand what is being done and why.",
  },
  {
    title: "Sustainable Growth",
    description:
      "I focus on building long-term organic visibility through ethical SEO strategies that continue delivering results over time instead of relying on short-term tactics.",
  },
  {
    title: "AI-Ready SEO",
    description:
      "Beyond Google rankings, I help businesses strengthen their visibility across AI assistants such as ChatGPT, Gemini, Claude, and Grok through modern SEO and entity optimization.",
  },
];

export default function WhatClientsValue() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Working Together
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            What Clients Value
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            My approach is built on transparency, measurable results, and
            sustainable SEO strategies that help businesses grow with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}