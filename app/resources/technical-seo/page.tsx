import ResourceHero from "@/components/resources/ResourceHero";
import ResourceList from "@/components/resources/ResourceList";
import ResourceCTA from "@/components/resources/ResourceCTA";

const resources = [
  {
    title: "Technical SEO Checklist",
    description:
      "Download a practical checklist for improving crawlability, indexing, Core Web Vitals and website performance.",
    href: "/resources/downloads/technical-seo-checklist",
    type: "Free Download",
  },
  {
    title: "Website SEO Audit Template",
    description:
      "Evaluate your website using a structured SEO audit template covering technical SEO, on-page optimization and content performance.",
    href: "/resources/downloads/website-seo-audit-template",
    type: "Free Download",
  },
];

export default function TechnicalSEOPage() {
  return (
    <>
      <ResourceHero
        badge="Resource Library"
        title="Technical SEO Resources"
        description="Explore practical technical SEO resources designed to improve your website's crawlability, indexing, performance and long-term search visibility."
      />

      <ResourceList resources={resources} />

      <ResourceCTA />
    </>
  );
}