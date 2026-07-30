import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata = {
title: "Technical SEO Checklist for Small Businesses | Kaosiso SEO",
description:
"A practical technical SEO checklist covering crawlability, indexing, Core Web Vitals, structured data and website performance improvements for small businesses.",
};

export default function BlogPost() {
return ( <article className="py-20"> <Container> <div className="mx-auto max-w-4xl"> <Link
         href="/blog"
         className="font-medium text-green-600 hover:text-green-700"
       >
← Back to Blog </Link>

```
      <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
        Technical SEO
      </p>

      <h1 className="mt-5 text-5xl font-extrabold leading-tight text-gray-900">
        Technical SEO Checklist for Small Businesses
      </h1>

      <p className="mt-8 text-xl leading-9 text-gray-600">
        Technical SEO is the foundation of organic visibility. If search
        engines cannot crawl, index and understand your website properly,
        even excellent content may struggle to rank.
      </p>

      <div className="my-16 h-px bg-gray-200" />

      <h2 className="text-3xl font-bold text-gray-900">
        Core Technical SEO Checklist
      </h2>

      <ul className="mt-8 space-y-4 text-gray-700">
        <li>✓ HTTPS enabled</li>
        <li>✓ Mobile-friendly design</li>
        <li>✓ Fast page loading speed</li>
        <li>✓ Proper title tags and meta descriptions</li>
        <li>✓ XML sitemap submitted to Google Search Console</li>
        <li>✓ Robots.txt configured correctly</li>
        <li>✓ No broken internal links</li>
        <li>✓ Canonical tags implemented</li>
        <li>✓ Structured data where appropriate</li>
        <li>✓ Core Web Vitals monitored regularly</li>
      </ul>

      <h2 className="mt-16 text-3xl font-bold text-gray-900">
        Start With Crawlability
      </h2>

      <p className="mt-6 leading-8 text-gray-700">
        Ensure important pages are accessible through internal links and not
        blocked by robots.txt or noindex tags.
      </p>

      <h2 className="mt-16 text-3xl font-bold text-gray-900">
        Improve Page Speed
      </h2>

      <p className="mt-6 leading-8 text-gray-700">
        Compress images, use modern formats, minimize unused JavaScript and
        leverage browser caching to improve Core Web Vitals.
      </p>

      <h2 className="mt-16 text-3xl font-bold text-gray-900">
        Monitor Indexing
      </h2>

      <p className="mt-6 leading-8 text-gray-700">
        Google Search Console is essential for identifying indexing issues,
        crawl errors and pages that are not being discovered by Google.
      </p>

      <div className="mt-20 rounded-3xl bg-green-600 p-10 text-white">
        <h2 className="text-3xl font-bold">
          Need a technical SEO audit?
        </h2>

        <p className="mt-5 text-lg leading-8 text-green-100">
          I can review your website, identify technical issues and provide a
          prioritized action plan for improving search performance.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-green-700 hover:bg-gray-100"
        >
          Request an Audit
        </Link>
      </div>
    </div>
  </Container>
</article>

);
}
