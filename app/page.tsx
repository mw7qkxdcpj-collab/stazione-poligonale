import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/sfondo.jpg')" }}
    >

      {/* OVERLAY */}
      <div className="min-h-screen bg-black/60 flex flex-col">

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