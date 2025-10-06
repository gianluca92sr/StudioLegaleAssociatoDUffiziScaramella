import { Component } from '@angular/core';

@Component({
  selector: 'app-lawyers',
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-foreground mb-4">I Nostri Avvocati</h1>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            Professionisti altamente qualificati con anni di esperienza in vari ambiti del diritto,
            pronti a fornire consulenza legale specializzata.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="border border-border shadow-md hover:shadow-lg transition-shadow rounded-lg bg-card">
            <div class="p-6">
              <div class="flex flex-col items-center text-center mb-6">
                <div class="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mb-4"></div>
                <h3 class="text-xl font-bold text-foreground">Avv. Alessandro D’Uffizi</h3>
                <p class="text-primary font-medium">Socio Fondatore</p>
              </div>

              <div class="mb-6">
                <h4 class="font-semibold text-foreground mb-2">Aree di competenza:</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Diritto Penale</span>
                  <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Diritto Tributario</span>
                </div>
              </div>

              <p class="text-muted-foreground mb-6">
                Con oltre 20 anni di esperienza nel settore legale, Alessandro si specializza in diritto penale
                e tributario, rappresentando clienti nazionali e internazionali in complessi procedimenti giudiziari.
              </p>

              <button class="w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md transition-colors">
                Contatta D'Uffizi
              </button>
            </div>
          </div>

          <div class="border border-border shadow-md hover:shadow-lg transition-shadow rounded-lg bg-card">
            <div class="p-6">
              <div class="flex flex-col items-center text-center mb-6">
                <div class="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mb-4"></div>
                <h3 class="text-xl font-bold text-foreground">Avv. Fabrizio Scaramella</h3>
                <p class="text-primary font-medium">Socio Fondatore</p>
              </div>

              <div class="mb-6">
                <h4 class="font-semibold text-foreground mb-2">Aree di competenza:</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Diritto Civile</span>
                  <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Diritto Commerciale</span>
                  <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Diritto Tributario</span>
                </div>
              </div>

              <p class="text-muted-foreground mb-6">
                Fabrizio è esperto in diritto del civile, commerciale e tributario, fornendo consulenza a grandi aziende,
                enti pubblici e privati su questioni contrattuali e normative.
              </p>

              <button class="w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md transition-colors">
                Contatta Scaramella
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  standalone: true
})
export class LawyersComponent {}
