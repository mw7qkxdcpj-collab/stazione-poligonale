import Image from 'next/image'

export default function Articolo() {
  return (
    <main
      className="min-h-screen bg-cover bg-fixed bg-center text-white"
      style={{ backgroundImage: "url('/sfondo.jpg')" }}
    >

      {/* overlay controllato */}
      <div className="min-h-screen bg-black/75 px-6 py-20">

        <article className="max-w-3xl mx-auto bg-black/40 border border-zinc-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">

          {/* titolo */}
          <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
            Back to the Past – La nostalgia videoludica che ci riporta al passato
          </h1>

          {/* testo */}
          <div className="space-y-6 text-zinc-300 text-lg leading-8">

            <p>
              C'è un fenomeno che da qualche anno a questa parte sembrerebbe aver preso di soprassalto qualsiasi tipo di medium esistente sulla superficie del globo terracqueo...
            </p>

            <p>
              Il proverbiale “Si stava meglio quando si stava peggio”...
            </p>

          </div>

          {/* immagine */}
          <div className="my-10">
            <Image
              src="/images/articolo-1/SansUndertale.jpeg"
              alt="Undertale"
              width={1200}
              height={700}
              className="rounded-xl w-full"
            />
            <p className="text-sm text-zinc-500 mt-2 text-center">
              Schermata di combattimento di Undertale
            </p>
          </div>

          {/* testo */}
          <div className="space-y-6 text-zinc-300 text-lg leading-8">

            <p>
              Un paio di anni dopo, tra il 2017 e il 2019...
            </p>

          </div>

          {/* immagine */}
          <div className="my-10">
            <Image
              src="/images/articolo-1/faith.jpeg"
              alt="Faith"
              width={1200}
              height={700}
              className="rounded-xl w-full"
            />
            <p className="text-sm text-zinc-500 mt-2 text-center">
              Halloween Hack di EarthBound
            </p>
          </div>

          {/* immagine */}
          <div className="my-10">
            <Image
              src="/images/articolo-1/earthbound.jpeg"
              alt="Earthbound"
              width={1200}
              height={700}
              className="rounded-xl w-full"
            />
            <p className="text-sm text-zinc-500 mt-2 text-center">
              Paura eh!?!
            </p>
          </div>

          {/* chiusura */}
          <div className="space-y-6 text-zinc-300 text-lg leading-8">

            <p>
              Questi giochi sono soltanto degli esempi...
            </p>

            <p>
              Come diceva il mio eroe PK: "Come si fa a chiedere tempo al tempo?"
            </p>

          </div>

        </article>

      </div>
    </main>
  )
}