import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { personSchema, websiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaosisoseo-ai.vercel.app"),
  verification: {
  google: "GDFDByIo85cCxwJ3T43Cw-088r-wljgmuSu25Sz8-58",
},

  title: {
    default: "Kaosiso Ezebuenyi | SEO & AI Visibility Strategist",
    template: "%s | Kaosiso SEO",
  },

  description:
    "Helping businesses rank on Google and become recommended by ChatGPT, Gemini, Claude, Perplexity and AI search through Technical SEO, Local SEO, GEO and AEO.",

  keywords: [
    "SEO Consultant",
    "Technical SEO",
    "Local SEO",
    "AI SEO",
    "AI Visibility",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "SEO Audit",
    "Google Rankings",
    "ChatGPT SEO",
    "LLM SEO",
    "Entity SEO",
  ],

  authors: [
    {
      name: "Kaosiso Ezebuenyi",
    },
  ],

  creator: "Kaosiso Ezebuenyi",

  publisher: "Kaosiso SEO",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Kaosiso Ezebuenyi | SEO & AI Visibility Strategist",

    description:
      "Helping businesses rank on Google and become recommended by AI assistants.",

    url: "https://kaosisoseo-ai.vercel.app",

    siteName: "Kaosiso SEO",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/profile/kaosiso.jpeg",
        width: 1200,
        height: 630,
        alt: "Kaosiso Ezebuenyi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kaosiso Ezebuenyi | SEO & AI Visibility Strategist",

    description:
      "Helping businesses rank on Google and become recommended by AI assistants.",

    images: ["/images/profile/kaosiso.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-GMVLKZREZE"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GMVLKZREZE');
  `}
</Script>

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}