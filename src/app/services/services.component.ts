import {Component, ElementRef, ViewChild} from '@angular/core';
import {LawEnum} from '../core/enum/law-enum';
import {ModalComponent} from '../core/modal/modal.component';

declare var bootstrap: any;

@Component({
  selector: 'app-services',
  template: `
    <section class="py-5">
      <div class="container-fluid px-4">
        <div class="text-center mb-5">
          <h1 class="fw-bold text-primary mb-3">I Nostri Servizi</h1>
          <p class="text-secondary mx-auto" style="max-width: 600px;">
            Offriamo consulenza legale specializzata in diversi ambiti del diritto,
            garantendo soluzioni efficaci e personalizzate per ogni situazione.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">gavel</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Civile</h3>
                    <p class="text-secondary mt-2">
                      Assistenza completa in materia di diritto civile, contratti,
                      responsabilità civile e risarcimento danni.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.CIVILE)">Maggiori Informazioni</button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto del Lavoro</h3>
                    <p class="text-secondary mt-2">
                      Consulenza e assistenza in materia di contratti di lavoro, licenziamenti,
                      mobbing e diritto sindacale.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.LAVORO)">Maggiori Informazioni</button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Tributario</h3>
                    <p class="text-secondary mt-2">
                      Supporto in materia fiscale, contenzioso tributario, accertamenti e rimborsi fiscali.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.TRIBUTARIO)">Maggiori Informazioni</button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">apartment</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Societario</h3>
                    <p class="text-secondary mt-2">
                      Assistenza nella costituzione, gestione e trasformazione di società commerciali e enti non profit.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.SOCIETARIO)">Maggiori Informazioni</button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">handshake</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Mediazione Civile</h3>
                    <p class="text-secondary mt-2">
                      Soluzione alternativa delle controversie attraverso la mediazione obbligatoria e facoltativa.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.MEDIAZIONE)">Maggiori Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">business_center</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Commerciale</h3>
                    <p class="text-secondary mt-2">
                      Assistenza in materia di appalti pubblici, contenzioso amministrativo e diritto degli enti
                      pubblici.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.COMMERCIALE)">Maggiori
                  Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">home_work</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Immobiliare</h3>
                    <p class="text-secondary mt-2">
                      Assistenza nell'acquisto e nella vendita di immobili sia residenziali che commerciali,
                      oltre che nella gestione di operazioni immobiliari complesse, sia in Italia che all'estero.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.IMMOBILIARE)">Maggiori
                  Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Penale</h3>
                    <p class="text-secondary mt-2">
                      Assistenza per reati fiscali, fallimentari, contro il patrimonio e contro la persona.
                      pubblici.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.PENALE)">Maggiori
                  Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">balance</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Contenzioso Civile</h3>
                    <p class="text-secondary mt-2">
                      Assistenza e difesa in giudizio del cliente, sull'intero territorio nazionale ed anche dinanzi
                      alle Magistrature Superiori, in tutti i settori di attività dello studio.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.CONTENZIOSO)">Maggiori
                  Informazioni
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <app-modal [modalTitle]="modalTitle" [modalBtnCloseText]="'Chiudi'">
      <div #divModalBody></div>
    </app-modal>

  `,
  imports: [
    ModalComponent
  ],
  standalone: true
})
export class ServicesComponent {
  protected readonly LawEnum = LawEnum;
  @ViewChild('divModalBody') divModalBody!: ElementRef;
  modalTitle = '';

  openModal(lawType: LawEnum) {
    let service = this.servicesDetail.aree_legali.find(x => x.nome === lawType);
    const modalOfService = new bootstrap.Modal(document.getElementById('modalService'));
    this.modalTitle = service?.titolo ?? 'Servizio';
    this.divModalBody.nativeElement.innerHTML = `<p>${service?.descrizione}</p>`;
    modalOfService.toggle();
  }

