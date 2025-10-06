import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-blue-900 mb-4">Contattaci</h1>
          <p class="text-blue-800 max-w-2xl mx-auto">
            Per qualsiasi informazione o richiesta di consulenza, non esitare a contattarci.
            Il nostro team sarà felice di assisterti.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-blue-900 mb-6">Invia un messaggio</h2>
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
              <div>
                <label for="name" class="block text-blue-900 mb-2">Nome e Cognome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  class="w-full px-4 py-2 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label for="email" class="block text-blue-900 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  class="w-full px-4 py-2 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label for="message" class="block text-blue-900 mb-2">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  rows="5"
                  required
                  class="w-full px-4 py-2 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <!-- TODO  recaptcha-->
              <button
                type="submit"
                [disabled]="!contactForm.form.valid"
                class="w-full bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md disabled:opacity-50">
                Invia Messaggio
              </button>
            </form>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-blue-900 mb-6">Informazioni di Contatto</h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-blue-900">Indirizzo</h3>
                  <p class="text-blue-800">Via Roma, 123<br />00100 Roma (RM)</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-blue-900">Telefono</h3>
                  <p class="text-blue-800">+39 06 1234567</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-blue-900">Email</h3>
                  <p class="text-blue-800">info&#64;studiolegaleduffiziscaramella.it</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-blue-900">Orari di Apertura</h3>
                  <p class="text-blue-800">
                    Lunedì - Venerdì: 9:00 - 18:00<br />
                    Sabato: 9:00 - 13:00<br />
                    Domenica: Chiuso
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-12">
              <h3 class="text-xl font-bold text-blue-900 mb-4">Dove Siamo</h3>
              <div class="bg-blue-200 border-2 border-dashed border-blue-300 rounded-xl w-full h-64"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true,
  imports: [FormsModule]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert('Grazie per averci contattato! Ti risponderemo al più presto.');
    this.formData = { name: '', email: '', message: '' };
  }
}
