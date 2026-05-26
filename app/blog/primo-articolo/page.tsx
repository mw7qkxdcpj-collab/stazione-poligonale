import Image from 'next/image'

export default function Articolo() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* background soft (niente immagine invasiva) */}
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black px-6 py-20">

        {/* ARTICLE CONTAINER */}
        <article className="max-w-[720px] mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10 tracking-tight">
            Back to the Past – La nostalgia videoludica che ci riporta al passato
          </h1>

          {/* INTRO TEXT */}
          <div className="space-y-6 text-zinc-300 text-[18px] leading-[1.85]">

            <p>
              C'è un fenomeno che da qualche anno a questa parte sembrerebbe aver preso di soprassalto qualsiasi tipo di medium esistente sulla superficie
              del globo terracqueo, si tratta di un preponderante effetto nostalgia...
            </p>

            <p>
              Il proverbiale “Si stava meglio quando si stava peggio” fondamentalmente, anche se il “peggio” in questione è come se non fosse mai esistito...
            </p>

          </div>

          {/* IMAGE BLOCK 1 */}
          <figure className="my-14">
            <Image
              src="/images/articolo-1/SansUndertale.jpeg"
              alt="Undertale"
              width={1200}
              height={700}
              className="rounded-xl w-full object-cover"
            />
            <figcaption className="text-sm text-zinc-500 mt-3 text-center">
              Schermata di combattimento di Undertale
            </figcaption>
          </figure>

          {/* TEXT */}
          <div className="space-y-6 text-zinc-300 text-[18px] leading-[1.85]">

            <p>
              Un paio di anni dopo, tra il 2017 e il 2019, su itch.io...
            </p>

          </div>

          {/* IMAGE BLOCK 2 */}
          <figure className="my-14">
            <Image
              src="/images/articolo-1/faith.jpeg"
              alt="Faith"
              width={1200}
              height={700}
              className="rounded-xl w-full object-cover"
            />
            <figcaption className="text-sm text-zinc-500 mt-3 text-center">
              La famigerata Halloween Hack di EarthBound di Toby Fox
            </figcaption>
          </figure>

          {/* IMAGE BLOCK 3 */}
          <figure className="my-14">
            <Image
              src="/images/articolo-1/earthbound.jpeg"
              alt="Earthbound"
              width={1200}
              height={700}
              className="rounded-xl w-full object-cover"
            />
            <figcaption className="text-sm text-zinc-500 mt-3 text-center">
              Paura eh!?!
            </figcaption>
          </figure>

          {/* IMAGE BLOCK 4 */}
          <figure className="my-14">
            <Image
              src="/images/articolo-1/alisa.jpeg"
              alt="Alisa"
              width={1200}
              height={700}
              className="rounded-xl w-full object-cover"
            />
            <figcaption className="text-sm text-zinc-500 mt-3 text-center">
              Inserire battuta sul Jill Sandwich
            </figcaption>
          </figure>

          {/* FINAL TEXT */}
          <div className="space-y-6 text-zinc-300 text-[18px] leading-[1.85]">

            <p>
              Questi giochi sono soltanto degli esempi, portati dalla mia personale esperienza...
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