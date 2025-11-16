import { Component } from '@angular/core';

@Component({
  selector: 'app-lawyers',
  template: `
    <section class="py-5">
      <div class="container-fluid px-4">
        <div class="text-center mb-5">
          <h1 class="fw-bold text-primary mb-3">I Nostri Avvocati</h1>
          <p class="text-secondary mx-auto" style="max-width: 600px;">
            Professionisti altamente qualificati con anni di esperienza in vari ambiti del diritto,
            pronti a fornire consulenza legale specializzata.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-12 col-md-6">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4 h-100 d-flex flex-column justify-content-between">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle"></div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Avv. Alessandro D’Uffizi</h3>
                    <p class="text-secondary">Socio Fondatore</p>
                  </div>
                </div>
                <div class="d-flex text-primary">
                  <ul>
                    <li>
                      Patrocinatore dinanzi alle Magistrature Superiori
                    </li>
                    <li>
                      Master II Livello in Criminologia – Università La Sapienza di Roma
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-primary mb-2">Aree di competenza:</h4>
                  <div class="d-flex text-primary">
                    <ul>
                      <li>
                        Diritto Penale
                      </li>
                      <li>
                        Diritto Civile
                      </li>
                      <li>
                        Diritto del Lavoro
                      </li>
                      <li>
                        Diritto Commerciale
                      </li>
                    </ul>
                  </div>
                </div>

                <p class="text-secondary mb-4">
                  Con oltre 25 anni di esperienza nel settore legale, Alessandro ha rappresentato clienti, nazionali e internazionali, in complessi procedimenti giudiziari, assistito imprese e privati dinanzi a Tribunali, Corti di Appello e Suprema Corte di Cassazione.
                </p>

              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4 h-100 d-flex flex-column justify-content-between">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle"></div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Avv. Fabrizio Scaramella</h3>
                    <p class="text-secondary">Socio Fondatore</p>
                  </div>
                </div>
                <div class="d-flex text-primary">
                  <ul>
                    <li>
                      Master di II Livello in diritto Tributario  – Università Tor Vergata di Roma (2016)
                    </li>
                    <li>
                      Master IPSOA "Esperto bandi europei: fondo perduto e altri meccanismi finanziari del PNNE" (2023)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-primary mb-2">Aree di competenza:</h4>
                  <div class="d-flex text-primary">
                    <ul>
                      <li>
                        Diritto Civile, Commerciale e Societario
                      </li>
                      <li>
                        Diritto Immobiliare
                      </li>
                      <li>
                        Diritto Tributario
                      </li>
                      <li>
                        Diritto Penale Tributario
                      </li>
                    </ul>
                  </div>
                </div>

                <p class="text-secondary mb-4">
                  Fabrizio ha maturato una consolidata esperienza nelle branche del diritto collegate al mondo dell’impresa e del business. Ha assistito imprese, nazionali e non, su operazioni ordinarie e straordinarie, e con riferimento a problematiche contrattuali e normative.
                </p>

<!--                <button class="btn btn-primary" (click)="vaiAiContatti(2)">-->
<!--                  Contatta Avv. Scaramella-->
<!--                </button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [
  ],
  standalone: true
})
export class LawyersComponent {

}
