import ResourceHero from "@/components/resources/ResourceHero";
import ResourceList from "@/components/resources/ResourceList";
import ResourceCTA from "@/components/resources/ResourceCTA";

const resources = [
  {
    title: "Local SEO Checklist",
    description:
      "Download a practical checklist to improve your Google Business Profile, local citations, reviews and Google Maps visibility.",
    href: "/resources/downloads/local-seo-checklist",
    type: "Free Download",
  },
];

export default function LocalSEOPage() {
  return (
    <>
      <ResourceHero
        badge="Resource Library"
        title="Local SEO Resources"
        description="Explore practical Local SEO resources designed to help your business rank higher in Google Search, Google Maps and local search results."
      />

      <ResourceList resources={resources} />

      <ResourceCTA />
    </>
  );
}