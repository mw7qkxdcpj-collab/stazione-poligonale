import Link from "next/link";

export default function Home() {
  return (
  
    <main
      className="min-h-screen text-white flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/sfondo.jpg')" }}
    >

      {/* OVERLAY */}
      <div className="min-h-screen bg-black/60 flex flex-col">

        {/* HERO */}
        <section className="flex-1 flex flex-col items-center justify-center px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Benvenuto su STAZIONE POLIGONALE 
          </h2>

          <p className="text-zinc-300 text-lg max-w-2xl">
            News, riflessioni e articoli dal mondo videoludico
          </p>

          {/* ARTICOLI */}
          <div className="mt-14 w-full max-w-2xl grid gap-6">

            <Link href="/blog/primo-articolo">

              <div className="p-6 border border-zinc-800 rounded-2xl bg-black/40 hover:border-emerald-400 hover:bg-black/60 transition duration-300 cursor-pointer text-left">

                <h3 className="text-2xl font-bold mb-2">
                   Back to the Past – La nostalgia videoludica che ci riporta al passato
                </h3>

                <p className="text-zinc-400">
                  
                </p>

              </div>

            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}