  servicesDetail = {
    "aree_legali": [
      {
        "nome": LawEnum.SOCIETARIO,
        "titolo": "Diritto Societario",
        "descrizione": "Offriamo consulenza legale strategica per l'intero ciclo di vita dell'impresa. Assistiamo i clienti nella costituzione di società, nella redazione di statuti e patti parasociali, e li guidiamo con esperienza nelle operazioni straordinarie (fusioni, acquisizioni, scissioni e trasformazioni). Il nostro supporto si estende alla compliance aziendale, alla governance e alla gestione delle crisi societarie, garantendo sempre la massima tutela degli interessi di soci e amministratori."
      },
      {
        "nome": LawEnum.LAVORO,
        "titolo": "Diritto del Lavoro",
        "descrizione": "Forniamo assistenza completa e bilanciata sia a datori di lavoro che a dipendenti. La nostra attività include la redazione e l'analisi di contratti di lavoro (subordinato, autonomo, dirigenziale), la gestione delle procedure disciplinari, dei licenziamenti individuali e collettivi. Ci occupiamo anche di contenziosi e vertenze in materia di differenze retributive, mobbing, infortuni sul lavoro e tutele previdenziali, mirando sempre a soluzioni eque e conformi alle normative vigenti."
      },
      {
        "nome": LawEnum.COMMERCIALE,
        "titolo": "Diritto Commerciale",
        "descrizione": "Siamo specializzati nella tutela e nello sviluppo del business a livello nazionale e internazionale. Assistiamo le aziende nella negoziazione e stesura di contratti commerciali complessi (agenzia, distribuzione, franchising, appalto, fornitura) e gestiamo con prontezza le pratiche di recupero crediti in via stragiudiziale e giudiziale. Offriamo inoltre consulenza in materia di proprietà industriale, concorrenza sleale e diritto dei consumatori, proteggendo il tuo patrimonio commerciale."
      },
      {
        "nome": LawEnum.CIVILE,
        "titolo": "Diritto Civile",
        "descrizione": "Il Diritto Civile è il cuore della nostra attività, coprendo tutti gli aspetti della vita privata. Forniamo assistenza legale in materia di Diritto di Famiglia (separazioni, divorzi, affidamento), Diritto Successorio (testamenti, divisioni ereditarie), e tuteliamo i clienti in casi di responsabilità contrattuale ed extracontrattuale (risarcimento danni, sinistri stradali). Il nostro approccio è meticoloso e mirato alla risoluzione rapida ed efficace delle controversie personali e patrimoniali."
      },
      {
        "nome": LawEnum.IMMOBILIARE,
        "titolo": "Diritto Immobiliare",
        "descrizione": "Assistiamo privati e imprese in tutte le operazioni immobiliari. La nostra consulenza copre la negoziazione e stesura di contratti di compravendita, preliminari e locazione (abitativa e commerciale). Ci occupiamo anche di sfratti, questioni condominiali complesse, servitù e gestione legale del patrimonio immobiliare, garantendo sicurezza e conformità normativa in ogni transazione e disputa relativa alla proprietà."
      },
      {
        "nome": LawEnum.CONTENZIOSO,
        "titolo": "Contenzioso Civile",
        "descrizione": "Rappresentiamo i nostri clienti in ogni fase del contenzioso avanti a Giudici di Pace, Tribunali, Corti d'Appello e Corte di Cassazione. Agiamo con una strategia processuale rigorosa e mirata, curando l'istruttoria, l'analisi delle prove e la stesura degli atti difensivi. Il nostro obiettivo è massimizzare le possibilità di successo, assistendoti con determinazione nel recupero crediti, nella difesa da pretese altrui e in ogni lite che richieda la tutela giurisdizionale."
      },
      {
        "nome": LawEnum.TRIBUTARIO,
        "titolo": "Diritto Tributario",
        "descrizione": "Offriamo consulenza e assistenza legale per la prevenzione e la risoluzione del contenzioso fiscale. Interveniamo tempestivamente in caso di verifiche fiscali, avvisi di accertamento, cartelle esattoriali e sanzioni. Rappresentiamo i clienti davanti alle Commissioni Tributarie Provinciali e Regionali, lavorando per annullare o ridurre il carico impositivo e per garantire la corretta interpretazione e applicazione delle norme tributarie."
      },
      {
        "nome": LawEnum.PENALE,
        "titolo": "Diritto Penale",
        "descrizione": "Garantiamo una difesa tecnica qualificata in ogni tipo di procedimento penale, sia come difensori dell'imputato che come legali di parte offesa (costituzione di parte civile). La nostra competenza spazia dai reati contro la persona e il patrimonio, ai reati societari e fallimentari. Offriamo un'assistenza costante, discreta e meticolosa, dalla fase delle indagini preliminari fino al dibattimento, con l'obiettivo primario di tutelare la libertà e l'onorabilità del cliente."
      },
      {
        "nome": LawEnum.MEDIAZIONE,
        "titolo": "Mediazione Civile",
        "descrizione": "Promuoviamo attivamente la risoluzione alternativa delle liti, assistendo i clienti nel procedimento obbligatorio e volontario di mediazione. Crediamo che la mediazione sia uno strumento fondamentale per raggiungere accordi rapidi, riservati ed economicamente vantaggiosi. Ti guidiamo nel dialogo con la controparte per trovare un punto d'incontro e definire una soluzione negoziale vincolante, evitando i lunghi e costosi tempi di un processo."
      }
    ]
  }



}
