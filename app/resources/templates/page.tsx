import ResourceHero from "@/components/resources/ResourceHero";
import ResourceList from "@/components/resources/ResourceList";
import ResourceCTA from "@/components/resources/ResourceCTA";

const resources = [
  {
    title: "Website SEO Audit Template",
    description:
      "Evaluate your website using a structured SEO audit template covering technical SEO, on-page optimization and content performance.",
    href: "/resources/downloads/website-seo-audit-template",
    type: "Free Download",
  },
  {
    title: "SEO Content Brief Template",
    description:
      "Plan SEO-friendly articles with a reusable content brief focused on search intent, topical authority and AI visibility.",
    href: "/resources/downloads/seo-content-brief-template",
    type: "Free Download",
  },
  {
    title: "Keyword Research Workbook",
    description:
      "Organize keywords, search intent and content opportunities using a practical keyword research workbook.",
    href: "/resources/downloads/keyword-research-workbook",
    type: "Free Download",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <ResourceHero
        badge="Resource Library"
        title="SEO Templates"
        description="Download reusable SEO templates and worksheets to simplify keyword research, content planning and website audits."
      />

      <ResourceList resources={resources} />

      <ResourceCTA />
    </>
  );
}