import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Consulenza Legale Specializzata e Personalizzata
            </h1>
            <p class="text-xl text-blue-100 mb-8">
              Lo Studio Legale Associato D'Uffizi & Scaramella offre servizi legali di alta qualità
              con un approccio mirato alle esigenze specifiche di ogni cliente.
            </p>
            <button class="bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-md" routerLink="/contatti">
              Contattaci
            </button>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-20 bg-blue-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-blue-900 mb-4">I Nostri Servizi</h2>
            <p class="text-blue-800 max-w-2xl mx-auto">
              Offriamo consulenza legale specializzata in diversi ambiti del diritto,
              garantendo soluzioni efficaci e personalizzate per ogni situazione.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="border border-blue-200 shadow-lg hover:shadow-xl transition-shadow rounded-lg bg-white">
              <div class="p-6">
                <div class="mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="m9 5 7 7-7 7"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-blue-900 mb-2">Diritto Civile</h3>
                <p class="text-blue-800">Assistenza completa in materia di diritto civile, contratti, responsabilità civile e risarcimento danni.</p>
              </div>
            </div>

            <div class="border border-blue-200 shadow-lg hover:shadow-xl transition-shadow rounded-lg bg-white">
              <div class="p-6">
                <div class="mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-blue-900 mb-2">Diritto del Lavoro</h3>
                <p class="text-blue-800">Consulenza e assistenza in materia di contratti di lavoro, licenziamenti, mobbing e diritto sindacale.</p>
              </div>
            </div>

            <div class="border border-blue-200 shadow-lg hover:shadow-xl transition-shadow rounded-lg bg-white">
              <div class="p-6">
                <div class="mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-blue-900 mb-2">Diritto Tributario</h3>
                <p class="text-blue-800">Supporto in materia fiscale, contenzioso tributario, accertamenti e rimborsi fiscali.</p>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <button class="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md" routerLink="/servizi">
              Scopri tutti i servizi
            </button>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold text-blue-900 mb-6">Chi Siamo</h2>
              <p class="text-blue-800 mb-6">
                Lo Studio Legale Associato D'Uffizi & Scaramella nasce dall'esperienza pluriennale
                di due professionisti del diritto che condividono una visione comune: fornire
                consulenza legale di alta qualità con un approccio personalizzato.
              </p>
              <p class="text-blue-800 mb-6">
                La nostra missione è quella di offrire soluzioni legali efficaci e innovative,
                mantenendo sempre il massimo rispetto per l'etica professionale e l'interesse del cliente.
              </p>
              <div class="flex flex-wrap gap-4">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700 mr-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span class="text-blue-800">Consulenza personalizzata</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700 mr-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span class="text-blue-800">Approccio mirato</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700 mr-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span class="text-blue-800">Massima professionalità</span>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 grid grid-cols-2 gap-4">
              <div class="bg-blue-200 border-2 border-dashed border-blue-300 rounded-xl w-full h-64"></div>
              <div class="bg-blue-200 border-2 border-dashed border-blue-300 rounded-xl w-full h-64 mt-8"></div>
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
