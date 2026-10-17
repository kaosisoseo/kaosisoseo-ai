"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/shared/Logo";
import Container from "@/components/layout/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "AI Search Visibility (GEO & AEO)", href: "/services/ai-search-visibility" },
  { name: "Local SEO & Google Maps", href: "/services/local-seo-google-maps-optimization" },
  { name: "Technical SEO", href: "/services/technical-seo" },
  { name: "On-Page SEO & Content", href: "/services/on-page-seo-content-optimization" },
  { name: "SEO Website Design", href: "/services/seo-website-design-development" },
  { name: "SEO Audits & Strategy", href: "/services/seo-audit-strategy-reporting" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!desktopServicesOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopServicesOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [desktopServicesOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Logo />

            <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
              {navLinks.slice(0, 2).map((item) => (
                <Link key={item.name} href={item.href} className={`font-medium transition ${pathname === item.href ? "font-semibold text-green-700" : "text-gray-700 hover:text-green-700"}`}>
                  {item.name}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={desktopServicesOpen}
                  onClick={() => setDesktopServicesOpen((value) => !value)}
                  className={`inline-flex items-center gap-1.5 py-3 font-medium transition ${servicesActive ? "font-semibold text-green-700" : "text-gray-700 hover:text-green-700"}`}
                >
                  Services
                  <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-4 w-4 transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {desktopServicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl">
                    <Link href="/services" className="mb-2 block rounded-xl bg-gray-50 px-4 py-3 text-sm font-bold text-gray-900 hover:bg-green-50 hover:text-green-800">
                      All Services <span aria-hidden="true" className="float-right">→</span>
                    </Link>
                    {serviceLinks.map((item) => (
                      <Link key={item.href} href={item.href} className={`block rounded-lg px-4 py-3 text-sm transition hover:bg-green-50 hover:text-green-800 ${pathname === item.href ? "font-semibold text-green-800" : "text-gray-700"}`}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((item) => (
                <Link key={item.name} href={item.href} className={`font-medium transition ${pathname === item.href ? "font-semibold text-green-700" : "text-gray-700 hover:text-green-700"}`}>
                  {item.name}
                </Link>
              ))}
            </nav>

            <a
              href="https://cal.com/ezebuenyik/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 md:inline-flex"
            >
              Book a Call
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`fixed right-0 top-0 z-50 h-full w-[min(21rem,88vw)] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <p className="text-xl font-bold text-green-700">KaosisoSEO</p>
            <p className="mt-1 text-sm text-gray-500">SEO & AI Visibility</p>
          </div>
          <button type="button" onClick={closeMenu} className="rounded-lg p-2 transition hover:bg-gray-100" aria-label="Close menu">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile main navigation" className="flex flex-col p-5">
          {navLinks.slice(0, 2).map((item) => (
            <Link key={item.name} href={item.href} onClick={closeMenu} className="border-b border-gray-100 py-4 text-lg text-gray-800">
              {item.name}
            </Link>
          ))}

          <div className="border-b border-gray-100">
            <div className="flex items-center">
              <Link href="/services" onClick={closeMenu} className={`flex-1 py-4 text-lg ${servicesActive ? "font-semibold text-green-700" : "text-gray-800"}`}>
                Services
              </Link>
              <button type="button" onClick={() => setMobileServicesOpen((value) => !value)} aria-expanded={mobileServicesOpen} aria-label={mobileServicesOpen ? "Collapse service links" : "Expand service links"} className="rounded-lg p-3 text-gray-600 hover:bg-gray-100">
                <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="pb-3 pl-3">
                {serviceLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenu} className={`block rounded-lg px-3 py-3 text-sm ${pathname === item.href ? "font-semibold text-green-800" : "text-gray-600 hover:bg-green-50 hover:text-green-800"}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((item) => (
            <Link key={item.name} href={item.href} onClick={closeMenu} className={`border-b border-gray-100 py-4 text-lg ${pathname === item.href ? "font-semibold text-green-700" : "text-gray-800"}`}>
              {item.name}
            </Link>
          ))}

          <a href="https://cal.com/ezebuenyik/30min" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="mt-7 rounded-xl bg-green-700 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-800">
            Book a Strategy Call
          </a>
        </nav>
      </aside>
    </>
  );
}
