import ResourceHero from "@/components/resources/ResourceHero";
import ResourceList from "@/components/resources/ResourceList";
import ResourceCTA from "@/components/resources/ResourceCTA";

const resources = [
  {
    title: "AI Visibility Checklist",
    description:
      "Download a practical checklist for improving your visibility across ChatGPT, Gemini, Perplexity and other AI-powered search platforms.",
    href: "/resources/downloads/ai-visibility-checklist",
    type: "Free Download",
  },
];

export default function AIVisibilityPage() {
  return (
    <>
      <ResourceHero
        badge="Resource Library"
        title="AI Visibility Resources"
        description="Explore practical AI Visibility resources designed to help your business become more discoverable across AI-powered search experiences."
      />

      <ResourceList resources={resources} />

      <ResourceCTA />
    </>
  );
}