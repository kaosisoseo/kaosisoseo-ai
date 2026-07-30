import AboutHero from "@/components/about/AboutHero";
import MyStory from "@/components/about/MyStory";
import WhatMakesMeDifferent from "@/components/about/WhatMakesMeDifferent";
import MyApproach from "@/components/about/MyApproach";
import Tools from "@/components/about/Tools";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MyStory />
      <WhatMakesMeDifferent />
      <MyApproach />
      <Tools />
      <AboutCTA />
    </>
  );
}