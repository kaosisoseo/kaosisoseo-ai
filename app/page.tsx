import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import FeaturedCaseStudies from "@/components/home/FeaturedCaseStudies";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import SEOProcess from "@/components/home/SEOProcess";
import Credibility from "@/components/home/Credibility";
import Certifications from "@/components/home/Certifications";
import WhatClientsValue from "@/components/home/WhatClientsValue";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedCaseStudies />
      <WhyChooseMe />
      <SEOProcess />
      <Credibility />
      <Certifications />
      <WhatClientsValue />
      <FAQ />
      <CallToAction />
    </>
  );
}