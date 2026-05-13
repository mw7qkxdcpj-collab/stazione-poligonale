export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 bg-zinc-900">
        <h1 className="text-3xl font-bold text-green-400">
          🎮 GameVerse
        </h1>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">News</li>
          <li className="hover:text-green-400 cursor-pointer">Guide</li>
          <li className="hover:text-green-400 cursor-pointer">Recensioni</li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-zinc-900">
        <h2 className="text-6xl font-bold mb-6">
          Il tuo universo gaming
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mb-8">
          News, recensioni e guide sui videogiochi più popolari.
        </p>

        <button className="bg-green-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-white transition">
          Esplora
        </button>
      </section>

      {/* ARTICOLI */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-16">

        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
            alt="gaming"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              Le migliori uscite del 2026
            </h3>

            <p className="text-zinc-400 mb-4">
              Tutti i giochi più attesi dell'anno.
            </p>

            <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold">
              Leggi
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
            alt="gaming"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              Guida Elden Ring
            </h3>

            <p className="text-zinc-400 mb-4">
              I migliori consigli per iniziare.
            </p>

            <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold">
              Leggi
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition">
          <img
            src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop"
            alt="gaming"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              Setup Gaming
            </h3>

            <p className="text-zinc-400 mb-4">
              Le postazioni più belle del momento.
            </p>

            <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold">
              Leggi
            </button>
          </div>
        </div>

      </section>

    </main>
  );
}