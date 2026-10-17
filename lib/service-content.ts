export type ServiceFAQItem = { question: string; answer: string };

export type ServiceContent = {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  primaryKeyword: string;
  overviewHeading: string;
  overview: string[];
  audience: string[];
  deliverables: { title: string; description: string }[];
  process: { title: string; description: string }[];
  proof?: { heading: string; challenge: string; work: string; outcome: string; takeaway: string };
  tools: string[];
  faq: ServiceFAQItem[];
  related: string[];
};

export const services: ServiceContent[] = [
  {
    slug: "ai-search-visibility",
    title: "AI Search Visibility (GEO, AEO & AI SEO)",
    shortTitle: "AI Search Visibility",
    seoTitle: "AI Search Visibility, GEO & AEO Services",
    metaDescription: "Improve how your business is understood and cited across AI-powered search. Explore practical GEO, AEO and AI SEO services with Kaosiso Ezebuenyi.",
    eyebrow: "AI SEARCH VISIBILITY",
    headline: "Help your business get discovered and understood in AI-powered search",
    intro: "Search is expanding beyond traditional results pages. I help businesses strengthen the content, technical foundations, and trusted online signals that make it easier for search engines and AI-powered platforms to understand what they do.",
    primaryKeyword: "AI search visibility services",
    overviewHeading: "What is AI search visibility?",
    overview: [
      "AI search visibility focuses on how your business, expertise, products, or services are represented in AI-powered search experiences. These may include ChatGPT, Google AI experiences, Gemini, Perplexity, Claude, and other platforms.",
      "There is no single setting that guarantees an AI recommendation. My work combines established SEO practices with clear entity information, useful content, consistent brand details, and checks of relevant prompts and questions to identify gaps and opportunities."
    ],
    audience: [
      "Businesses that want to understand whether AI assistants mention or recommend them.",
      "Service providers and professional brands building authority in a specific market.",
      "Companies whose competitors appear in AI answers more often than they do.",
      "Organizations improving their visibility across both traditional and AI-powered search."
    ],
    deliverables: [
      { title: "AI visibility review", description: "Check relevant customer prompts and questions across selected AI platforms, then document observed mentions, citations, and gaps." },
      { title: "Entity and brand clarity", description: "Improve how your business name, services, expertise, locations, and relationships are presented across important pages and profiles." },
      { title: "Content structure and answer readiness", description: "Make important pages clearer, more specific, and easier to interpret with useful headings, direct explanations, and supporting evidence." },
      { title: "Technical and structured data review", description: "Review indexability, page structure, relevant schema, and other technical foundations that support search understanding." },
      { title: "Authority and source opportunities", description: "Identify relevant publications, directories, industry resources, and credible mentions that may reinforce your business information." },
      { title: "Tracking and recommendations", description: "Create a repeatable prompt-checking and reporting approach, with prioritized next steps rather than promises of guaranteed citations." }
    ],
    process: [
      { title: "Define the questions that matter", description: "Identify your services, audience, target market, competitors, and the questions potential customers are likely to ask." },
      { title: "Establish a visibility baseline", description: "Check selected prompts and platforms, recording what is and is not surfaced at the time of review." },
      { title: "Find the gaps", description: "Review your site, brand information, content, technical signals, and relevant third-party sources." },
      { title: "Improve and publish", description: "Implement the agreed content, entity, technical, and authority improvements." },
      { title: "Recheck and refine", description: "Repeat selected checks and review available evidence to guide the next round of work." }
    ],
    tools: ["Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs", "Screaming Frog", "Selected AI search platforms"],
    faq: [
      { question: "Can you guarantee that ChatGPT will recommend my business?", answer: "No. AI-generated answers vary by question, platform, location, and time. I can assess current visibility and improve relevant signals, but no provider can guarantee a particular mention or recommendation." },
      { question: "What is the difference between GEO, AEO, and AI SEO?", answer: "The terms overlap. GEO usually refers to optimizing for generative search experiences, AEO focuses on answer-oriented results, and AI SEO describes SEO practices adapted to AI-powered discovery. The work should support real customer discovery rather than depend on labels." },
      { question: "Which AI platforms do you check?", answer: "The platforms depend on your audience and agreed scope. Checks may include ChatGPT, Google AI experiences, Gemini, Perplexity, Claude, and Grok where relevant and accessible." },
      { question: "How do we start?", answer: "Book a strategy call to discuss your business, target audience, and current visibility. We can then agree on the appropriate one-time project or ongoing engagement." }
    ],
    related: ["local-seo-google-maps-optimization", "technical-seo", "on-page-seo-content-optimization"]
  },
  {
    slug: "local-seo-google-maps-optimization",
    title: "Local SEO and Google Maps Optimization",
    shortTitle: "Local SEO & Google Maps",
    seoTitle: "Local SEO Services & Google Maps Optimization",
    metaDescription: "Improve local search visibility with Google Business Profile optimization, local SEO, citations, and competitor research. Explore services with Kaosiso Ezebuenyi.",
    eyebrow: "LOCAL SEO",
    headline: "Help more local customers find your business on Google",
    intro: "When people search for a service near them, your business needs to be visible, relevant, and easy to trust. I help local and service-area businesses improve visibility on Google Search and Google Maps, while strengthening the information that helps search systems understand their services.",
    primaryKeyword: "local SEO services",
    overviewHeading: "What is local SEO and Google Maps optimization?",
    overview: [
      "Local SEO helps businesses become more visible when people search for products or services in a particular location. Google Maps optimization focuses on your Google Business Profile and the other signals that help Google understand and display your business for relevant local searches.",
      "Local visibility depends on factors including relevance, distance, and prominence. I review your profile, website, business information, reviews, local content, relevant mentions, and competitors as connected parts of your online presence. No SEO provider can guarantee a specific map position."
    ],
    audience: [
      "Local service businesses such as funeral homes, plumbers, electricians, cleaners, and contractors.",
      "Professional services, clinics, consultants, and businesses serving a defined market.",
      "Real estate agencies, property consultants, and property investment businesses.",
      "Businesses with physical locations, including restaurants, salons, gyms, and retail stores.",
      "Service-area businesses that travel to customers rather than receiving them at a public address.",
      "Businesses with incomplete profiles, inconsistent details, duplicate listings, or stronger competitors."
    ],
    deliverables: [
      { title: "Local SEO audit and competitor research", description: "Review current visibility, your Google Business Profile, website, listings, and relevant competitors to identify practical opportunities." },
      { title: "Google Business Profile optimization", description: "Review categories, services, business description, attributes, hours, photos, and other available profile features." },
      { title: "Local keyword research", description: "Research how customers search for your services and locations, then map relevant terms to suitable pages and profile content." },
      { title: "Website and on-page local SEO", description: "Improve relevant page titles, headings, service descriptions, internal links, and useful location-specific content." },
      { title: "Business information and citations", description: "Identify inconsistent name, address, phone, and website details, plus inaccurate or duplicate listings that need correction." },
      { title: "Reviews and reputation support", description: "Develop a practical process for requesting genuine reviews and responding professionally. No purchased or fabricated reviews." },
      { title: "Local authority and mentions", description: "Find opportunities for relevant links, local business mentions, associations, and other credible sources." },
      { title: "Reporting and AI visibility checks", description: "Track available profile and website performance data, and check selected AI search queries where included in the agreed scope." }
    ],
    process: [
      { title: "Understand your business", description: "Discuss your services, target locations, ideal customers, and business goals." },
      { title: "Audit local visibility", description: "Review your profile, website, business listings, and competitors to identify the most important gaps." },
      { title: "Build a focused strategy", description: "Prioritize improvements based on your market, current position, and available resources." },
      { title: "Implement the agreed work", description: "Complete the profile, website, citation, content, and local authority tasks included in your engagement." },
      { title: "Measure and refine", description: "Review available performance data and use it to decide what to improve next." }
    ],
    proof: {
      heading: "Local Funeral Home in Onitsha, Nigeria",
      challenge: "The business had limited online visibility and needed a stronger presence when people searched for relevant funeral services in its local market.",
      work: "I investigated its existing online presence and local competitors, optimized its Google Business Profile and Maps presence, improved the consistency of its business information across social profiles, and strengthened its online presence through relevant backlinks and mentions from local websites. I also checked AI-powered recommendations for relevant local queries.",
      outcome: "The business progressed from having little online presence to achieving number-one Google Maps visibility in the searches assessed and appearing in AI-powered recommendations from ChatGPT and Grok during the checks carried out.",
      takeaway: "These are observed outcomes from the project, not a guarantee of a universal ranking, a position for every searcher, or future AI recommendations."
    },
    tools: ["Google Business Profile", "Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs", "Screaming Frog", "Ubersuggest", "PageSpeed Insights"],
    faq: [
      { question: "How do I rank higher on Google Maps?", answer: "The right approach depends on your business and competitors. Work may include improving your profile categories and services, maintaining accurate business information, strengthening relevant website pages, earning genuine reviews, and building relevant local mentions. No one can guarantee a particular position." },
      { question: "How long does local SEO take?", answer: "Some corrections can be made quickly, but improvements in visibility and business outcomes vary by competition, location, starting position, and scope. Progress should be reviewed using available data rather than a fixed promise." },
      { question: "How much do local SEO services cost?", answer: "Pricing is negotiable and depends on your goals, competition, number of locations, and required work. One-time projects and ongoing monthly engagements are available." },
      { question: "Can you help with a suspended Google Business Profile?", answer: "I can review the situation, help identify potential policy issues, and assist with the appropriate correction or reinstatement process. Reinstatement is not guaranteed and depends on Google's assessment." },
      { question: "Do you work with businesses outside Nigeria?", answer: "Yes. I work remotely with businesses in different markets, including Nigeria and the United States. The strategy is adapted to the target location and competition." },
      { question: "Can local SEO help with AI recommendations?", answer: "Clear business information, relevant content, reviews, and credible mentions can help AI systems understand a business. They do not guarantee that a platform will mention or recommend it." }
    ],
    related: ["ai-search-visibility", "technical-seo", "seo-audit-strategy-reporting"]
  },
  {
    slug: "technical-seo",
    title: "Technical SEO and Website Health",
    shortTitle: "Technical SEO",
    seoTitle: "Technical SEO Services & Website Health",
    metaDescription: "Find and fix technical SEO issues affecting crawling, indexing, site performance, and search visibility with Kaosiso Ezebuenyi.",
    eyebrow: "TECHNICAL SEO",
    headline: "Fix the technical barriers that make your website harder to find",
    intro: "A website can have useful content and still struggle in search when important pages cannot be crawled, indexed, or used comfortably. I investigate technical issues and prioritize fixes that support discoverability, usability, and a stronger SEO foundation.",
    primaryKeyword: "technical SEO services",
    overviewHeading: "What does technical SEO cover?",
    overview: [
      "Technical SEO focuses on the parts of a website that help search engines access, interpret, and index its pages. It also includes performance and usability issues that can affect how visitors experience the site.",
      "I look for meaningful issues rather than producing a long list of warnings without context. Recommendations are prioritized by impact, risk, and implementation effort, with clear notes on what should be fixed first."
    ],
    audience: [
      "Businesses whose important pages are missing from search results.",
      "Websites with slow pages, mobile usability problems, or poor Core Web Vitals.",
      "Sites with migrations, redesigns, redirects, duplicate URLs, or indexing changes.",
      "Growing websites that need stronger architecture and internal linking.",
      "Business owners who need a clear technical action plan for a developer."
    ],
    deliverables: [
      { title: "Technical SEO audit", description: "Review crawlability, indexability, redirects, status codes, canonical tags, and common technical barriers." },
      { title: "Core Web Vitals and performance", description: "Assess loading, responsiveness, and layout stability, then identify practical performance improvements." },
      { title: "Indexing and sitemap review", description: "Check XML sitemaps, robots directives, canonicalization, and the indexability of important URLs." },
      { title: "Site architecture and internal links", description: "Review page hierarchy, important page depth, internal link pathways, and orphan-page risks." },
      { title: "Structured data review", description: "Identify appropriate schema opportunities and errors that could prevent correct interpretation." },
      { title: "Implementation roadmap", description: "Provide prioritized fixes with explanations so you or your developer can address the most important issues first." }
    ],
    process: [
      { title: "Confirm the website goals", description: "Identify the pages, conversions, and search outcomes that matter to the business." },
      { title: "Crawl and investigate", description: "Use relevant tools and search data to identify technical patterns and verify important issues." },
      { title: "Prioritize findings", description: "Separate critical issues from lower-priority recommendations based on impact and effort." },
      { title: "Implement or coordinate fixes", description: "Complete the agreed changes where access and scope allow, or provide developer-ready instructions." },
      { title: "Validate the changes", description: "Recheck affected pages and available search data to confirm that fixes behave as intended." }
    ],
    tools: ["Google Search Console", "Screaming Frog", "PageSpeed Insights", "Chrome DevTools", "Google Analytics 4"],
    faq: [
      { question: "What is included in a technical SEO audit?", answer: "It can include crawling and indexing, redirects, canonical tags, sitemaps, robots directives, site architecture, structured data, mobile usability, and performance issues. The exact scope depends on your website." },
      { question: "Can you make the fixes or only provide a report?", answer: "That depends on the project and access available. Implementation can be included where agreed; otherwise, I provide a prioritized action plan for you or your developer." },
      { question: "Will fixing Core Web Vitals guarantee higher rankings?", answer: "No. Performance improvements support user experience and are part of a broader SEO picture, but they do not guarantee a specific ranking." },
      { question: "Do you work with website migrations?", answer: "Yes. A migration review can cover URL mapping, redirects, canonical tags, internal links, sitemaps, and post-launch checks. The required scope should be agreed before the migration." }
    ],
    related: ["seo-audit-strategy-reporting", "seo-website-design-development", "on-page-seo-content-optimization"]
  },
  {
    slug: "on-page-seo-content-optimization",
    title: "On-Page SEO and Content Optimization",
    shortTitle: "On-Page SEO & Content",
    seoTitle: "On-Page SEO & Content Optimization Services",
    metaDescription: "Improve page relevance, search intent, internal linking, and content structure with on-page SEO and content optimization from Kaosiso Ezebuenyi.",
    eyebrow: "ON-PAGE SEO & CONTENT",
    headline: "Make every important page clearer for search engines and customers",
    intro: "Strong content should answer the questions your customers have and make your offer easy to understand. I improve the structure, relevance, and usefulness of key pages so they better match search intent and support your business goals.",
    primaryKeyword: "on-page SEO services",
    overviewHeading: "What is on-page SEO and content optimization?",
    overview: [
      "On-page SEO improves elements within your website, including page titles, headings, copy, internal links, image descriptions, and relevant structured information. Content optimization also considers what searchers need to know and whether the page answers those needs clearly.",
      "The goal is not to repeat a keyword as often as possible. It is to create useful, well-structured pages with a clear purpose and enough relevant detail to help visitors make informed decisions."
    ],
    audience: [
      "Businesses with service pages that do not clearly explain their offer.",
      "Websites receiving impressions but limited relevant clicks or enquiries.",
      "Brands with overlapping pages targeting the same search intent.",
      "Companies building topical depth around important products or services.",
      "Businesses that need stronger internal links and clearer content organization."
    ],
    deliverables: [
      { title: "Search intent and keyword mapping", description: "Map relevant search terms to pages and identify gaps, overlap, or mismatches between content and intent." },
      { title: "Titles and meta descriptions", description: "Improve page titles and descriptions to communicate relevance and set accurate expectations." },
      { title: "Headings and content structure", description: "Organize information with clear headings, useful sections, and direct answers to important customer questions." },
      { title: "Service and landing page optimization", description: "Strengthen offer clarity, relevant details, trust signals, and next steps on important commercial pages." },
      { title: "Internal linking", description: "Connect related pages with descriptive links that help visitors and search systems navigate your site." },
      { title: "Content gap and refresh plan", description: "Identify outdated, thin, overlapping, or missing content and prioritize improvements." }
    ],
    process: [
      { title: "Review goals and target pages", description: "Identify the services, audiences, and pages that matter most to the business." },
      { title: "Research intent and competitors", description: "Review the search landscape and what useful pages need to answer." },
      { title: "Map and prioritize changes", description: "Create a page-level plan for content, headings, metadata, and internal links." },
      { title: "Optimize content", description: "Improve existing copy or prepare new content within the agreed scope and voice." },
      { title: "Review and monitor", description: "Check the published pages and monitor available search performance to guide future updates." }
    ],
    tools: ["Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs", "Screaming Frog"],
    faq: [
      { question: "Do you write new content or optimize existing pages?", answer: "Both can be included. We can improve existing pages, plan new pages, or combine the two depending on your goals and the agreed scope." },
      { question: "How many keywords should a page target?", answer: "A page should focus on a clear topic and search intent, while naturally covering closely related questions and terms. The right scope depends on the subject and what users need." },
      { question: "Can you guarantee that optimized content will rank?", answer: "No. Rankings depend on competition, site quality, relevance, authority, and other changing factors. The work improves the page's usefulness and SEO foundations without promising a specific position." },
      { question: "Will you use AI to write my content?", answer: "Tools may support research and editing, but the process should prioritize accuracy, useful detail, brand voice, and human review rather than publishing unverified generic copy." }
    ],
    related: ["ai-search-visibility", "technical-seo", "seo-audit-strategy-reporting"]
  },
  {
    slug: "seo-website-design-development",
    title: "SEO-Focused Website Design and Development",
    shortTitle: "SEO Website Design",
    seoTitle: "SEO-Focused Website Design & Development",
    metaDescription: "Build a responsive, search-friendly website with clear structure, strong technical foundations, and conversion-focused content from Kaosiso Ezebuenyi.",
    eyebrow: "SEO WEBSITE DESIGN",
    headline: "Build a website designed for discoverability and real customers",
    intro: "Your website should explain what you offer, work well on mobile devices, and provide a clear path for visitors to take action. I help plan and improve websites with SEO foundations, usability, performance, and business goals in mind.",
    primaryKeyword: "SEO website design services",
    overviewHeading: "What makes a website SEO-friendly?",
    overview: [
      "An SEO-friendly website has a logical structure, useful content, crawlable pages, descriptive metadata, mobile-friendly layouts, and appropriate technical foundations. These elements help search engines understand the site and help visitors find what they need.",
      "Design and development should support the purpose of the business, not just appearance. The exact deliverables depend on whether you need a new website, a redesign, or targeted improvements to an existing site."
    ],
    audience: [
      "Businesses launching a new website or replacing an outdated one.",
      "Service providers who need clearer service pages and contact pathways.",
      "Local businesses that need location and service information organized well.",
      "Brands whose current website is difficult to use on mobile devices.",
      "Businesses that want SEO considerations included before launch rather than added later."
    ],
    deliverables: [
      { title: "Website structure and page planning", description: "Plan the key pages, navigation, and internal relationships around user needs and search intent." },
      { title: "Responsive page design", description: "Create or improve layouts for mobile, tablet, and desktop use." },
      { title: "SEO foundations", description: "Set up descriptive page titles, headings, clean URLs, internal links, and relevant indexability settings." },
      { title: "Performance and usability", description: "Review page weight, loading behavior, layout stability, and common usability barriers." },
      { title: "Conversion pathways", description: "Make contact options, service information, and calls to action clear and appropriate to the business." },
      { title: "Launch checks", description: "Review redirects, metadata, sitemap, canonical URLs, mobile layout, and important page behavior before launch where included." }
    ],
    process: [
      { title: "Discovery and requirements", description: "Understand your audience, offer, required pages, content, and primary business action." },
      { title: "Plan the structure", description: "Map navigation and page relationships before detailed design or implementation." },
      { title: "Design and build", description: "Develop the agreed pages and responsive layouts with SEO foundations in place." },
      { title: "Review and refine", description: "Check content, mobile behavior, performance, accessibility basics, and conversion pathways." },
      { title: "Launch and monitor", description: "Complete agreed launch checks and identify follow-up improvements." }
    ],
    tools: ["Google Search Console", "PageSpeed Insights", "Chrome DevTools", "Screaming Frog", "Google Analytics 4"],
    faq: [
      { question: "Can you redesign my existing website?", answer: "Yes. The work can range from targeted improvements to a broader redesign. We first review your needs, current platform, pages, and budget scope." },
      { question: "Will a new website automatically rank on Google?", answer: "No. A new website needs relevant content, technical accessibility, and time to establish visibility. SEO-friendly development creates a stronger foundation but does not guarantee rankings." },
      { question: "Can you work with my current developer or platform?", answer: "We can discuss your existing platform and team during discovery. The available implementation options depend on the platform, access, and project requirements." },
      { question: "Does the service include copywriting?", answer: "Content planning and page copy can be included if agreed. The scope should clearly state which pages and content assets will be delivered." }
    ],
    related: ["technical-seo", "on-page-seo-content-optimization", "seo-audit-strategy-reporting"]
  },
  {
    slug: "seo-audit-strategy-reporting",
    title: "SEO Audits, Strategy and Performance Reporting",
    shortTitle: "SEO Audits & Strategy",
    seoTitle: "SEO Audit, Strategy & Performance Reporting",
    metaDescription: "Understand your SEO performance, uncover technical and content gaps, and prioritize next steps with an actionable SEO audit from Kaosiso Ezebuenyi.",
    eyebrow: "SEO AUDITS & STRATEGY",
    headline: "Know what is holding your SEO back and what to fix first",
    intro: "SEO reports can contain hundreds of findings, but not every issue deserves the same attention. I review your website, search performance, content, and competitors to turn available evidence into a practical list of priorities.",
    primaryKeyword: "SEO audit services",
    overviewHeading: "What is an SEO audit and strategy?",
    overview: [
      "An SEO audit evaluates the parts of your online presence that influence organic search visibility. Depending on the project, it can cover technical health, content relevance, keyword targeting, competitors, local visibility, and measurement.",
      "The purpose is to understand the current situation, identify meaningful gaps, and establish a realistic order of work. Reporting should explain what the data shows, what remains uncertain, and what action is recommended."
    ],
    audience: [
      "Businesses whose organic traffic or visibility has stalled or declined.",
      "Website owners who need a clear starting point before investing in SEO.",
      "Teams preparing for a redesign, migration, or expansion into new markets.",
      "Businesses that want competitor and keyword gap analysis.",
      "Companies needing recurring reporting and a prioritized action plan."
    ],
    deliverables: [
      { title: "Technical and indexability review", description: "Identify crawling, indexing, metadata, internal link, sitemap, and performance issues within the audit scope." },
      { title: "Keyword and content gap analysis", description: "Review current targeting, search intent, competing pages, and missing content opportunities." },
      { title: "Competitor research", description: "Compare relevant competitors' search presence and identify areas where your website can improve." },
      { title: "Local or AI visibility review", description: "Include Google Maps or selected AI search checks when they are relevant to your business and part of the agreed scope." },
      { title: "Prioritized action plan", description: "Group recommendations by importance, implementation effort, and likely business relevance." },
      { title: "Performance reporting", description: "Summarize available Search Console, analytics, and ranking data, noting limitations and next steps." }
    ],
    process: [
      { title: "Set the objectives", description: "Agree on business goals, target pages, markets, and the questions the audit should answer." },
      { title: "Collect and review evidence", description: "Use available website, analytics, search, and competitor data to investigate current performance." },
      { title: "Identify root causes and opportunities", description: "Distinguish likely causes from symptoms and note where more data is needed." },
      { title: "Prioritize the roadmap", description: "Provide a clear order of work rather than an unranked list of every possible issue." },
      { title: "Review progress", description: "For ongoing engagements, revisit completed actions and performance to update the plan." }
    ],
    tools: ["Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs", "Screaming Frog", "PageSpeed Insights"],
    faq: [
      { question: "What will I receive from an SEO audit?", answer: "You receive findings and recommendations based on the agreed scope, usually organized by priority. The exact format and depth depend on the size of the site and the questions the audit needs to answer." },
      { question: "Is an SEO audit a one-time service?", answer: "It can be. Some clients need a one-time audit and action plan, while others prefer ongoing support to implement improvements and review performance." },
      { question: "Do you implement every recommendation?", answer: "Implementation can be included in a separate or combined engagement. We will agree on whether the project covers research and reporting only or also includes implementation." },
      { question: "What data do you need?", answer: "A review can start with the public website and available search results. Access to Google Search Console or Analytics can improve the analysis when you are comfortable granting appropriate access." }
    ],
    related: ["technical-seo", "on-page-seo-content-optimization", "ai-search-visibility"]
  }
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
