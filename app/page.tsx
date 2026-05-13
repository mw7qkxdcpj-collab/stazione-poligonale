export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/sfondo.jpg')",
      }}
    >
      <header className="flex items-center gap-4 p-6 bg-black/40">

        <img
          src="/logo.png"
          alt="Logo"
          className="w-14 h-14"
        />

        <h1 className="text-4xl font-bold">
          STAZIONE POLIGONALE
        </h1>

      </header>
    </main>
  );
}