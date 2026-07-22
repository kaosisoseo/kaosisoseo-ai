import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import FeaturedCaseStudies from "@/components/home/FeaturedCaseStudies";
import WhyChooseMe from "@/components/home/WhyChooseMe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedCaseStudies />
      <WhyChooseMe />
    </>
  );
}