import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center text-white flex flex-col">

      {/* OVERLAY SCURO */}
      <div className="min-h-screen bg-black/60 flex flex-col">

        {/* HEADER */}
        <header className="p-8 border-b border-zinc-700 flex items-center gap-4">

          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full"
          />

          {/* TITOLO */}
          <h1 className="text-5xl font-bold tracking-widest text-green-400">
            STAZIONE POLIGONALE
          </h1>

        </header>

        {/* CONTENUTO */}
        <section className="flex-1 flex items-center justify-center">

          <div className="text-center px-6">

            <h2 className="text-4xl font-bold mb-6">
              Blog in costruzione
            </h2>

            <p className="text-zinc-300 text-lg">
              Presto arriveranno news e molto altro
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}