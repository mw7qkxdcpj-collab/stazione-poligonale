import Image from 'next/image'

export default function Articolo() {
  return (
    <div className="px-6 py-16">

      {/* Container */}
      <article className="max-w-2xl mx-auto bg-zinc-900/75 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">

        {/* Titolo */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Dark Souls come specchio videoludico dell&apos;oblio umano
        </h1>
        <h2 className="text-xl text-zinc-400 font-normal leading-snug mb-4">
          Una riflessione sulla condizione umana giocando ai Dark Souls
        </h2>

        {/* Autore */}
        <p className="text-sm text-zinc-500 italic text-center mb-10">
          By nick mian
        </p>

        {/* Intro */}
        <div className="space-y-6 text-zinc-300 text-lg leading-9">
          <p>
            Nella vita, come nei soulslike (in particolare i Dark Souls che analizzeremo oggi), l&apos;oblio non è un evento improvviso, ma un processo lento, quasi impercettibile. La &quot;maledizione dei non morti&quot; non è soltanto una scusa narrativa per giustificare il &quot;respawn&quot;, ma diventa il concetto pulsante dell&apos;esistenzialismo. Esisti, ma perdendo parti di te lungo il percorso tortuoso della vita.
          </p>
          <p>
            Questo concetto, nei souls, viene reso unico, alternato da un gameplay arduo e soddisfacente, ma con un messaggio di fondo che si cela dietro a ogni racconto, quello della perdita di sé come qualcosa di inevitabile, quasi naturale.
          </p>
          <p>
            Quindi, miei cari lettori, se non siete crollati sotto effetto di droghe, assaliti da una profonda depressione, mi piacerebbe analizzare con voi la mia personale top tre dei personaggi che più mi hanno ispirato a una riflessione esistenzialista.
            Mettetevi in posizione (come il Crestfall Warrior di Dark Souls 1, per stare più comodi) e godetevi questo viaggio psico-filosofico all&apos;interno di Dark Souls, con allegate immagini di gioco cruenti, per mettere un po&apos; di colore in queste righe buie.
          </p>
        </div>

        {/* Immagine Crestfallen Warrior */}
        <div className="my-12">
          <Image
            src="/images/articolo-2/crestfellan warrior.png"
            alt="Il Crestfallen Warrior seduto in Dark Souls"
            width={1200}
            height={700}
            className="rounded-2xl w-full object-cover"
          />
          <p className="text-sm text-zinc-500 mt-3 italic text-center">
            I nostri lettori in questo momento 😐
          </p>
        </div>

        {/* Sezione 1 - Solaire */}
        <div className="space-y-6 text-zinc-300 text-lg leading-9">
          <h3 className="text-2xl font-bold text-white">
            1 — Il sole come speranza e meta
          </h3>
          <p>
            Il primo della lista e non poteva non essere lui. Mi perdonerete amici, perché forse ciò che esprimerò sarà un qualcosa di scontato, ma non potevo non partire, per questa analisi, da Solaire di Astora. È il Personaggio, quello che, quando lo incontriamo, riesce subito a rubare il nostro amore e la nostra stima e creare così un legame con lui molto profondo.
          </p>
          <p>
            È di forte impatto emotivo, poiché viene subito da pensare che sia, senza dubbio, una personalità avvolta da un entusiasmo contagioso, ma che, se analizzato a fondo durante lo svolgimento della storia, ci fa rendere conto di quanto sia avvolto da una profonda incertezza, fragilità e inquietudine di fondo.
          </p>
          <p>
            Capiremo subito, andando avanti nel gioco, che è un essere in cerca costante di un qualcosa che lo tenga aggrappato al mondo, che ha il bisogno di sperare che da qualche parte possa esistere il suo &quot;sole&quot;. Giocando e approfondendo la sua storia, vediamo che Solaire vive il suo destino peggiore: trovare una luce, ma è un qualcosa che lo corrode dall&apos;interno, non è una rivelazione, è una sua illusione, a cui lui si aggrappa troppo forte.
          </p>
          <p>
            Il mio amore sconfinato per questo personaggio nasce proprio da qui, il parallelismo nel sentirmi anche io così: una persona che, esattamente come Solaire, si aggrappa all&apos;immaginario di questo &quot;Sole&quot;, perseguendo un qualcosa di utopico e metafisico per alleviare le proprie sofferenze, illudendosi che quella percezione, quel credo, sia più forte di qualsiasi cosa, ma a cui nessuno potrà mai dare la garanzia che quel &quot;sole&quot; esista davvero.
          </p>
        </div>

        {/* Immagine Solaire */}
        <div className="my-12">
          <Image
            src="/images/articolo-2/solaire.png"
            alt="Solaire di Astora con la sua iconica posa in Dark Souls"
            width={1200}
            height={700}
            className="rounded-2xl w-full object-cover"
          />
          <p className="text-sm text-zinc-500 mt-3 italic text-center">
            Per chi non lo conoscesse, non è un saluto romano al quadrato, è solo l&apos;iconica posa di Solaire 👍🙋✊
          </p>
        </div>

        {/* Sezione 2 - Lucatiel */}
        <div className="space-y-6 text-zinc-300 text-lg leading-9">
          <h3 className="text-2xl font-bold text-white">
            2 — Dimenticarsi mentre si vive
          </h3>
          <p>
            Se c&apos;è un momento in cui Dark Souls smette di essere solo un viaggio tra rovine e spadate a NPC inutili per farmare qualche anima extra, per diventare qualcosa di più intimo — smettendo di parlarti del mondo per iniziare a parlarti di identità — non quella epica composta da eroi e imprese, ma quella quotidiana, quella fragile che esiste finché qualcuno riesce a riconoscerla. Ed è qui che entra in scena Lucatiel of Mirrah.
          </p>
          <p>
            Lucatiel non cade e non fallisce, ma semplicemente si consuma. Ogni incontro con lei dà la percezione che le manchi un pezzo, come se qualcosa le fosse stato sottratto. Non c&apos;è un momento preciso in cui tutto si spezza, ma solo un lento e inesorabile slittamento verso qualcosa di indefinito. Ed è proprio questa gradualità a renderla così vicina: non è una tragedia improvvisa, è un processo.
          </p>
          <p>
            A un certo punto, però, ci fa una richiesta — cruda, disarmante nella sua semplicità: ricordarla. Non ci chiede di essere salvata, ci chiede di non essere cancellata. Nei Souls l&apos;identità non viene garantita, esiste finché qualcuno la riconosce, finché resta impressa da qualche parte, anche solo nella memoria di chi l&apos;ha incontrata.
          </p>
          <p>
            C&apos;è qualcosa di fortemente crudele e allo stesso tempo di molto autentico nel modo in cui Dark Souls tratta Lucatiel: non puoi salvarla, non puoi invertire il processo. Puoi solo esserci e, soprattutto, ricordare.
          </p>
        </div>

        {/* Immagine Lucatiel */}
        <div className="my-12">
          <Image
            src="/images/articolo-2/uomo seduto.png"
            alt="Lucatiel of Mirrah in Dark Souls 2"
            width={1200}
            height={700}
            className="rounded-2xl w-full object-cover"
          />
          <p className="text-sm text-zinc-500 mt-3 italic text-center">
            Raro estratto del gioco in cui Lucatiel mostra un momento di profonda felicità 😄😎
          </p>
        </div>

        {/* Sezione 3 - Vendrick */}
        <div className="space-y-6 text-zinc-300 text-lg leading-9">
          <h3 className="text-2xl font-bold text-white">
            3 — Re senza Regno
          </h3>
          <p>
            Dark Souls 2 è oggettivamente una miniera piena di cocci interessanti da picconare e spolverare, perché nonostante l&apos;oblio — in questo caso videoludico — riesce comunque ad avere un significato di fondo molto forte attraverso i suoi personaggi.
          </p>
          <p>
            L&apos;ultimo di questa analisi sulla vita è King Vendrick, l&apos;eroe più lucido della saga, che chiude questo cerchio. Nelle prime interazioni nel gioco capiamo che è un&apos;anima vagante: non è più un sovrano, è una figura vuota che vaga senza uno scopo. Eppure questa è la sua forza, poiché rappresenta appieno la presa di coscienza nel momento in cui si perde tutto — i propri errori, le conseguenze delle proprie scelte. Il problema, però, è che questa consapevolezza non lo porta a nulla.
          </p>
          <p>
            L&apos;aspetto più crudele dei Dark Souls è proprio questo: ci aiutano a prendere coscienza, tramite i suoi protagonisti, che capire non ci permetterà di salvarci. Resteremo solo con l&apos;amaro in bocca pensando a ciò che abbiamo perso e che non tornerà più.
          </p>
        </div>

        {/* Immagine Vendrick */}
        <div className="my-12">
          <Image
            src="/images/articolo-2/vecchio scheletrico.png"
            alt="King Vendrick in Dark Souls 2"
            width={1200}
            height={700}
            className="rounded-2xl w-full object-cover"
          />
          <p className="text-sm text-zinc-500 mt-3 italic text-center">
            Non è un vecchio in fila alla posta il 27 del mese, ma King Vendrick che sta per aprirti il culo ricercando una ragione di vita 💀💢
          </p>
        </div>

        {/* Conclusione */}
        <div className="space-y-6 text-zinc-300 text-lg leading-9">
          <p>
            In conclusione, possiamo affermare che Dark Souls non ti lascia con una vittoria, ma con una sensazione. Non insegna a vincere, ma a riconoscere: la fatica, la perdita, la solitudine e la lucidità che arriva sul finire.
          </p>
          <p className="text-zinc-400 italic">
            È uno specchio silenzioso che non consola, ma riflette. Ed è proprio qui, forse, che riesce a insinuarsi nel cuore e nella mente di ogni suo estimatore.
          </p>
        </div>

      </article>
    </div>
  );
}