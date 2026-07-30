import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import FeaturedProjects from "@/components/case-studies/FeaturedProjects";
import SEOFramework from "@/components/case-studies/SEOFramework";
import ToolsUsed from "@/components/case-studies/ToolsUsed";
import LessonsLearned from "@/components/case-studies/LessonsLearned";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <FeaturedProjects />
      <SEOFramework/>
      <ToolsUsed />
      <LessonsLearned/>
      <CaseStudiesCTA/>

    </>
  );
}