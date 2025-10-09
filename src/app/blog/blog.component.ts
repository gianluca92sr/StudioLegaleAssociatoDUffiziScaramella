import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <section class="py-20 bg-blue-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-blue-900 mb-4">News e Articoli</h1>
          <p class="text-blue-800 max-w-2xl mx-auto">
            Aggiornamenti sulle novità legislative, approfondimenti giurisprudenziali
            e analisi di casi rilevanti nel panorama legale italiano.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="border border-blue-200 shadow-md rounded-lg bg-white">
            <div class="bg-blue-200 border-2 border-dashed border-blue-300 rounded-t-xl w-full h-48"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 mb-2">15 Marzo 2024</div>
              <h3 class="text-xl font-bold text-blue-900 mb-3">Novità sul fronte fiscale: cosa cambia nel 2024</h3>
              <p class="text-blue-800 mb-4">Analizziamo le principali novità fiscali introdotte con il nuovo anno e come potranno influenzare le aziende e i cittadini.</p>
              <button class="p-0 h-auto font-semibold text-blue-700 hover:underline">
                Leggi tutto →
              </button>
            </div>
          </div>

          <div class="border border-blue-200 shadow-md rounded-lg bg-white">
            <div class="bg-blue-200 border-2 border-dashed border-blue-300 rounded-t-xl w-full h-48"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 mb-2">28 Febbraio 2024</div>
              <h3 class="text-xl font-bold text-blue-900 mb-3">La mediazione obbligatoria: quando è necessaria</h3>
              <p class="text-blue-800 mb-4">Approfondiamo i casi in cui la legge richiede il tentativo di mediazione prima di poter agire in giudizio.</p>
              <button class="p-0 h-auto font-semibold text-blue-700 hover:underline">
                Leggi tutto →
              </button>
            </div>
          </div>

          <div class="border border-blue-200 shadow-md rounded-lg bg-white">
            <div class="bg-blue-200 border-2 border-dashed border-blue-300 rounded-t-xl w-full h-48"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 mb-2">10 Gennaio 2024</div>
              <h3 class="text-xl font-bold text-blue-900 mb-3">Contratti di lavoro: le novità legislative recenti</h3>
              <p class="text-blue-800 mb-4">Esaminiamo le ultime modifiche normative che riguardano i contratti di lavoro e i diritti dei lavoratori.</p>
              <button class="p-0 h-auto font-semibold text-blue-700 hover:underline">
                Leggi tutto →
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button class="bg-blue-800 text-white hover:bg-blue-800 px-6 py-3 rounded-md">
            Vedi tutte le news
          </button>
        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class BlogComponent {}
