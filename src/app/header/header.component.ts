import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  template: `
    <header class="sticky top-0 z-50 border-b border-blue-200 bg-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="bg-blue-700 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <path d="m9 5 7 7-7 7"/>
              </svg>
            </div>
            <h1 class="text-xl font-bold text-blue-900">Studio Legale Associato<br />D'Uffizi & Scaramella</h1>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-2">
            <a routerLink="/" routerLinkActive="bg-blue-700 text-white"
               class="flex items-center space-x-1 px-4 py-2 rounded-md"
               [class]="isActive('/') ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Home</span>
            </a>
            <a routerLink="/avvocati" routerLinkActive="bg-blue-700 text-white"
               class="flex items-center space-x-1 px-4 py-2 rounded-md"
               [class]="isActive('/avvocati') ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>Avvocati</span>
            </a>
            <a routerLink="/servizi" routerLinkActive="bg-blue-700 text-white"
               class="flex items-center space-x-1 px-4 py-2 rounded-md"
               [class]="isActive('/servizi') ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <span>Servizi</span>
            </a>
            <a routerLink="/blog" routerLinkActive="bg-blue-700 text-white"
               class="flex items-center space-x-1 px-4 py-2 rounded-md"
               [class]="isActive('/blog') ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>
              <span>News</span>
            </a>
            <a routerLink="/contatti" routerLinkActive="bg-blue-700 text-white"
               class="flex items-center space-x-1 px-4 py-2 rounded-md"
               [class]="isActive('/contatti') ? 'bg-blue-700 text-white' : 'text-blue-900 hover:bg-blue-100'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Contatti</span>
            </a>
          </nav>

          <!-- Mobile menu button -->
          <button
            class="md:hidden border border-blue-700 text-blue-700 p-2 rounded-md"
            (click)="toggleMenu()">
            <svg *ngIf="!isMenuOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            <svg *ngIf="isMenuOpen()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav *ngIf="isMenuOpen()" class="mt-4 flex flex-col space-y-2 md:hidden">
          <a routerLink="/" routerLinkActive="bg-blue-700 text-white"
             class="flex items-center space-x-1 px-4 py-2 rounded-md"
             [class]="isActive('/') ? 'bg-blue-700 text-white' : 'text-blue-900'"
             (click)="closeMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span class="ml-2">Home</span>
          </a>
          <a routerLink="/avvocati" routerLinkActive="bg-blue-700 text-white"
             class="flex items-center space-x-1 px-4 py-2 rounded-md"
             [class]="isActive('/avvocati') ? 'bg-blue-700 text-white' : 'text-blue-900'"
             (click)="closeMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span class="ml-2">Avvocati</span>
          </a>
          <a routerLink="/servizi" routerLinkActive="bg-blue-700 text-white"
             class="flex items-center space-x-1 px-4 py-2 rounded-md"
             [class]="isActive('/servizi') ? 'bg-blue-700 text-white' : 'text-blue-900'"
             (click)="closeMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <span class="ml-2">Servizi</span>
          </a>
          <a routerLink="/blog" routerLinkActive="bg-blue-700 text-white"
             class="flex items-center space-x-1 px-4 py-2 rounded-md"
             [class]="isActive('/blog') ? 'bg-blue-700 text-white' : 'text-blue-900'"
             (click)="closeMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
            <span class="ml-2">News</span>
          </a>
          <a routerLink="/contatti" routerLinkActive="bg-blue-700 text-white"
             class="flex items-center space-x-1 px-4 py-2 rounded-md"
             [class]="isActive('/contatti') ? 'bg-blue-700 text-white' : 'text-blue-900'"
             (click)="closeMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span class="ml-2">Contatti</span>
          </a>
        </nav>
      </div>
    </header>
  `,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf]
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
    // Implementazione semplificata per il controllo della route attiva
    return false;
  }
}
