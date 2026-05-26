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
            <p className="text-sm text-zinc-500 mt-3 italic text-center">
              By Frank-Stein 
            </p>
            <p>
              C'è un fenomeno che da qualche anno a questa parte sembrerebbe aver preso di soprassalto qualsiasi tipo di medium esistente sulla superficie del globo terracqueo, si tratta di un preponderante effetto nostalgia. Il proverbiale “Si stava meglio quando si stava peggio” fondamentalmente, anche se il “peggio” in questione è come se non fosse mai esistito, andando così a porre un velo sdolcinatamente romantico di quello che è stato il passato. Fermatevi a pensarci un istante: nel cinema ormai la quantità di Requel, Legacy Sequel, riproposizioni, reinterpretazioni, adattamenti sono nettamente superiori rispetto alla quantità di prodotti originali. Facendo degli esempi pratici abbiamo Scream, ormai arrivato al settimo e stanchissimo capitolo che ci ripropone (nuovamente) le fatiche di Sidney Prescott, o ancora  Jurassic Park, Avatar, Ghostbusters ecc... Anche la musica non viene risparmiata, ci sono suoni che rimandano a tonalità di generazioni passate o vere e proprie band incentrate su un certo stile di musica, per come dire, “vintage” (ad esempio i The Midnight oppure i Dance With the Dead). Ovviamente non poteva essere esente da tutto ciò il mondo dei videogiochi. Parlando di Nostalgia nel campo videoludico, le prime operazioni che vengo in mente a tutti sono ovviamente i Remake e le Remastered (i fellow undeads del buon vecchio Michele del Deserto sapranno riconoscere la differenza tra le due) di titoloni che hanno fatto praticamente la storia dell'intrattenimento elettronico che, sebbene a volte siano operazioni quasi “necessarie” per poter svecchiare un'antica gloria, altre volte mancano completamente il punto rendendoli niente più che una blanda versione di ciò che erano un tempo, nella speranza di replicare la loro lucentezza (sto guardando voi remake di MediEvil su Ps4 e remastered di Silent Hill 2 e 3 su Ps3/Xbox 360). Si tratta di un argomento interessante di cui discutere, ma non è questo il focus del post, questo perché quando nel titolo facevo riferimento alla cosiddetta nostalgia videoludica, avevo in mente più un certo tipo di estetica, di stile artistico si potrebbe azzardare a dire, che va a ad omaggiare quello che è stato il videogioco, creando non solo un ponte tra generazioni diverse, ma anche cercando di mantenere intatte le sensazioni provate in un ormai lontano inizio delle nostre carriere da videogiocatori. La riscoperta di questa estetica datata è un fenomeno nativo dell'internet, il quale sono convinto essere il primo nostalgico, come si può notare da veri e propri fenomeni artistici come la Vaporwave o il Frutiger Aero che vanno a riprendere font e intuizioni visive che riconducono ad un determinato periodo storico. Non sorprende infatti che questa, potremmo definire, “Retro-Rinascita”, sia molto più viva all'interno del panorama Indie, piuttosto che in quello dei tripla A. Torniamo indietro al 2015, l'anno di uscita che ha visto alcuni dei mostri sacri di una generazione, come: Bloodborne, The Witcher 3 e Metal Gear Solid V: The Phantom Pain. Nel mentre, online, viene caricato un RPG in pixel art chiamato Undertale. Partorito dalla folle mente di Toby “Radiation” Fox, presentava una meccanica particolare secondo la quale potevi risparmiare tutti i mostri che ti si paravano davanti, piuttosto che ucciderli a suon di sprangate sui denti (opzione che rimane comunque percorribile). Un giochino all'apparenza così innocuo si rivelò essere in realtà pieno di contenuti e misteri che hanno tenuto impegnata la community per anni anche dopo la sua uscita. Se ha un retrogusto di già visto, più nello specifico, la sensazione di aver provato un Undertale tra Nes e Snes è perché non solo visivamente, ma anche a livello di humor e di scrittura e anche nel combat system, questo cult moderno deve parte del suo appeal ad EarthBound di Shigesato Itoi, serie che qui da noi in occidente è quasi del tutto sconosciuta, ma con la quale Fox ha una lunga storia di creatore di mod e hack. Che poi, riflettendoci, fa ridere il fatto che Fox, ora impiegato tra le fila di Nintendo, abbia cominciato la sua carriera di sviluppatore con rom hack di un gioco della grande N; soprattutto considerando le politiche di quest'ultima
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

          {/* Testo */}
          <div className="space-y-6 text-zinc-300 text-lg leading-9">

            <p>
              Un paio di anni dopo, tra il 2017 e il 2019, su itch.io, ancora oggi sito di riferimento per appassionati di progetti videoludici indipendenti, viene pubblicato un gioco particolare: Faith, sviluppato da Airdorf Games. Un horror minimalista che fa del "Less is More" il suo cavallo di battaglia, questo perché sfrutta le "limitazioni" di una grafica 8-bit, tipica dei primi videogiochi apparsi su computer come Apple II, per poter giocare con i sensi e l'immaginazione del giocatore, andando a creare un vero sentimento di terrore e angoscia. Composto da 3 capitoli, l'ultimo dei quali è stato sviluppato da New Blood Interactive, che si è occupata di inserire anche i precedenti due all'interno di un pacchetto, completo di contenuti aggiuntivi, Faith: The Unholy Trinity, rilasciato nel 2022, su qualsiasi console (anche in versione fisica per chi come me fosse un maniaco collezionista).
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
{/* Testo */}
          <div className="space-y-6 text-zinc-300 text-lg leading-9">

            <p>
             Se c'è però una generazione di console che riesce all'unanimità a scatenare una forte ondata di nostalgia, quella sembrerebbe essere la Quinta Generazione (quella di Ps1 e N64 per capirci). Un gioco che a mio avviso riesce a catturare le vibes di questo storico periodo del gming è Alisia, uscito nel 2022 su Steam e Ps4. Sviluppato da Casper Croes, è praticamente il figlio illegittimo dell'unione tra Resident Evil e Silent Hill, un survival horror in piena regola, che effettua una ricostruzione 1:1 di quella che è stata la sopravvivenza all'orrore poligonale: Background pre-renderizzati e Tank Controls (figli di RE), una storia psicologicamente disturbate (cortesia di SH) il tutto dolcemente immerso in una rispolverata grafica di Ps1 
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

          {/* Testo */}
          <div className="space-y-6 text-zinc-300 text-lg leading-9">

            <p>
              Questi giochi sono soltanto degli esempi, portati dalla mia personale esperienza con ognuno di loro, ma sappiate che di questo stile vi è un sottobosco. Per citarne giusto qualcun altro, abbiamo: Lunacid, sviluppato dal giovane Akuma Kira, il quale si sta facendo le ossa nel campo videoludico sfornando capolavori su capolavori (come ad esempio Lost in Vivo che vi consiglio di recuperare se volete essere scioccati), è un King's Field Like, ovvero, un Dungeon Crawler ispirato alla serie action rpg che cominciò sulla prima PlayStation e realizzata da niente meno che FromSoftware; Dread Delusion, che è recentemente arrivato anche sugli store console, oltre che su Steam, un (altro) action rpg open world che potrebbe essere quasi paragonato ad un Morrowind nelle sue meccaniche di gioco, ma come se fosse uscito su Ps1 e se ci stessi giocando costantemente sotto effetto di LSD; Pseudoregalia, un platformer (e già questo mi scalda il cuore) che riprende molto lo stile e il movimento di Mario 64, ma perfezionandolo e approfondendolo in modo da creare un esperienza videoludica innovativa ma allo stesso tempo, con un gusto retrò particolare. Qui ho cercato di mettere soltanto i più famosi, ma la lista potrebbe andare ancora avanti.
              Togliendo per un attimo il velo sdolcinatamente nostalgico che è stato posto fino ad ora, uno dei motivi del perché questo tipo di estetica viene ampiamente utilizzata nell'ambito delle produzioni Indie è, ovviamente, una maggiore "semplicità" in fase di sviluppo; sfruttare la forma di modelli e ambientazioni più datati, è molto più gestibile nel contesto di un team di sviluppo più piccolo, con budget limitati, rispetto invece alle grandi produzioni.
              Ma può essere tutto ridotto ad una questione di danaro? Per quanto possa essere benissimo così, essendo io un inguaribile romantico, voglio pensarla diversamente. Sono convinto che tra tutti questi sviluppatori indipendenti, ci siano persone che sono rimaste talmente legate al loro passato di videogiocatori che in qualche modo hanno tentato di farlo rivivere. Dietro l'estetica retrò delle loro creazioni, si cela un forte senso di nostalgia, quest'ultima è un fattore psicologico che si collega alla memoria; attraverso degli stimoli, che nel nostro caso possono essere visivi, uditivi, o a livello di feeling nel gameplay, puntano a ricongiungersi con delle esperienze avute in precedenza. Tutto giusto MA, secondo me, il loro scopo finale , è quello di far rivivere non tanto una vecchia esperienza di gioco, quanto più un tempo lontano, un tempo nel quale i videogiochi ci hanno inconsapevolmente aiutato a creare delle memorie le quali, con le incertezze dell'oggi, sembrano molto più forti e rassicuranti di quanto non lo fossero prima.
              Come  diceva il mio eroe PK: "Come si fa a chiedere tempo al tempo?"
            </p>

          </div>


        </article>

      </div>
    </main>
  );
}