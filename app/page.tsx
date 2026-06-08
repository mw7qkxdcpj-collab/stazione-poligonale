import Head from "next/head";
import Link from "next/link";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

// Dati degli articoli - facile da scalare
const articoli = [
  {
    slug: "primo-articolo",
    title: "Back to the Past – La nostalgia videoludica che ci riporta al passato",
    excerpt:
      "Scopri come la nostalgia videoludica influenza i giocatori moderni e perché i classici rimangono senza tempo nel panorama gaming contemporaneo.",
    data: "15 Gennaio 2024",
  },
  {
    slug: "secondo-articolo",
    title: "Indie vs AAA: La rivoluzione creativa dei giochi indipendenti",
    excerpt:
      "Analizziamo come gli sviluppatori indie stanno cambiando l'industria videoludica con creatività e innovazione senza precedenti.",
    data: "12 Gennaio 2024",
  },
  {
    slug: "terzo-articolo",
    title: "Storytelling nei videogiochi: Quando la trama supera il gameplay",
    excerpt:
      "Scopri i capolavori narrativi che hanno dimostrato come un grande racconto può elevare l'esperienza videoludica a forma d'arte.",
    data: "8 Gennaio 2024",
  },
];

const SITE_NAME = "Stazione Poligonale";
const SITE_DESCRIPTION =
  "News, riflessioni e articoli dal mondo videoludico";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} - Blog Videogiochi</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph per social media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:site_name" content={SITE_NAME} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={geistMono.className}>
        {/* HEADER/NAVBAR */}
        <header className="relative z-20 bg-black/80 border-b border-zinc-800 backdrop-blur-sm sticky top-0">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition"
            >
              {SITE_NAME}
            </Link>

            <div className="hidden sm:flex gap-8 text-zinc-300">
              <Link
                href="/"
                className="hover:text-emerald-400 transition"
                aria-label="Torna alla homepage"
              >
                Home
              </Link>
              <Link
                href="#blog"
                className="hover:text-emerald-400 transition"
                aria-label="Vai ai nostri articoli"
              >
                Blog
              </Link>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main
          className="min-h-screen text-white flex flex-col bg-cover bg-center"
          style={{ backgroundImage: "url('/sfondo.jpg')" }}
        >
          {/* OVERLAY */}
          <div className="min-h-screen bg-black/60 flex flex-col">
            {/* HERO SECTION */}
            <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 max-w-3xl leading-tight">
                Benvenuto su {SITE_NAME}
              </h1>

              <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
                {SITE_DESCRIPTION}
              </p>

              {/* CALL TO ACTION */}
              <Link
                href="#blog"
                className="mt-10 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
                aria-label="Scorri verso gli articoli"
              >
                Leggi gli articoli
              </Link>
            </section>
          </div>
        </main>

        {/* ARTICOLI SECTION */}
        <section
          id="blog"
          className="bg-black/95 border-t border-zinc-800 py-20 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Ultimi Articoli
            </h2>
            <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
              Scopri le nostre ultime riflessioni e analisi dal mondo videoludico
            </p>

            {/* GRID ARTICOLI */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
              {articoli.map((articolo) => (
                <Link
                  key={articolo.slug}
                  href={`/blog/${articolo.slug}`}
                  aria-label={`Leggi l'articolo: ${articolo.title}`}
                >
                  <article className="group p-8 border border-zinc-800 rounded-2xl bg-zinc-950/50 hover:border-emerald-400 hover:bg-zinc-900 transition duration-300 cursor-pointer h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition text-white leading-tight">
                        {articolo.title}
                      </h3>

                      <p className="text-zinc-400 mb-6 leading-relaxed">
                        {articolo.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <time className="text-sm text-zinc-500">
                        {articolo.data}
                      </time>
                      <span className="text-emerald-400 group-hover:translate-x-2 transition font-semibold">
                        Leggi →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* PLACEHOLDER PER PAGINAZIONE O CARICAMENTO PIU ARTICOLI */}
            <div className="text-center mt-16">
              <p className="text-zinc-500">Prossimamente altri articoli...</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black border-t border-zinc-800 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center text-zinc-500">
            <p>
              &copy; {new Date().getFullYear()} {SITE_NAME}. Tutti i diritti
              riservati.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}