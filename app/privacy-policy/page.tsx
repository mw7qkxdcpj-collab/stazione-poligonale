export default function PrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/sfondo.jpg')" }}
    >
      <div className="min-h-screen bg-black/70 px-6 py-20">

        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            Privacy e Cookie Policy
          </h1>

          <p className="text-zinc-300 leading-8 mb-6">
            Questo sito può raccogliere dati anonimi di navigazione
            tramite cookie tecnici e strumenti statistici.
          </p>

          <p className="text-zinc-300 leading-8 mb-6">
            Nessun dato personale viene ceduto a terze parti.
          </p>

          <p className="text-zinc-300 leading-8">
            Per richieste o informazioni:
            tuaemail@example.com
          </p>

        </div>

      </div>
    </main>
  );
}