"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="it">
      <body
        className="bg-black text-white min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/sfondo.jpg')" }}
      >

        {/* OVERLAY GLOBALE */}
        <div className="min-h-screen bg-black/60 flex flex-col">

          {/* NAVBAR */}
          <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                {/* LOGO */}
                <Link
                  href="/"
                  className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src="/logo.png"
                    alt="Logo Stazione Poligonale"
                    width={32}
                    height={32}
                    className="rounded-full"
                    priority
                  />

                  <span className="font-bold text-lg sm:text-xl tracking-widest bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400 text-transparent bg-clip-text text-center md:text-left">
                    STAZIONE POLIGONALE
                  </span>
                </Link>

                {/* LINK */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base">

                  <Link
                    href="/"
                    aria-current={pathname === "/" ? "page" : undefined}
                    className={`relative group transition duration-300 ${
                      pathname === "/"
                        ? "text-white"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    Home

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                        pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  <Link
                    href="/chi-siamo"
                    aria-current={pathname === "/chi-siamo" ? "page" : undefined}
                    className={`relative group transition duration-300 ${
                      pathname === "/chi-siamo"
                        ? "text-white"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    Chi siamo / Contatti

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                        pathname === "/chi-siamo"
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  <Link
                    href="/privacy-policy"
                    aria-current={pathname === "/privacy-policy" ? "page" : undefined}
                    className={`relative group transition duration-300 ${
                      pathname === "/privacy-policy"
                        ? "text-white"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    Privacy e Cookie Policy

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                        pathname === "/privacy-policy"
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                </div>

              </div>

            </div>

          </nav>

          {/* PAGE CONTENT */}
          <main className="animate-fadeIn flex-1">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}