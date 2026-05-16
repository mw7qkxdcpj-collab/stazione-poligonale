import Image from "next/image";
import Link from "next/link";
<div className="mt-10 grid gap-6">

  <Link href="/blog/primo-articolo">
    <div className="p-6 border border-zinc-800 rounded-xl hover:border-emerald-400 transition cursor-pointer">
      <h3 className="text-xl font-bold">Primo articolo</h3>
      <p className="text-zinc-400">
        Clicca per leggere il primo articolo del blog.
      </p>
    </div>
  </Link>

</div>

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