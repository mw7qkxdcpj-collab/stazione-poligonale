"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="it">
      <body className="bg-black text-white">

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">

  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

    {/* LOGO */}
    <div className="flex items-center justify-center sm:justify-start gap-3 hover:scale-105 transition-transform duration-300">

      <Image
        src="/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="rounded-full"
      />

      <span className="font-bold text-lg sm:text-xl tracking-widest bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400 text-transparent bg-clip-text text-center sm:text-left">
        STAZIONE POLIGONALE
      </span>

    </div>

    {/* LINKS */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm">

      <Link
        href="/"
        className={`relative group transition duration-300 ${
          pathname === "/"
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }`}
      >
        Home
      </Link>

      <Link
        href="/chi-siamo"
        className={`relative group transition duration-300 ${
          pathname === "/chi-siamo"
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }`}
      >
        Chi siamo
      </Link>

      <Link
        href="/privacy-policy"
        className={`relative group transition duration-300 ${
          pathname === "/privacy-policy"
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }`}
      >
        Privacy
      </Link>

    </div>

  </div>

</nav>

        <main className="animate-fadeIn">
          {children}
        </main>

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}</style>

      </body>
    </html>
  );
}