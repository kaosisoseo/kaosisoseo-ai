# KaosisoSEO Portfolio Website Master Reference

Last verified: 2026-09-18
Repository: kaosisoseo/kaosisoseo-ai
Framework: Next.js 16.2.10 + React 19.2.4 + TypeScript
Deployment: Vercel
Live URL currently used by site metadata: https://kaosisoseo-ai.vercel.app
Intended brand/domain in config: https://kaosisoseo.ai

## 1. Purpose

This document is the source-of-truth reference for maintaining, upgrading, redesigning, or adding pages to the KaosisoSEO portfolio website.

Do not redesign or introduce new visual patterns without checking this document first. Preserve the established visual language unless a deliberate redesign is approved.

The website is both:
- a professional SEO/AI visibility portfolio
- a long-term knowledge and resource platform

Core positioning:
- Technical SEO
- Local SEO
- AI Search Visibility
- GEO
- AEO
- Entity SEO
- SEO audits
- Content strategy
- Website/SEO implementation

## 2. Technology Architecture

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- PostCSS with @tailwindcss/postcss
- Next metadata API
- JSON-LD structured data
- Google Analytics through NEXT_PUBLIC_GA_ID
- Google Search Console verification
- Vercel deployment
- GitHub repository is the source code of record

Path alias:
- @/* maps to ./*

Main architecture:
- app/ = routes and global application configuration
- components/ = reusable page sections and UI
- config/ = site configuration
- constants/ = navigation/social/stat placeholders
- lib/ = schema and breadcrumb utilities
- styles/ = design tokens
- public/ = images, certificates, downloads and static assets

## 3. Current Route Architecture

Primary navigation:
- /
- /about
- /services
- /case-studies
- /resources
- /blog
- /contact

Resources architecture:
- /resources
- /resources/technical-seo
- /resources/local-seo
- /resources/ai-visibility
- /resources/playbooks
- /resources/templates
- /resources/downloads
- /resources/downloads/ai-visibility-checklist
- /resources/downloads/keyword-research-workbook
- /resources/downloads/local-seo-checklist
- /resources/downloads/seo-content-brief-template
- /resources/downloads/technical-seo-checklist
- /resources/downloads/website-seo-audit-template

Blog:
- /blog
- /blog/is-google-search-console-data-wrong
- /blog/google-ranks-ai-recommends
- /blog/technical-seo-checklist
- /blog/local-seo-strategies

## 4. Homepage Section Order

app/page.tsx currently renders:

1. Hero
2. TrustedBy
3. Services
4. FeaturedCaseStudies
5. WhyChooseMe
6. SEOProcess
7. Credibility
8. Certifications
9. WhatClientsValue
10. FAQ
11. CallToAction

When adding a homepage section, preserve this hierarchy unless there is a deliberate content strategy reason to change it.

## 5. Navigation

Navbar:
- sticky header
- top: 0
- z-index: 50
- white translucent background
- backdrop blur
- bottom border
- desktop height: 80px
- desktop navigation visible from md breakpoint
- mobile uses right-side drawer
- mobile drawer width: 18rem / 72
- dark overlay behind mobile drawer
- active navigation color: green

Current navigation labels:
Home, About, Services, Case Studies, Resources, Blog, Contact

Primary CTA:
Book a Call
Target: https://cal.com/ezebuenyik/30min

## 6. Container and Layout

Reusable container:
- mx-auto
- max-w-7xl
- px-6
- lg:px-8

Default responsive layout patterns:
- mobile-first
- md breakpoint for desktop navigation and multi-column layouts
- lg breakpoint for larger two-column layouts
- use Tailwind responsive utilities
- avoid arbitrary widths when the existing max-w/container system works

## 7. Color System

Source: styles/colors.ts

Primary:
- #00A651

Primary dark:
- #007A3D

Secondary:
- #111827

Accent:
- #16A34A

Background:
- #FFFFFF

Surface:
- #F8FAFC

Text:
- #111827

Text light:
- #6B7280

Border:
- #E5E7EB

Success:
- #10B981

Warning:
- #F59E0B

Error:
- #EF4444

Common Tailwind implementation:
- green-600 for primary interactive elements
- green-700 for hover
- green-500 for footer accent
- gray-900 / gray-950 for dark text and footer
- gray-600 for body text
- gray-200 for borders
- gray-50 / slate-50 style surfaces where appropriate
- white for main background

Do not introduce a new brand color without updating the design token reference first.

## 8. Typography System

Source: styles/typography.ts

Hero:
- text-6xl md:text-7xl
- font-extrabold

Heading 1:
- text-5xl
- font-bold

Heading 2:
- text-4xl
- font-bold

Heading 3:
- text-3xl
- font-semibold

Body:
- text-lg
- leading-8

Small:
- text-sm

Caption:
- text-xs

Important implementation note:
globals.css currently sets body font-family to Arial, Helvetica, sans-serif.
The Tailwind theme also references Geist variables, but the current body declaration explicitly uses Arial/Helvetica. Treat Arial/Helvetica as the current effective body font unless the typography system is intentionally modernized.

## 9. Common Heading Rules

H1:
- one primary H1 per page
- large, bold, strong keyword/context relevance
- normally text-5xl on standard pages
- hero may use larger responsive sizing

H2:
- section-level headings
- text-4xl font-bold

H3:
- subsection/card headings
- text-3xl font-semibold
- smaller card-specific H3s may use text-xl when appropriate

Do not add headings only for visual sizing. Preserve semantic heading hierarchy.

## 10. Spacing and Visual Style

Established style:
- generous whitespace
- rounded-xl buttons/cards
- rounded-3xl for major image containers
- subtle gray borders
- restrained shadows
- clean white surfaces
- green used primarily for action, emphasis and brand identity
- dark footer
- readable line-height

Existing examples:
- hero vertical padding: py-24
- hero content gap: gap-16
- CTA groups: gap-5
- stats/cards: p-5
- common section/container spacing uses large vertical rhythm
- buttons commonly use rounded-xl

Do not overuse shadows, gradients, glass effects, animations, or decorative effects.

## 11. Buttons

Primary button pattern:
- rounded-xl
- bg-green-600
- px-5 to px-8
- py-3 to py-4
- font-semibold
- white text
- hover:bg-green-700
- transition

Secondary button pattern:
- rounded-xl
- border border-gray-300
- dark text
- hover:bg-gray-100

Primary CTA destination:
https://cal.com/ezebuenyik/30min

## 12. Cards

Preferred card language:
- white background
- border border-gray-200
- rounded-xl
- moderate padding
- optional subtle shadow
- dark heading
- gray supporting text
- green used for key metric/accent

Avoid excessive card nesting.

## 13. Header

Current header:
- sticky
- white/90
- backdrop-blur
- border-b border-gray-200
- h-20
- desktop nav gap-8

Mobile:
- hamburger button
- right drawer
- drawer shadow-2xl
- mobile nav links separated by borders
- CTA at bottom

## 14. Footer

Footer background:
- gray-950

Footer text:
- gray-300 / gray-400
- muted copyright gray-500

Desktop layout:
- 4 columns at lg
- 2 columns at md

Footer groups:
1. Brand
2. Navigation
3. Services
4. Connect

Brand:
KaosisoSEO

Current footer service topics:
- Technical SEO
- Local SEO
- AI Visibility
- SEO Audits
- Website Design
- Content Strategy

## 15. Brand Voice and Copy

Voice:
- professional
- clear
- practical
- educational
- confident without exaggeration
- simple English
- evidence-led

Core message:
Helping businesses rank on Google and become recommended by AI assistants.

Avoid:
- unsupported rankings
- invented client results
- inflated years of SEO experience
- vague AI hype
- claims that a technical fix was shipped when it was only audited/recommended

Current truthful homepage experience claim:
5+ Years Marketing Experience

This replaces the previous 7+ Years Experience claim.

## 16. SEO Architecture

Global metadata is defined in app/layout.tsx.

Current title:
Kaosiso Ezebuenyi | SEO & AI Visibility Strategist

Title template:
%s | Kaosiso SEO

Global description:
Helping businesses rank on Google and become recommended by ChatGPT, Gemini, Claude, Perplexity and AI search through Technical SEO, Local SEO, GEO and AEO.

Global keyword concepts:
- SEO Consultant
- Technical SEO
- Local SEO
- AI SEO
- AI Visibility
- Answer Engine Optimization
- Generative Engine Optimization
- SEO Audit
- Google Rankings
- ChatGPT SEO
- LLM SEO
- Entity SEO

Robots:
- index: true
- follow: true
- Google max image preview: large
- max video preview: -1
- max snippet: -1

Google Search Console verification is configured.

## 17. Structured Data

lib/schema.ts currently provides:
- Person schema
- WebSite schema

Known schema concepts:
- Person
- WebSite
- BreadcrumbList
- BlogPosting

Blog article implementation also uses article-specific structured data and breadcrumbs.

When adding a new page:
- consider whether BreadcrumbList is appropriate
- add page-specific schema where it is genuinely supported
- do not create fake Organization, Review, Rating, FAQ or other structured data merely for SEO

## 18. Crawl Architecture

Current files:
- app/robots.ts
- app/sitemap.ts

robots allows all crawlers and points to:
https://kaosisoseo-ai.vercel.app/sitemap.xml

Current sitemap includes:
- homepage
- About
- Services
- Case Studies
- Resources
- Blog
- current blog articles
- Contact

Every new indexable page should be evaluated for sitemap inclusion.

## 19. Internal Linking

Internal links are a core part of the site architecture.

When adding a page:
- link to it from a relevant parent/category page
- link to it from at least one contextually relevant existing page where appropriate
- use descriptive anchor text
- avoid orphan pages
- keep navigation hierarchy logical

Blog content should link naturally to:
- relevant services
- related resources
- relevant case studies
- contact/CTA pages

## 20. Current Blog Architecture

Blog is a dedicated route system under /blog.

Current article:
Is Google Search Console Data Wrong? I Investigated the Numbers

This article contains:
- custom SEO title
- meta description
- canonical URL
- Open Graph metadata
- author information
- BlogPosting JSON-LD
- BreadcrumbList JSON-LD
- article-specific keyword targeting
- official Google documentation references
- internal links
- structured headings
- tables
- FAQ-style questions
- diagnostic framework

New articles should follow the same technical model.

## 21. Resource Architecture

Resources are organized as a knowledge hub.

Categories currently include:
- Technical SEO
- Local SEO
- AI Visibility
- Playbooks
- Templates
- Downloads

Download assets currently include:
- AI Visibility Checklist
- Keyword Research Workbook
- Local SEO Checklist
- SEO Content Brief Template
- Technical SEO Checklist
- Website SEO Audit Template

Future resources should follow the same route hierarchy and visual language.

## 22. Public Assets

public/ contains:
- certificates
- downloadable PDFs
- profile images
- favicon
- static SVG assets

Important current profile asset:
public/images/kaosiso.jpeg

Certificates include:
- Google Ads Search
- Google Analytics
- Google Digital Marketing
- HubSpot SEO II

Downloads include:
- AI visibility checklist
- keyword research workbook
- local SEO checklist
- SEO content brief
- technical SEO checklist
- website SEO audit template

## 23. Design Tokens vs Actual Implementation

Important:
styles/colors.ts and styles/typography.ts define the intended design tokens, but many components implement Tailwind classes directly.

Therefore, when upgrading:
1. inspect the actual component first
2. check styles/colors.ts and styles/typography.ts
3. preserve existing component conventions
4. only centralize tokens if the change is intentional and tested

## 24. Current Site Architecture by Component

Home:
- Hero
- TrustedBy
- Services
- FeaturedCaseStudies
- WhyChooseMe
- SEOProcess
- Credibility
- Certifications
- WhatClientsValue
- FAQ
- CallToAction

About:
- AboutHero
- MyStory
- MyApproach
- WhatMakesMeDifferent
- Tools
- AboutCTA

Case Studies:
- CaseStudiesHero
- FeaturedProjects
- SEOFramework
- ToolsUsed
- LessonsLearned
- CaseStudiesCTA

Resources:
- ResourceHero
- ResourceCategories
- ResourceList
- FeaturedResources
- Downloads
- Newsletter
- ResourceCTA
- ResourcesHero / ResourcesCTA components exist and should be checked before creating duplicates

Shared:
- Logo
- Container
- Navbar
- Footer
- Button
- Badge
- Section

## 25. Adding a New Page Checklist

Before coding:
1. Define the page purpose and search intent.
2. Decide its URL slug.
3. Decide its parent/category.
4. Define one H1.
5. Define H2 sections.
6. Identify relevant internal links.
7. Decide metadata title and description.
8. Decide whether BreadcrumbList or other schema is appropriate.
9. Decide whether it belongs in the sitemap.
10. Reuse existing components and design tokens.

During coding:
1. Use the existing Container.
2. Preserve colors.
3. Preserve typography scale.
4. Use existing button/card patterns.
5. Use responsive Tailwind classes.
6. Maintain semantic HTML.
7. Optimize images and alt text.
8. Add internal links.
9. Avoid unnecessary client components.

After coding:
1. Run lint/build.
2. Check mobile.
3. Check desktop.
4. Check metadata.
5. Check canonical URL.
6. Check structured data.
7. Check internal links.
8. Check sitemap.
9. Check robots.
10. Deploy to Vercel.
11. Verify the live page.
12. Recheck Google Search Console after indexing.

## 26. Adding a New Blog Article Checklist

Required:
- route
- H1
- title
- meta description
- canonical
- author
- publish/update date where appropriate
- semantic H2/H3 hierarchy
- internal links
- relevant external authoritative sources
- OG metadata
- article structured data
- BreadcrumbList
- sitemap entry
- descriptive URL

Content standards:
- answer search intent directly
- use original analysis where possible
- include evidence
- avoid keyword stuffing
- write for humans first
- make facts easy for search engines and AI systems to understand

## 27. Technical SEO Philosophy

The website itself is a demonstration of SEO implementation.

Important implemented properties include:
- semantic page structure
- metadata
- index/follow directives
- Google Search Console verification
- Open Graph
- Twitter metadata
- Google Analytics
- robots.txt
- XML sitemap
- canonical URLs
- JSON-LD
- Person schema
- WebSite schema
- BreadcrumbList
- BlogPosting
- internal linking
- dedicated blog architecture
- resource architecture

The portfolio should continue to demonstrate the capabilities it sells.

## 28. Portfolio Case Study Accuracy Rule

Only publish claims that can be supported.

For the user's own portfolio site:
- it is a hands-on SEO implementation project
- it was built from the ground up
- it contains deliberate SEO properties
- the project has been checked with SEO tools
- it demonstrates technical SEO implementation

Do not describe it as fixing a client's existing technical SEO problem unless that was actually done.

## 29. Current Known Technical Inconsistency

There are currently two URL identities in the code:
- deployed metadata/schema/sitemap/robots use https://kaosisoseo-ai.vercel.app
- config/site.ts uses https://kaosisoseo.ai

Before moving to the custom domain permanently, standardize:
- metadataBase
- canonical URLs
- Open Graph URL
- sitemap
- robots host
- schema @id
- Person URL
- WebSite URL
- internal absolute URLs
- Search Console property

Do this as one coordinated migration, not piecemeal.

## 30. Future Upgrade Direction

The original product vision can expand the portfolio into a knowledge platform.

Potential future modules:
- cornerstone SEO guides
- case-study library
- AI Search Lab
- Knowledge Center
- interactive Search Visibility Score
- AI visibility reporting
- newsletter
- research portal
- resource library
- community
- courses
- premium SEO/AI visibility tools

Future interactive products should still use the same core design system.

## 31. Maintenance Rule

For every future change, treat this document and the GitHub repository as the working source of truth.

Before making changes:
- inspect the existing route/component
- preserve established styles
- avoid duplicate components
- update sitemap and metadata when needed
- update this reference when architecture or design tokens materially change
- deploy and verify the live result

## 32. Important Current Status

As of 2026-09-18:
- homepage experience claim has been corrected from 7+ to 5+ Years Marketing Experience
- latest correction commit: 30009e9915acdc9407bb5126f9def650daa58b19
- user manually redeployed through Vercel
- current site architecture is documented here

This file should be updated whenever the website's architecture, design system, routes, SEO infrastructure, or major content structure changes.
