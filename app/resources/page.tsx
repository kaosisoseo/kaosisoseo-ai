import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourceCategories from "@/components/resources/ResourceCategories";
import FeaturedResources from "@/components/resources/FeaturedResources";
import Downloads from "@/components/resources/Downloads";
import Newsletter from "@/components/resources/Newsletter";
import ResourcesCTA from "@/components/resources/ResourcesCTA";

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourceCategories />
      <FeaturedResources />
      <Downloads />
      <Newsletter />
      <ResourcesCTA />
    </>
  );
}