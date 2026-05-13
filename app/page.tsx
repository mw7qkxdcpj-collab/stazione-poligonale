export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center px-8 py-6">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-14 h-14 object-contain"
        />

        {/* NOME BLOG */}
        <h1 className="ml-4 text-3xl font-bold tracking-widest">
          STAZIONE POLIGONALE
        </h1>

      </header>

      {/* HOMEPAGE */}
      <section
        className="h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/sfondo.jpg')",
        }}
      >

        <div className="bg-black/50 p-8 rounded-2xl">
          <h2 className="text-5xl font-bold text-center">
            Blog in costruzione...
          </h2>
        </div>

      </section>

    </main>
  );
}