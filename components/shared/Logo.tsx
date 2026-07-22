import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-extrabold tracking-tight"
    >
      <span className="text-green-600">Kaosiso</span>
      <span className="text-gray-900">SEO</span>
    </Link>
  );
}