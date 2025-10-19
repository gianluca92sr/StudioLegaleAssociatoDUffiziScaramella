import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="d-flex min-vh-100 align-items-center justify-content-center bg-light px-4">
      <div class="text-center" style="max-width: 700px;">
        <h1 class="display-1 fw-bold text-dark">404</h1>

        <h2 class="h3 fw-semibold text-dark mb-3">
          Pagina Non Trovata
        </h2>

        <p class="text-secondary fs-5 mb-5">
          Ci dispiace, la pagina che stai cercando non esiste o è stata spostata.
          Torna alla homepage per continuare la navigazione.
        </p>

        <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <button
            type="button"
            (click)="goHome()"
            class="btn btn-primary px-4 py-2 fw-medium"
          >
            Torna alla Home
          </button>

          <button
            type="button"
            (click)="goBack()"
            class="btn btn-outline-primary px-4 py-2 fw-medium"
          >
            Torna Indietro
          </button>
        </div>

        <div class="mt-5 pt-4 border-top">
          <p class="text-secondary mb-0">
            Hai bisogno di aiuto?
            <a routerLink="/contatti" class="text-primary fw-semibold text-decoration-underline-hover">
              Contattaci
            </a>
          </p>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']).then(r => console.log(
      "Navigating to Home!"
    ));
  }

  goBack() {
    window.history.back();
  }
}
