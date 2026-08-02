export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  "@id": "https://kaosisoseo-ai.vercel.app/#person",

  name: "Kaosiso Ezebuenyi",

  url: "https://kaosisoseo-ai.vercel.app",

  image:
    "https://kaosisoseo-ai.vercel.app/images/profile/kaosiso.jpeg",

  jobTitle: "SEO & AI Visibility Strategist",

  description:
    "Helping businesses rank on Google and become recommended by AI assistants through Technical SEO, Local SEO, GEO and AEO.",

  worksFor: {
    "@id": "https://kaosisoseo-ai.vercel.app/#website"
  },

  knowsAbout: [
    "Technical SEO",
    "Local SEO",
    "AI SEO",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "Entity SEO",
    "Google Search",
    "ChatGPT Optimization",
    "SEO Audits",
    "Content Strategy",
    "Core Web Vitals",
    "Google Business Profile",
    "Structured Data",
    "Content Strategy",
    "Website Design"
  ],

  sameAs: [
    "https://www.linkedin.com/in/kaosiso-ezebuenyi/",
    "https://github.com/kaosisoseo"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": "https://kaosisoseo-ai.vercel.app/#website",

  name: "Kaosiso SEO",

  url: "https://kaosisoseo-ai.vercel.app",

  description:
    "Helping businesses rank on Google and become recommended by AI assistants through Technical SEO, Local SEO, GEO and AEO.",

  inLanguage: "en",

  publisher: {
    "@id": "https://kaosisoseo-ai.vercel.app/#person"
  },

  creator: {
    "@id": "https://kaosisoseo-ai.vercel.app/#person"
  }
};