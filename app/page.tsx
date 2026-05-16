export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* HEADER */}
      <header className="p-8 border-b border-zinc-800">
        <h1 className="text-5xl font-bold tracking-widest text-green-400">
          STAZIONE POLIGONALE
        </h1>
      </header>

      {/* CONTENUTO */}
      <section className="flex-1 flex items-center justify-center">
        <div className="text-center">

          <h2 className="text-4xl font-bold mb-6">
            Blog in costruzione
          </h2>

          <p className="text-zinc-400 text-lg">
            Presto arriveranno news, PROVA... 
          </p>

        </div>
      </section>

    </main>
  );
}