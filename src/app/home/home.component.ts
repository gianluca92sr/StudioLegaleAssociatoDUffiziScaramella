import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <!-- Hero Section -->
      <section class="position-relative bg-primary bg-gradient text-white py-5">
        <div class="container-fluid px-4">
          <div class="row">
            <div class="col-12 col-md-10">
              <h1 class="display-4 fw-bold mb-4">
                Ogni giorno al fianco dei clienti per affrontare le sfide di oggi e di domani
              </h1>
              <p class="lead text-white mb-4">
                Competenza, impegno, indipendenza, innovazione, etica e riservatezza.
              </p>
              <button class="btn btn-light text-primary fw-bold px-4 py-2 rounded" routerLink="/contatti">
                Contattaci
              </button>
            </div>
            <div class="d-none d-md-block col-md-2">
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-5 bg-light">
        <div class="container-fluid px-4">
          <div class="text-center mb-5">
            <h2 class="h2 fw-bold text-primary mb-3">I Nostri Servizi</h2>
            <p class="text-secondary mx-auto" style="max-width: 640px;">
              Offriamo consulenza legale integrata in diversi ambiti del diritto per la migliore tutela degli interessi di imprese e privati.
            </p>
          </div>

          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-primary shadow-sm h-100">
                <div class="card-body">
                  <div class="mb-3 p-3 bg-primary-light rounded-circle d-inline-block">
                    <i class="bi bi-file-text-fill text-primary fs-2"></i>
                  </div>
                  <h3 class="h5 fw-bold text-primary mb-2">Diritto Civile</h3>
                  <p class="text-secondary">Assistenza e consulenza in tutte le branche del diritto civile: famiglia, successioni, responsabilità civile e risarcimento danni.</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-primary shadow-sm h-100">
                <div class="card-body">
                  <div class="mb-3 p-3 bg-primary-light rounded-circle d-inline-block">
                    <i class="bi bi-people-fill text-primary fs-2"></i>
                  </div>
                  <h3 class="h5 fw-bold text-primary mb-2">Diritto del Lavoro</h3>
                  <p class="text-secondary">Assistenza e consulenza in ambito giuslavoristico.</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-primary shadow-sm h-100">
                <div class="card-body">
                  <div class="mb-3 p-3 bg-primary-light rounded-circle d-inline-block">
                    <i class="bi bi-cash-stack text-primary fs-2"></i>
                  </div>
                  <h3 class="h5 fw-bold text-primary mb-2">Diritto Tributario</h3>
                  <p class="text-secondary">Supporto e consulenza in materia fiscale, contenzioso tributario, accertamenti, agevolazioni e rimborsi.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-4">
            <button class="btn btn-primary text-white px-4 py-2 rounded" routerLink="/servizi">
              Scopri tutti i servizi
            </button>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="py-5">
        <div class="container-fluid px-4">
          <div class="d-flex flex-column flex-lg-row gap-4 me-4">
            <div class="col-12 col-lg-6 col-xxl-8 pe-0 pe-md-3 ">
              <h2 class="h2 fw-bold text-primary mb-3">Chi Siamo</h2>
              <p class="text-secondary mb-3" style="text-align: justify">
                Lo Studio Legale Associato D’Uffizi & Scaramella è stato fondato nell’aprile del 2015 dall’Avv. Alessandro D’Uffizi e dall’Avv. Fabrizio Scaramella, entrambi del Foro di Roma.
                Lo studio rappresenta la fusione delle competenze e professionalità maturate nel corso degli anni dai professionisti che lo compongono.
                Esso è, volutamente, organizzato attraverso una struttura snella e dinamica per meglio
                accompagnare i clienti in tutte le fasi, fisiologiche e patologiche, dei
                rapporti giuridici di volta in volta esistenti, con particolare riferimento al fenomeno aziendale,
                senza, però, tralasciare le tematiche proprie delle persone fisiche, a cui è dedicato uno specifico settore dello studio.
                L’opera dello studio è supportata dal contributo professionale, altamente specializzato, di consulenti esterni nel settore tributario, commerciale, contabile, bancario, tecnico ed urbanistico.
              </p>
              <div class="d-flex flex-wrap gap-2">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2 fs-5"></i>
                  <span class="text-secondary">Consulenza personalizzata</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2 fs-5"></i>
                  <span class="text-secondary">Formazione continua</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2 fs-5"></i>
                  <span class="text-secondary">Massiva riservatezza</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xxl-4 mt-3 mt-md-0 bg-primary-light border border-dashed border-secondary rounded">
              <img style="width: 100%;" src="studioExample.jpg" alt="studioExample">
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class HomeComponent {}
