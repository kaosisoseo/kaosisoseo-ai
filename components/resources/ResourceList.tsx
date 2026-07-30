import Link from "next/link";
import Container from "@/components/layout/Container";

type Resource = {
  title: string;
  description: string;
  href: string;
};

type Props = {
  resources: Resource[];
};

export default function ResourceList({
  resources,
}: Props) {
  return (
    <section className="py-24">
      <Container>

        <div className="space-y-8">

          {resources.map((resource) => (
            <article
              key={resource.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-green-600 hover:shadow-lg"
            >

              <h2 className="text-2xl font-bold text-gray-900">
                {resource.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {resource.description}
              </p>

              <Link
                href={resource.href}
                className="mt-6 inline-flex font-semibold text-green-600 hover:text-green-700"
              >
                Read Guide →
              </Link>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}