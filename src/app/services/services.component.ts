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
            Offriamo consulenza legale integrata in diversi ambiti
            del diritto per la migliore tutela degli interessi di imprese e privati.
          </p>
        </div>

        <div class="row g-4">
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
                      Assistenza e consulenza ad imprese e società operanti sul territorio nazionale.
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
                    <span class="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Tributario</h3>
                    <p class="text-secondary mt-2">
                      Supporto e consulenza in materia fiscale, contenzioso tributario, accertamenti, agevolazioni e rimborsi.
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
                    <span class="material-symbols-outlined">gavel</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Civile</h3>
                    <p class="text-secondary mt-2">
                      Assistenza e consulenza in tutte le branche del diritto civile: famiglia, successioni, responsabilità civile e risarcimento danni.
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
                    <span class="material-symbols-outlined">apartment</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Societario</h3>
                    <p class="text-secondary mt-2">
                      Assistenza e consulenza nella costituzione, gestione e trasformazione di società commerciali ed enti no-profit.
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
                    <span class="material-symbols-outlined">home_work</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Immobiliare</h3>
                    <p class="text-secondary mt-2">
                      Assistenza e consulenza nell'acquisto e nella vendita di immobili, sia residenziali che commerciali, oltre che nella gestione di operazioni immobiliari complesse, sia in Italia che all'estero.
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
                    <span class="material-symbols-outlined">clinical_notes</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Consulenza Legale Continuativa</h3>
                    <p class="text-secondary mt-2">
                      Sempre al fianco delle imprese, senza sorprese.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.CONSULENZA_LEGALE_CONTINUATIVA)">Maggiori
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
                      Assistenza e difesa in giudizio del cliente, sull'intero territorio nazionale ed anche dinanzi alle Magistrature Superiori, in tutti i settori privatistici di attività dello studio.
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

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100 d-flex flex-column justify-content-between">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <span class="material-symbols-outlined">handshake</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Soluzioni Alternative alle Controversie</h3>
                    <p class="text-secondary mt-2">
                      Assistenza e consulenza nella risoluzione alternativa delle controversie.
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
                    <span class="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Penale</h3>
                    <p class="text-secondary mt-2">
                      Difesa in giudizi penali in tutti i gradi di giudizio.
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
                    <span class="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto del Lavoro</h3>
                    <p class="text-secondary mt-2">
                      Assistenza e consulenza in ambito giuslavoristico.
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
                    <span class="material-symbols-outlined">tactic</span>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Progettazione Bandi Nazionali ed Europei</h3>
                    <p class="text-secondary mt-2">
                      Assistenza e consulenza nella presentazione di domande di partecipazione a bandi nazionali ed europei.
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <button class="btn btn-primary w-100" (click)="openModal(LawEnum.PROGETTAZIONE_BANDI_NAZIONALI_EUROPEI)">Maggiori
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
    this.divModalBody.nativeElement.innerHTML = `<p style="text-align: justify;">${service?.descrizione}</p>`;
    modalOfService.toggle();
  }

  servicesDetail = {
    "aree_legali": [
      {
        "nome": LawEnum.SOCIETARIO,
        "titolo": "Diritto Societario",
        "descrizione": "Offriamo consulenza ed assistenza legale strategica durante l'intero ciclo di vita dell'impresa sociale. Assistiamo i clienti nella costituzione di società, nella redazione di statuti e patti parasociali, nelle operazioni straordinarie (fusioni, acquisizioni, scissioni e trasformazioni), nella conclusione di contratti di cessione ed affitto di azienda. Il nostro supporto si estende alla compliance aziendale, alla governance e alla gestione delle crisi societarie, ponendo al centro gli interessi dei nostri assistiti (soci, investitori e amministratori)."
      },
      {
        "nome": LawEnum.LAVORO,
        "titolo": "Diritto del Lavoro",
        "descrizione": "Forniamo assistenza sia a datori di lavoro che a dipendenti. I nostri servizi includono la redazione e l\'analisi di contratti di lavoro subordinato e simili, la gestione delle procedure disciplinari, dei licenziamenti individuali e collettivi. Ci occupiamo anche di contenziosi e vertenze in materia di differenze retributive, mobbing, infortuni sul lavoro e tutele previdenziali."
      },
      {
        "nome": LawEnum.COMMERCIALE,
        "titolo": "Diritto Commerciale",
        "descrizione": "Affianchiamo i nostri clienti nello sviluppo del loro business a livello nazionale ed internazionale. Assistiamo le aziende nella negoziazione e stesura di contratti commerciali complessi (agenzia, distribuzione, vendita, franchising, appalto, fornitura ecc) e gestiamo con prontezza le pratiche di recupero crediti, in via stragiudiziale e giudiziale, e le fasi di crisi del rapporto negoziale. Offriamo i nostri servizi affinché i clienti possano individuare il più utile strumento contrattuale per la conclusione, alle migliori condizioni, dell’affare."
      },
      {
        "nome": LawEnum.CIVILE,
        "titolo": "Diritto Civile",
        "descrizione": "Assistiamo i nostri clienti in tutti i settori del diritto civile: separazioni, divorzi, affidamento di figli minori nati fuori il matrimonio, diritti della persona, regolamentazione delle questioni patrimoniali tra i coniugi, tutela del patrimonio familiare, successioni, divisioni ereditarie, assistenza nella redazione di testamenti, responsabilità contrattuale ed extracontrattuale e risarcimento danni."
      },
      {
        "nome": LawEnum.IMMOBILIARE,
        "titolo": "Diritto Immobiliare",
        "descrizione": "Assistiamo privati e imprese in tutte le operazioni immobiliari. La nostra consulenza copre la negoziazione e stesura di contratti di compravendita, preliminari, locazione (abitativa e commerciale) e tutti i negozi aventi ad oggetto diritti reali. Offriamo consulenza nell'acquisto di immobili all'asta e nelle altre procedure competitive. Siamo al fianco del cliente in tutta la gestione legale del patrimonio immobiliare e nelle fasi che precedono l’acquisto o la vendita di immobili, relazionandoci con gli operatori economici (imprese di costruzioni, mediatori, tecnici) in rappresentanza dei nostri clienti."
      },
      {
        "nome": LawEnum.CONTENZIOSO,
        "titolo": "Contenzioso Civile",
        "descrizione": "Rappresentiamo i nostri clienti in ogni fase del contenzioso a tutte le giurisdizioni nazionali. Agiamo curando l'istruttoria, l'analisi delle prove e la stesura degli atti difensivi. Il nostro obiettivo è massimizzare le possibilità di successo, assistendo il cliente in ogni lite che richieda la tutela giurisdizionale."
      },
      {
        "nome": LawEnum.TRIBUTARIO,
        "titolo": "Diritto Tributario",
        "descrizione": "Offriamo consulenza e assistenza legale per la prevenzione e la risoluzione del contenzioso fiscale.\n" +
          "Siamo al fianco dei clienti (imprese, professionisti e privati) sia in caso di verifiche fiscali, avvisi di accertamento e cartelle esattoriali, che nei giudizi davanti alle Corti di Giustizia Tributaria di primo e secondo grado, lavorando per annullare o ridurre le pretese erariali e per vegliare sulla corretta interpretazione e applicazione delle norme tributarie a tutela degli interessi dei nostri assistiti."
      },
      {
        "nome": LawEnum.PENALE,
        "titolo": "Diritto Penale",
        "descrizione": "Assistiamo il cliente in ogni tipo di procedimento penale, sia come difensori dell'imputato che come legali della parte offesa (costituzione di parte civile). La nostra competenza spazia dai reati contro la persona ed il patrimonio, ai reati societari e fallimentari. Abbiamo maturato nel corso del tempo una consolidata esperienza nell’ambito dei reati tributari. Offriamo un'assistenza costante e discreta dalla fase delle indagini preliminari fino al dibattimento."
      },
      {
        "nome": LawEnum.MEDIAZIONE,
        "titolo": "Soluzioni Alternative alle Controversie",
        "descrizione": "Promuoviamo attivamente la risoluzione alternativa delle liti, assistendo i clienti nelle procedure di mediazione, negoziazione assistita ed arbitrato. Crediamo negli strumenti di ADR per raggiungere rapidamente la soddisfazione degli interessi dei nostri clienti, giungendo ad una soluzione negoziale vincolante, per evitare i lunghi e costosi tempi di un processo."
      },
      {
        "nome": LawEnum.PROGETTAZIONE_BANDI_NAZIONALI_EUROPEI,
        "titolo": "Progettazione Bandi Nazionali ed Europei",
        "descrizione": "Offriamo una consulenza, integrata con quella prestata da altri professionisti, per l'analisi, interpretazione di bandi nazionali ed europei finalizzata alla presentazione di domande di partecipazione agli stessi."
      },
      {
        "nome": LawEnum.CONSULENZA_LEGALE_CONTINUATIVA,
        "titolo": "Consulenza Legale Continuativa",
        "descrizione": "Offriamo un'assistenza legale alle imprese mirata e personalizzata attraverso accordi consulenziali di durata annuale, allo scopo di affiancare giorno dopo giorno gli imprenditori nelle scelte e nelle sfide decisive per il loro business, predeterminando il compenso per una maggiore tranquillità del cliente."
      }
    ]
  }



}
