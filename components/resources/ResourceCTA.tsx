import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ResourceCTA() {
  return (
    <section className="bg-green-700 py-20 text-white">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold">
            Need Help Implementing These Strategies?
          </h2>

          <p className="mt-6 text-lg text-green-100">
            Reading about SEO is valuable. Implementing the right strategy is
            what drives long-term organic growth.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-green-700 hover:bg-gray-100"
          >
            Request an SEO Consultation
          </Link>

        </div>

      </Container>
    </section>
  );
}