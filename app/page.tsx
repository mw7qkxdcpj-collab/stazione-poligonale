import Head from "next/head";
import Link from "next/link";



const SITE_NAME = "Stazione Poligonale";
const SITE_DESCRIPTION = "News, riflessioni e articoli sul mondo videoludico";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} - Blog Videogiochi</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 max-w-3xl leading-tight">
          Benvenuto su {SITE_NAME}
        </h1>

        <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
          {SITE_DESCRIPTION}
        </p>

        <Link
          href="#blog"
          className="mt-10 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          aria-label="Scorri verso gli articoli"
        >
          Leggi gli articoli
        </Link>
      </section>

     

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </>
  );
}