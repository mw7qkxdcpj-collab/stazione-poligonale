export default function Home() {
  return (
    <main className="min-h-screen text-white">

      {/* SFONDO */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/sfondo.jpg')",
        }}
      >

        {/* HEADER */}
        <header className="flex items-center px-8 py-6 bg-black/40">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />

          {/* TITOLO */}
          <h1 className="ml-4 text-3xl md:text-5xl font-bold tracking-widest">
            STAZIONE POLIGONALE
          </h1>

        </header>

      </div>

    </main>
  );
}