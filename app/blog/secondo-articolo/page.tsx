import Image from 'next/image'

export default function Articolo() {
  return (
    <div className="px-6 py-16">

      {/* Container */}
      <article className="max-w-2xl mx-auto bg-zinc-900/75 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">

        {/* Titolo */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
          Dark Souls come specchio videoludico dell&apos;oblio umano
        </h1>
        <h2 className="text-xl text-zinc-400 font-normal leading-snug mb-4">
          Una riflessione sulla condizione umana giocando ai Dark Souls
        </h2>


        {/* Intro */}
        <div className="space-y-6 text-zinc-300 text-lg leading-9">
          <p>
            Nella vita, come nei soulslike (in particolare i Dark Souls che analizzeremo oggi), l'oblio non è un evento improvviso, ma un processo lento, quasi impercettibile. 
          </p>
          <p>
          La ''maledizione dei non morti'' non è soltanto una scusa narrativa per giustificare il ''respawn'', ma diventa il concetto pulsante dell'esistenzialismo. Esisti, ma perdendo parti di te lungo il percorso tortuoso della vita.
          </p>
          <p>
            E' proprio questo che rende i Soulslike qualcosa di più di un semplice videogiochi. Nascosto dietro ai combattimenti, alle rovine e ai boss che ci costringono a riprovare e riprovare decine di volte, si cela una domanda profondamente umana: costa resta di noi quando iniziamo a dimenticare chi siamo?
          </p>
          <p>
            E' con queste premesse, tutt'altro che sarcastiche, che ci addentreremo nella conoscenza di tre personaggi che, più di tutti, mi hanno spinto a guardare Dark Souls, non solo come un gioco, ma come a una riflessione sull'esistenza.
          </p>
          <p>
            Mettetevi in posizione (come il Crestfall Warrior di Dark Souls 1, per stare più comodi) e godetevi questo viaggio psico-filosofico all'interno di Dark Souls, con allegate immagini di gioco cruenti, per mettere un pò di colore in queste righe buie. 
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
          Il primo della lista e non poteva non essere lui.
          </p>
          <p>
           Solaire di Astora, uno di quei personaggi che riescono a illuminare il mondo di Dark Souls fin dal primo incontro.
           </p>
          <p>
            E' il Personaggio, quello che, sembra illuminare il mondo che lo circonda. In un universo fatto di rovine e disperazione, il suo entusiasmo appare quasi fuori dagli schemi rendendolo iconico, ed è proprio per questo che è impossibile dimenticarlo.
          </p>
          <p>
            Ma basta proseguire nel viaggio per accorgersi che dietro quel fare sereno, tranquillo e confortevole si nasconde qualcosa di molto più fragile.
          </p>
          <p>
            Non è la semplice ricerca del suo ''Sole'', ma un qualcosa che renda sopportabile il suo cammino. Il ''Sole' diventa il nome che da alla speranza: una verità; una metà o addirittura un credo.
          </p>
          <p>
            Ed è qui che nasce sul dramma.
          </p>
          <p>
            Alla fine lui troverà davvero una luce, ma non è un a rivelazione. E' un'ossessione. Più la ricerca del Sole diventa costante, più smette di vedere tutto il resto. La speranza che gli ha dato benzina di vita, finisce per bruciarlo.
          </p>
          <p>
            Forse il dramma di Solaire non è aver inseguito un'illusione. Il suo dramma è aver affidato la propria esistenza e qualcosa che doveva trovare fuori di sè. E quando quel Sole si rivela diverso da come lo aveva immaginato, non resta più nulla a cui aggrapparsi.
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
          ''Per chi non lo conoscesse, non è un saluto romano al quadrato, è solo l'iconica posa di Solaire 👍🙋✊''
          </p>
        </div>

        {/* Sezione 2 - Lucatiel */}
        <div className="space-y-6 text-zinc-300 text-lg leading-9">
          <h3 className="text-2xl font-bold text-white">
            2 — Dimenticarsi mentre si vive
          </h3>
          <p>
          Se c'è un momento in cui Dark Souls smette di parlarti del mondo e inizia a parlarti di identità, non quella epica composta da eroi e imprese, ma quella quotidiana, quella fragile che esiste finchè qualcuno riesce a riconoscerla. Ed è qui che entra in scena Lucatiel of Mirrah.
          </p>
          <p>
          Lucatiel non cade.
          </p>
          <p>
            Non fallisce.
          </p>
          <p>
          Ma semplicemente si consuma.
          </p>
          <p>
            Ogni incontro con lei sembra portar via un altro frammento di ciò che era.
          </p>
          <p>
            Non c'è un momento preciso in cui tutto questo si spezza, ma esiste solo un lento e inesorabile slittamento verso qualcosa di indefinito.
          </p>
          <p>
            A un certo punto, però, ci fa una richiesta semplice, devastante nella sua semplicità: ricordarla!
          </p>
          <p>
            Non ci chiede di essere salvata, ma ci chiede di non essere cancellata.
          </p>
          <p>
            Forse questo è la forma più crudele dell'oblio in Dark Souls: non è la paura di smettere di esistere, ma la paura di smettere di essere ricordati.
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
          "Estratto del gioco in cui Lucatiel mostra un raro momento di profonda e rara felicità😄😎"
          </p>
        </div>

        {/* Sezione 3 - Vendrick */}
        <div className="space-y-6 text-zinc-300 text-lg leading-9">
          <h3 className="text-2xl font-bold text-white">
            3 — Re senza Regno
          </h3>
          <p>
          Se Lucatiel rappresenta la paura di essere dimenticati, King Vendrick incarna un'altra forma di oblio: quella di chi comprende troppo tardi il peso delle proprie scelte.
          </p>
          <p>
          Quando abbiamo le prime interazioni capiamo che davanti non abbiamo un sovrano, ma un uomo, un'anima vagante, è un sovrano spodestato, una figura vuota che vaga senza uno scopo.
          </p>
          <p>
            Eppure questa è la sua forza, poichè rappresenta appieno la presa di coscienza nel momento in cui si perde tutto, i propri errori e si inizia a fare i conti con le conseguenze delle proprie scelte, il problema per lui, però, è che questa consapevolezza non lo porta a nulla.
          </p>
          <p>
            Ed è qui che si compie la tragedia.
          </p>
          <p>
            Dark souls ci suggerisce una verità tanto semplice quanto scomoda: capire non significa salvarsi.
          </p>
          <p>
            Esistono errori che comprendiamo soltanto quando non possiamo più rimediarvi.
          </p>
          <p>
            Vendrick continua a camminare, non perchè speri ancora, ma perchè, ormai, non gli resta altro che la coscienza per ciò che ha perduto.
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
          Dark Souls non ti lascia con una vittoria, ma con una sensazione.
          </p>
          <p>
            Non insegna a vincere, ma a riconoscere: la fatica, la perdita, la solitudine e la lucidità che arriva sul finire.
          </p>
          <p>
            E' uno specchio silenzioso che non consola, ma riflette, ed è proprio qui, forse, che riesce a insinuarsi nel cuore e nella mente di ogni suo estimatore.
          </p>
          <p className="text-zinc-400 italic">
          da uno spunto riflessivo di Irpinoparanoico
          </p>
        </div>

      </article>
    </div>
  );
}