import ResourceHero from "@/components/resources/ResourceHero";
import ResourceList from "@/components/resources/ResourceList";
import ResourceCTA from "@/components/resources/ResourceCTA";

const resources = [
  {
    title: "Technical SEO Checklist",
    description:
      "A practical 10-page checklist to help you improve crawlability, indexing, Core Web Vitals, website performance and overall technical SEO health.",
    href: "/resources/downloads/technical-seo-checklist",
  },
  {
    title: "Local SEO Checklist",
    description:
      "A step-by-step guide to improving your Google Business Profile, local citations, online reviews and visibility in Google Search and Google Maps.",
    href: "/resources/downloads/local-seo-checklist",
  },
  {
    title: "AI Visibility Checklist",
    description:
      "Learn how to improve your visibility across ChatGPT, Gemini, Perplexity and other AI-powered search platforms using practical AI Visibility strategies.",
    href: "/resources/downloads/ai-visibility-checklist",
  },
  {
    title: "SEO Content Brief Template",
    description:
      "Plan high-quality SEO content with a structured content brief that aligns with search intent, topical authority and AI-friendly content creation.",
    href: "/resources/downloads/seo-content-brief-template",
  },
  {
    title: "Website SEO Audit Template",
    description:
      "Perform professional website audits using a reusable 10-page framework covering technical SEO, on-page optimization, content quality and AI Visibility.",
    href: "/resources/downloads/website-seo-audit-template",
  },
  {
    title: "Keyword Research Workbook",
    description:
      "Discover, organize and prioritize keywords with a practical workbook designed to help you build stronger content strategies and long-term organic growth.",
    href: "/resources/downloads/keyword-research-workbook",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <ResourceHero
        badge="Free SEO Resources"
        title="Free SEO Resources & Downloads"
        description="Explore our growing collection of practical SEO checklists, templates, workbooks and audit resources designed to help you improve your website's visibility in both traditional search engines and AI-powered search experiences."
      />

      <ResourceList resources={resources} />

      <ResourceCTA />
    </>
  );
}