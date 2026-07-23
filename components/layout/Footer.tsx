import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Kaosiso<span className="text-green-500">SEO</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Helping businesses rank on Google and become recommended by AI
              assistants through Technical SEO, Local SEO and AI Visibility
              strategies.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">
              <li>Technical SEO</li>
              <li>Local SEO</li>
              <li>AI Visibility</li>
              <li>SEO Audits</li>
              <li>Website Design</li>
              <li>Content Strategy</li>
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Connect
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/kaosiso-ezebuenyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/EzebuenyiK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
              </li>

              <li>
                <a
                  href="https://medium.com/@ezebuenyikaosiso"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/kaosisoseo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://cal.com/ezebuenyik/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </li>
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