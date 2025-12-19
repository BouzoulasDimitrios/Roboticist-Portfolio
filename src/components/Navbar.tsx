"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-[999] flex w-full items-center justify-between border-b border-gray-800 bg-gray-900/95 p-4 text-white shadow-lg backdrop-blur">
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
