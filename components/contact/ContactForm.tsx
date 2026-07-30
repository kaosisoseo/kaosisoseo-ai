export default function ContactForm() {
  return (
    <section id="contact-form" className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900">
        Send a Message
      </h2>

      <p className="mt-3 text-gray-600">
        Tell me about your business and how I can help.
      </p>

      <form className="mt-8 space-y-6">

        <div>
          <label className="mb-2 block font-medium">
            Name
          </label>

          <input
            type="text"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Company (Optional)
          </label>

          <input
            type="text"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Service Needed
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none">
            <option>Technical SEO</option>
            <option>Local SEO</option>
            <option>AI Visibility</option>
            <option>SEO Audit</option>
            <option>Content Strategy</option>
            <option>Website Design</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Project Details
          </label>

          <textarea
            rows={6}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
          />
        </div>

        <button
          className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
        >
          Send Message
        </button>

      </form>
    </section>
  );
}