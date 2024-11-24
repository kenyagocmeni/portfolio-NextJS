'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 py-4 z-10">
      <div className="text-3xl font-bold">
        <Link href="/" className="hover:underline">
          Semih.
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/about" className="hover:underline">
          Hakkımda
        </Link>
        <Link href="/works" className="hover:underline">
          Çalışmalarım
        </Link>
        <Link href="/contact" className="hover:underline">
          İletişim
        </Link>
      </div>
    </nav>
  );
}
