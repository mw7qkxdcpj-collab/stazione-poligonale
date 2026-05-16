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
        <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-800 bg-black/70 backdrop-blur-md sticky top-0 z-50">

          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
  
  <Image
    src="/logo.png"
    alt="Logo"
    width={32}
    height={32}
    className="rounded-full"
  />

  <span className="text-emerald-400 font-bold text-xl tracking-widest drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">
  STAZIONE POLIGONALE
</span>

</div>

          <div className="flex gap-8 text-sm">

            <Link
              href="/"
              className={`relative group transition duration-300 ${
                pathname === "/"
                  ? "text-green-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              Home
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                  pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            <Link
              href="/blog"
              className={`relative group transition duration-300 ${
                pathname === "/blog"
                  ? "text-green-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              Blog
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                  pathname === "/blog" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

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