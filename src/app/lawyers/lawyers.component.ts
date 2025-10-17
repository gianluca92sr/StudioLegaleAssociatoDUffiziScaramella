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
            <div class="p-4">
              <div class="d-flex align-items-start">
                <div class="me-3 p-3 bg-primary-subtle rounded-circle"></div>
                <div>
                  <h3 class="h5 fw-bold text-primary">Avv. Alessandro D’Uffizi</h3>
                  <p class="text-secondary">Socio Fondatore</p>
                </div>
              </div>

              <div>
                <h4 class="text-primary mb-2">Aree di competenza:</h4>
                <div class="d-flex text-primary">
                  <ul>
                    <li>
                      Diritto Penale
                    </li>
                    <li>
                      Diritto Tributario
                    </li>
                  </ul>
                </div>
              </div>

              <p class="text-secondary mb-4">
                Con oltre 20 anni di esperienza nel settore legale, Alessandro si specializza in diritto penale
                e tributario, rappresentando clienti nazionali e internazionali in complessi procedimenti giudiziari.
              </p>

              <button class="btn btn-primary">
                Contatta Avv. D'Uffizi
              </button>
            </div>
          </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle"></div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Avv. Fabrizio Scaramella</h3>
                    <p class="text-secondary">Socio Fondatore</p>
                  </div>
                </div>

                <div>
                  <h4 class="text-primary mb-2">Aree di competenza:</h4>
                  <div class="d-flex text-primary">
                    <ul>
                      <li>
                        Diritto Civile
                      </li>
                      <li>
                        Diritto Commerciale
                      </li>
                      <li>
                        Diritto Tributario
                      </li>
                    </ul>
                  </div>
                </div>

                <p class="text-secondary mb-4">
                  Fabrizio è esperto in diritto civile, commerciale e tributario, fornendo consulenza a grandi aziende,
                  enti pubblici e privati su questioni contrattuali e normative.
                </p>

                <button class="btn btn-primary">
                  Contatta Avv. Scaramella
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class LawyersComponent {}
