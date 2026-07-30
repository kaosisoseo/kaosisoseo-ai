export default function ContactInfo() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">
        Contact Information
      </h2>

      <p className="mt-4 text-gray-600">
        I work with businesses and brands worldwide, providing SEO consulting,
        Technical SEO, Local SEO, AI Visibility, and organic growth strategies
        through fully remote collaboration.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900">Email</h3>

          <div className="mt-2 space-y-1">
            <a
              href="mailto:contactdripdew@gmail.com"
              className="block text-green-600 hover:underline"
            >
              contactdripdew@gmail.com
            </a>

            <a
              href="mailto:ezebuenyikaosiso@gmail.com"
              className="block text-green-600 hover:underline"
            >
              ezebuenyikaosiso@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/kaosiso-ezebuenyi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            linkedin.com/in/kaosiso-ezebuenyi
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Availability</h3>

          <p className="text-gray-600">Monday – Sunday</p>

          <p className="text-gray-600">
            Remote collaboration worldwide
          </p>
        </div>
      </div>
    </section>
  );
}