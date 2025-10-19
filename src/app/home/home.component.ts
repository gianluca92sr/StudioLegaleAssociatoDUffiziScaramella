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
                Consulenza Legale Specializzata e Personalizzata
              </h1>
              <p class="lead text-white mb-4">
                Lo Studio Legale Associato D'Uffizi & Scaramella offre servizi legali di alta qualità
                con un approccio mirato alle esigenze specifiche di ogni cliente.
              </p>
              <button class="btn btn-light text-primary fw-bold px-4 py-2 rounded" routerLink="/contatti">
                Contattaci
              </button>
            </div>
            <div class="d-none d-md-block col-md-2">
            </div>
          </div>
<!--          <div class="mx-auto" style="max-width: 768px;">-->
<!--            <h1 class="display-4 fw-bold mb-4">-->
<!--              Consulenza Legale Specializzata e Personalizzata-->
<!--            </h1>-->
<!--            <p class="lead text-white-50 mb-4">-->
<!--              Lo Studio Legale Associato D'Uffizi & Scaramella offre servizi legali di alta qualità-->
<!--              con un approccio mirato alle esigenze specifiche di ogni cliente.-->
<!--            </p>-->
<!--            <button class="btn btn-light text-primary fw-bold px-4 py-2 rounded" routerLink="/contatti">-->
<!--              Contattaci-->
<!--            </button>-->
<!--          </div>-->
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-5 bg-light">
        <div class="container-fluid px-4">
          <div class="text-center mb-5">
            <h2 class="h2 fw-bold text-primary mb-3">I Nostri Servizi</h2>
            <p class="text-secondary mx-auto" style="max-width: 640px;">
              Offriamo consulenza legale specializzata in diversi ambiti del diritto,
              garantendo soluzioni efficaci e personalizzate per ogni situazione.
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
                  <p class="text-secondary">Assistenza completa in materia di diritto civile, contratti, responsabilità civile e risarcimento danni.</p>
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
                  <p class="text-secondary">Consulenza e assistenza in materia di contratti di lavoro, licenziamenti, mobbing e diritto sindacale.</p>
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
                  <p class="text-secondary">Supporto in materia fiscale, contenzioso tributario, accertamenti e rimborsi fiscali.</p>
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
          <div class="d-flex flex-column flex-md-row align-items-center gap-2">
            <div class="col-12 col-md-6 col-lg-8 pe-0 pe-md-3 ">
              <h2 class="h2 fw-bold text-primary mb-3">Chi Siamo</h2>
              <p class="text-secondary mb-3" style="text-align: justify">
                Lo Studio Legale Associato D'Uffizi & Scaramella nasce dall'esperienza pluriennale
                di due professionisti del diritto che condividono una visione comune: fornire
                consulenza legale di alta qualità con un approccio personalizzato. La nostra missione è quella di
                offrire soluzioni legali efficaci e innovative,
                mantenendo sempre il massimo rispetto per l'etica professionale e l'interesse del cliente.
              </p>
              <div class="d-flex flex-wrap gap-2">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2 fs-5"></i>
                  <span class="text-secondary">Consulenza personalizzata</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2 fs-5"></i>
                  <span class="text-secondary">Approccio mirato</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2 fs-5"></i>
                  <span class="text-secondary">Massima professionalità</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mt-3 mt-md-0 bg-primary-light border border-dashed border-secondary rounded">
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
