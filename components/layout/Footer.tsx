import Link from "next/link";
import Container from "./Container";

const footerServices = [
  { name: "AI Search Visibility", href: "/services/ai-search-visibility" },
  { name: "Local SEO & Google Maps", href: "/services/local-seo-google-maps-optimization" },
  { name: "Technical SEO", href: "/services/technical-seo" },
  { name: "On-Page SEO & Content", href: "/services/on-page-seo-content-optimization" },
  { name: "SEO Website Design", href: "/services/seo-website-design-development" },
  { name: "SEO Audits & Strategy", href: "/services/seo-audit-strategy-reporting" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Kaosiso<span className="text-green-500">SEO</span>
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              Kaosiso Ezebuenyi helps businesses improve organic search visibility across Google, Google Maps, and AI-powered search experiences.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Independent specialist working through Kaosiso_SEO and Drip Dew Digital.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">All Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="transition hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Connect</h3>
            <ul className="space-y-3">
              <li><a href="https://www.linkedin.com/in/kaosiso-ezebuenyi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/EzebuenyiK" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="https://youtube.com/@kaosiso_seo" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://instagram.com/kaosiso_seo" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@kaosiso_seo" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://medium.com/@ezebuenyikaosiso" target="_blank" rel="noopener noreferrer">Medium</a></li>
              <li><a href="https://github.com/kaosisoseo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://cal.com/ezebuenyik/30min" target="_blank" rel="noopener noreferrer">Book a Strategy Call</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kaosiso SEO. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
