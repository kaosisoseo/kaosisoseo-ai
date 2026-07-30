import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-green-700 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Improve Your Organic Visibility?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
          Let's build an SEO strategy that increases your visibility on Google
          and positions your business for the future of AI-powered search.
        </p>

        <Link
          href="mailto:contactdripdew@gmail.com"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-gray-100"
        >
          Start the Conversation
        </Link>

      </div>
    </section>
  );
}