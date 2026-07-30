import Container from "@/components/layout/Container";

type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function ResourceHero({
  badge,
  title,
  description,
}: Props) {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl">

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {badge}
          </span>

          <h1 className="mt-8 text-5xl font-bold text-gray-900 lg:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            {description}
          </p>

        </div>
      </Container>
    </section>
  );
}