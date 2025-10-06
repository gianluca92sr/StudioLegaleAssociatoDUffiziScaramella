import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-blue-200 bg-blue-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="bg-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                  <path d="m9 5 7 7-7 7"/>
                </svg>
              </div>
              <h2 class="text-xl font-bold">Studio Legale Associato<br />D'Uffizi & Scaramella</h2>
            </div>
            <p class="text-blue-100 mb-4">
              Lo Studio Legale Associato D'Uffizi & Scaramella offre consulenza legale specializzata
              in vari ambiti del diritto, con un approccio personalizzato e attento alle esigenze dei clienti.
            </p>
            <div class="flex space-x-4">
              <button class="border border-white text-white p-2 rounded-md hover:bg-white hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </button>
              <button class="border border-white text-white p-2 rounded-md hover:bg-white hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Contatti</h3>
            <ul class="space-y-2 text-blue-100">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Via Roma, 123 - 00100 Roma (RM)</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+39 06 1234567</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>info&#64;studiolegaleduffiziscaramella.it</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Orari</h3>
            <ul class="space-y-2 text-blue-100">
              <li>Lunedì - Venerdì: 9:00 - 18:00</li>
              <li>Sabato: 9:00 - 13:00</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>© {{ currentYear }} Studio Legale Associato D'Uffizi & Scaramella. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  `,
  standalone: true
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
