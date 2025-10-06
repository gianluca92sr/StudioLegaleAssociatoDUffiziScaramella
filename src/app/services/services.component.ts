import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-blue-900 mb-4">I Nostri Servizi</h1>
          <p class="text-blue-800 max-w-2xl mx-auto">
            Offriamo consulenza legale specializzata in diversi ambiti del diritto,
            garantendo soluzioni efficaci e personalizzate per ogni situazione.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="border border-blue-200 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-white">
            <div class="p-6">
              <div class="flex items-start">
                <div class="mr-4 p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="m9 5 7 7-7 7"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-blue-900">Diritto Civile</h3>
                  <p class="text-blue-800 mt-2">Assistenza completa in materia di diritto civile, contratti, responsabilità civile e risarcimento danni.</p>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md">
                  Richiedi Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-white">
            <div class="p-6">
              <div class="flex items-start">
                <div class="mr-4 p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-blue-900">Diritto del Lavoro</h3>
                  <p class="text-blue-800 mt-2">Consulenza e assistenza in materia di contratti di lavoro, licenziamenti, mobbing e diritto sindacale.</p>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md">
                  Richiedi Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-white">
            <div class="p-6">
              <div class="flex items-start">
                <div class="mr-4 p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-blue-900">Diritto Tributario</h3>
                  <p class="text-blue-800 mt-2">Supporto in materia fiscale, contenzioso tributario, accertamenti e rimborsi fiscali.</p>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md">
                  Richiedi Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-white">
            <div class="p-6">
              <div class="flex items-start">
                <div class="mr-4 p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-blue-900">Diritto Societario</h3>
                  <p class="text-blue-800 mt-2">Assistenza nella costituzione, gestione e trasformazione di società commerciali e enti non profit.</p>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md">
                  Richiedi Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-white">
            <div class="p-6">
              <div class="flex items-start">
                <div class="mr-4 p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-blue-900">Mediazione Civile</h3>
                  <p class="text-blue-800 mt-2">Soluzione alternativa delle controversie attraverso la mediazione obbligatoria e facoltativa.</p>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md">
                  Richiedi Informazioni
                </button>
              </div>
            </div>
          </div>

          <div class="border border-blue-200 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-white">
            <div class="p-6">
              <div class="flex items-start">
                <div class="mr-4 p-3 bg-blue-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-blue-900">Diritto Amministrativo</h3>
                  <p class="text-blue-800 mt-2">Assistenza in materia di appalti pubblici, contenzioso amministrativo e diritto degli enti pubblici.</p>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md">
                  Richiedi Informazioni
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
export class ServicesComponent {}
