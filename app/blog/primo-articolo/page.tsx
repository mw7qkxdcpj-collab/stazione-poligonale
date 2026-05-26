import Image from 'next/image'

export default function Articolo() {
  return (
    <main
      className="min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/sfondo.jpg')" }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/80 px-6 py-16">

        {/* Container */}
        <article className="max-w-2xl mx-auto bg-zinc-900/75 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">

          {/* Titolo */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
            Back to the Past – La nostalgia videoludica che ci riporta al passato
          </h1>

          {/* Intro */}
          <div className="space-y-6 text-zinc-300 text-lg leading-9">

            <p>
              C'è un fenomeno che da qualche anno a questa parte sembrerebbe aver preso di soprassalto qualsiasi tipo di medium esistente sulla superficie del globo terracqueo...
            </p>

          </div>

          {/* Immagine */}
          <div className="my-12">
            <Image
              src="/images/articolo-1/SansUndertale.jpeg"
              alt="Undertale"
              width={1200}
              height={700}
              className="rounded-2xl w-full object-cover"
            />

            <p className="text-sm text-zinc-500 mt-3 italic text-center">
              Schermata di combattimento di Undertale
            </p>
          </div>

          {/* Testo */}
          <div className="space-y-6 text-zinc-300 text-lg leading-9">

            <p>
              Un paio di anni dopo, tra il 2017 e il 2019, su itch.io...
            </p>

          </div>

          {/* Immagine */}
          <div className="my-12">
            <Image
              src="/images/articolo-1/faith.jpeg"
              alt="Faith"
              width={1200}
              height={700}
              className="rounded-2xl w-full object-cover"
            />

            <p className="text-sm text-zinc-500 mt-3 italic text-center">
              La famigerata Halloween Hack di EarthBound di Toby Fox
            </p>
          </div>

          {/* Immagine */}
          <div className="my-12">
            <Image
              src="/images/articolo-1/earthbound.jpeg"
              alt="Earthbound"
              width={1200}
              height={700}
              className="rounded-2xl w-full object-cover"
            />

            <p className="text-sm text-zinc-500 mt-3 italic text-center">
              Paura eh!?!?
            </p>
          </div>

          {/* Immagine */}
          <div className="my-12">
            <Image
              src="/images/articolo-1/alisa.jpeg"
              alt="Alisa"
              width={1200}
              height={700}
              className="rounded-2xl w-full object-cover"
            />

            <p className="text-sm text-zinc-500 mt-3 italic text-center">
              Inserire battuta sul Jill Sandwich
            </p>
          </div>

        </article>

      </div>
    </main>
  );
}