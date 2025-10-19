import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  template: `
    <header class="position-sticky top-0 z-3 border-bottom border-primary-subtle bg-white shadow-sm">
      <div class="container-fluid py-1">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center gap-2">
            <img width="100px" src="logoBlue.png" alt="logoBlue">
            <h1 class="fs-5 fw-bold text-primary mb-0 lh-sm d-none d-lg-block">
              Studio Legale Associato<br />D'Uffizi & Scaramella
            </h1>
          </div>

          <!-- Desktop Navigation -->
          <nav class="d-none d-md-flex">
            <a routerLink="/home"
               routerLinkActive="bg-primary text-white"
               class="d-flex align-items-center gap-1 px-3 py-2 rounded text-decoration-none"
               [ngClass]="isActive('/home') ? 'bg-primary text-white' : 'text-primary bg-light-hover'"
            >
              <i class="bi bi-house-door"></i>
              <span>Home</span>
            </a>
            <a routerLink="/avvocati"
               routerLinkActive="bg-primary text-white"
               class="d-flex align-items-center gap-1 px-3 py-2 rounded text-decoration-none"
               [ngClass]="isActive('/avvocati') ? 'bg-primary text-white' : 'text-primary bg-light-hover'"
            >
              <i class="bi bi-people-fill"></i>
              <span>Avvocati</span>
            </a>
            <a routerLink="/servizi"
               routerLinkActive="bg-primary text-white"
               class="d-flex align-items-center gap-1 px-3 py-2 rounded text-decoration-none"
               [ngClass]="isActive('/servizi') ? 'bg-primary text-white' : 'text-primary bg-light-hover'"
            >
              <i class="bi bi-briefcase-fill"></i>
              <span>Servizi</span>
            </a>
            <a routerLink="/contatti"
               routerLinkActive="bg-primary text-white"
               class="d-flex align-items-center gap-1 px-3 py-2 rounded text-decoration-none"
               [ngClass]="isActive('/contatti') ? 'bg-primary text-white' : 'text-primary bg-light-hover'"
            >
              <i class="bi bi-envelope-fill"></i>
              <span>Contatti</span>
            </a>
          </nav>

          <!-- Mobile menu button -->
          <button class="d-md-none border border-primary text-primary p-2 rounded" (click)="toggleMenu()">
            <svg *ngIf="!isMenuOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg *ngIf="isMenuOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav *ngIf="isMenuOpen()" class="mt-3 d-flex flex-column gap-2 d-md-none">
          <a routerLink="/home"
             routerLinkActive="bg-primary text-white"
             class="d-flex align-items-center gap-1 px-3 py-2 rounded text-decoration-none"
             [ngClass]="isActive('/home') ? 'bg-primary text-white' : 'text-primary'"
             (click)="closeMenu()">
            <i class="bi bi-house-door"></i>
            <span>Home</span>
          </a>

          <a routerLink="/avvocati"
             routerLinkActive="bg-primary text-white"
             class="d-flex align-items-center gap-1 px-3 py-2 rounded text-decoration-none"
             [ngClass]="isActive('/avvocati') ? 'bg-primary text-white' : 'text-primary'"
             (click)="closeMenu()">
            <i class="bi bi-people-fill"></i>
            <span>Avvocati</span>
          </a>

          <a routerLink="/servizi"
             routerLinkActive="bg-primary text-white"
             class="d-flex align-items-center gap-1 px-3 py-2 rounded text-decoration-none"
             [ngClass]="isActive('/servizi') ? 'bg-primary text-white' : 'text-primary'"
             (click)="closeMenu()">
            <i class="bi bi-briefcase-fill"></i>
            <span>Servizi</span>
          </a>

          <a routerLink="/contatti"
             routerLinkActive="bg-primary text-white"
             class="d-flex align-items-center gap-1 px-3 py-2 rounded text-decoration-none"
             [ngClass]="isActive('/contatti') ? 'bg-primary text-white' : 'text-primary'"
             (click)="closeMenu()">
            <i class="bi bi-envelope-fill"></i>
            <span>Contatti</span>
          </a>
        </nav>
      </div>
    </header>
  `,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass]
})
export class HeaderComponent {
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(value => !value);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  isMenuOpen() {
    return this.menuOpen();
  }

  isActive(path: string): boolean {
    // Implementa la logica di route attiva, se necessario
    return false;
  }
}
