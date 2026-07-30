import ResourceHero from "@/components/resources/ResourceHero";
import ResourceList from "@/components/resources/ResourceList";
import ResourceCTA from "@/components/resources/ResourceCTA";

const resources = [
  {
    title: "Technical SEO Checklist",
    description:
      "Use this practical implementation checklist to improve crawlability, indexing, Core Web Vitals and technical SEO.",
    href: "/resources/downloads/technical-seo-checklist",
    type: "Free Download",
  },
  {
    title: "Local SEO Checklist",
    description:
      "Follow a proven checklist to improve your Google Business Profile, citations, reviews and local rankings.",
    href: "/resources/downloads/local-seo-checklist",
    type: "Free Download",
  },
  {
    title: "AI Visibility Checklist",
    description:
      "Learn the practical steps to improve your visibility across ChatGPT, Gemini, Claude and Perplexity.",
    href: "/resources/downloads/ai-visibility-checklist",
    type: "Free Download",
  },
];

export default function PlaybooksPage() {
  return (
    <>
      <ResourceHero
        badge="Resource Library"
        title="SEO Playbooks"
        description="Download practical implementation checklists and frameworks that help you execute Technical SEO, Local SEO and AI Visibility strategies."
      />

      <ResourceList resources={resources} />

      <ResourceCTA />
    </>
  );
}