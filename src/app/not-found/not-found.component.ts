import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="min-h-screen flex items-center justify-center bg-background px-4">
      <div class="text-center max-w-2xl">
        <h1 class="text-6xl md:text-8xl font-bold text-foreground">404</h1>

        <h2 class="text-2xl md:text-3xl font-semibold text-foreground">
          Pagina Non Trovata
        </h2>

        <p class="text-muted-foreground text-lg mb-10">
          Ci dispiace, la pagina che stai cercando non esiste o è stata spostata.
          Torna alla homepage per continuare la navigazione.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button
            (click)="goHome()"
            class="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-200 transition-colors font-medium"
          >
            Torna alla Home
          </button>

          <button
            (click)="goBack()"
            class="px-6 py-3 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition-colors font-medium"
          >
            Torna Indietro
          </button>
        </div>

        <div class="mt-12 pt-8 border-t border-border">
          <p class="text-muted-foreground">
            Hai bisogno di aiuto?
            <a routerLink="/contatti" class="text-primary hover:underline font-medium">
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
