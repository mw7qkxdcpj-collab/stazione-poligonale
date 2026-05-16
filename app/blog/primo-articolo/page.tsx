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
            Primo articolo
          </h1>

          <p className="text-zinc-300 text-lg leading-8 mb-6">
            Questo è il contenuto del tuo primo articolo.
          </p>

          <p className="text-zinc-400 leading-8">
            Qui puoi scrivere pensieri, news, racconti, aggiornamenti,
            progetti o qualsiasi contenuto del tuo blog.
          </p>

        </article>

      </div>

    </main>
  );
}