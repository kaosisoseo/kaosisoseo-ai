import Link from "next/link";
import Logo from "@/components/shared/Logo";
import Container from "@/components/layout/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/services">Services</Link>

            <Link href="/case-studies">Case Studies</Link>
            
            <Link href="/resources">Resources</Link>

            <Link href="/blog">Blog</Link>

            <Link href="/contact">Contact</Link>
          </nav>

          <a
            href="https://cal.com/ezebuenyik/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Book a Call
          </a>

        </div>
      </Container>
    </header>
  );
}