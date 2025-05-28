"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <Link href="/" className="text-xl font-bold">
        Robotics Portfolio
      </Link>
      <ul className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/cad-models">CAD Models</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </nav>
  );
}
