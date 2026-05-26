import Image from 'next/image'
export default function Articolo() {
  return (
    <main
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/sfondo.jpg')" }}
    >

      {/* OVERLAY */}
      <div className="min-h-screen bg-black/70 p-10">

        <article className="max-w-3xl mx-auto">

          <h1 className="text-5xl font-bold text-emerald-400 mb-8">
             Back to the Past – La nostalgia videoludica che ci riporta al passato
          </h1>

          <p className="text-zinc-300 text-lg leading-8 mb-6">
            Questo è il contenuto del tuo primo articolo.
          </p>
          <Image
  src="/images/articolo-1/SansUndertale.jpeg"
  alt="GTA 6"
  width={1200}
  height={700}
  className="rounded-2xl my-8"
/>

          <p className="text-zinc-400 leading-8">
            Qui puoi scrivere pensieri, news, racconti, aggiornamenti,
            progetti o qualsiasi contenuto del tuo blog.
          </p>
          <Image
  src="/images/articolo-1/faith.jpeg"
  alt="GTA 6"
  width={1200}
  height={700}
  className="rounded-2xl my-8"
/>

        </article>

      </div>

    </main>
  );
}