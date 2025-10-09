import {Component} from '@angular/core';
import {LawEnum} from '../core/enum/law-enum';

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
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <i class="bi bi-file-earmark-text-fill text-primary fs-2"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Civile</h3>
                    <p class="text-secondary mt-2">
                      Assistenza completa in materia di diritto civile, contratti,
                      responsabilità civile e risarcimento danni.
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <button class="btn btn-primary w-100">Maggiori Informazioni</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <i class="bi bi-people-fill text-primary fs-2"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto del Lavoro</h3>
                    <p class="text-secondary mt-2">
                      Consulenza e assistenza in materia di contratti di lavoro, licenziamenti,
                      mobbing e diritto sindacale.
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <button class="btn btn-primary w-100">Maggiori Informazioni</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <i class="bi bi-cash-stack text-primary fs-2"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Tributario</h3>
                    <p class="text-secondary mt-2">
                      Supporto in materia fiscale, contenzioso tributario, accertamenti e rimborsi fiscali.
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <button class="btn btn-primary w-100">Maggiori Informazioni</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <i class="bi bi-building text-primary fs-2"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Societario</h3>
                    <p class="text-secondary mt-2">
                      Assistenza nella costituzione, gestione e trasformazione di società commerciali e enti non profit.
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <button class="btn btn-primary w-100">Maggiori Informazioni</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <i class="bi bi-shield-check text-primary fs-2"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Mediazione Civile</h3>
                    <p class="text-secondary mt-2">
                      Soluzione alternativa delle controversie attraverso la mediazione obbligatoria e facoltativa.
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <button class="btn btn-primary w-100">Maggiori Informazioni</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="border border-primary-subtle shadow-sm hover-shadow-lg transition rounded bg-white h-100">
              <div class="p-4">
                <div class="d-flex align-items-start">
                  <div class="me-3 p-3 bg-primary-subtle rounded-circle">
                    <i class="bi bi-journal-text text-primary fs-2"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold text-primary">Diritto Amministrativo</h3>
                    <p class="text-secondary mt-2">
                      Assistenza in materia di appalti pubblici, contenzioso amministrativo e diritto degli enti pubblici.
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Maggiori Informazioni</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            fsfds
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true
})
export class ServicesComponent {
  openModal(lawType: LawEnum) {
    // new bootstrap.Modal()
  }


}
