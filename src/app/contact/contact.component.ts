import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ModalComponent} from '../core/modal/modal.component';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha-2';
// import {RECAPTCHA_SITE_KEY_V2} from '../app.config';
declare var bootstrap: any;

@Component({
  selector: 'app-contact',
  template: `
    <section class="py-5">
      <div class="container-fluid px-4">
        <div class="text-center mb-5">
          <h1 class="fw-bold text-primary mb-3">Contattaci</h1>
          <p class="text-secondary mx-auto" style="max-width: 600px;">
            Per qualsiasi informazione o richiesta di consulenza, non esitare a contattarci.
            Il nostro team sarà felice di assisterti.
          </p>
        </div>

        <div class="row g-5">
          <!-- Form -->
          <div class="col-12 col-lg-6">
            <h2 class="fs-4 fw-bold text-primary mb-4">Invia un messaggio</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="mb-3">
                <label for="name" class="form-label text-primary">Nome e Cognome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  formControlName="name"
                  class="form-control border-primary"
                />
                @if (contactForm.get("name")?.dirty) {
                  @if (contactForm.get("name")?.errors?.['required']) {
                    <div class="text-danger">
                      Obbligatorio
                    </div>
                  }
                }
              </div>

              <div class="mb-3">
                <label for="email" class="form-label text-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  formControlName="email"
                  class="form-control border-primary"
                />
                @if (contactForm.get("email")?.dirty) {
                  @if (contactForm.get("email")?.errors?.['required']) {
                    <div class="text-danger">
                      Obbligatorio
                    </div>
                  } @else if (contactForm.get("email")?.errors?.['email']) {
                    <div class="text-danger">
                      Email non valida
                    </div>
                  }
                }
              </div>

              <div class="mb-3">
                <label for="message" class="form-label text-primary">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  formControlName="message"
                  class="form-control border-primary"
                ></textarea>
                @if (contactForm.get("message")?.dirty) {
                  @if (contactForm.get("message")?.errors?.['required']) {
                    <div class="text-danger">
                      Obbligatorio
                    </div>
                  }
                }
              </div>

<!--              <re-captcha formControlName="recaptcha"-->
<!--                          siteKey="siteKey"-->
<!--                          (resolved)="resolved($event)"-->
<!--              ></re-captcha>-->
              <re-captcha formControlName="recaptcha"
                          (resolved)="resolved($event)"
              ></re-captcha>

              <button
                type="submit"
                [disabled]="!contactForm.valid"
                class="btn btn-primary w-100 mt-3"
              >
                Invia Messaggio
              </button>
            </form>
          </div>

          <!-- Contatti -->
          <div class="col-12 col-lg-6">
            <h2 class="fs-4 fw-bold text-primary mb-4">Informazioni di Contatto</h2>

            <div class="d-flex align-items-start mb-4">
              <div class="bg-light p-3 rounded-circle me-3 text-primary">
                <i class="bi bi-geo-alt-fill fs-4"></i>
              </div>
              <div>
                <h5 class="fw-semibold text-primary mb-1">Indirizzi</h5>
                <p class="text-secondary mb-1">Viale Parioli, 93/G, 00197 Roma (RM)</p>
                <hr style="border-top: #1e40af 2px dashed">
                <p class="text-secondary mb-0">Via Casilina, 243, 00038 Valmontone (RM)</p>
              </div>
            </div>

            <div class="d-flex align-items-start mb-4">
              <div class="bg-light p-3 rounded-circle me-3 text-primary">
                <i class="bi bi-telephone-fill fs-4"></i>
              </div>
              <div>
                <h5 class="fw-semibold text-primary mb-1">Telefono</h5>
                <p class="text-secondary mb-0">+39 06 9597413</p>
              </div>
            </div>

            <div class="d-flex align-items-start mb-4">
              <div class="bg-light p-3 rounded-circle me-3 text-primary">
                <i class="bi bi-printer-fill fs-4"></i>
              </div>
              <div>
                <h5 class="fw-semibold text-primary mb-1">Fax</h5>
                <p class="text-secondary mb-0">+39 06 87758752</p>
              </div>
            </div>

            <div class="d-flex align-items-start mb-4">
              <div class="bg-light p-3 rounded-circle me-3 text-primary">
                <i class="bi bi-envelope-fill fs-4"></i>
              </div>
              <div>
                <h5 class="fw-semibold text-primary mb-1">Email</h5>
                <p class="text-secondary mb-0">TODO</p>
              </div>
            </div>

            <div class="d-flex align-items-start mb-4">
              <div class="bg-light p-3 rounded-circle me-3 text-primary">
                <i class="bi bi-clock-fill fs-4"></i>
              </div>
              <div>
                <h5 class="fw-semibold text-primary mb-1">Orari di Apertura</h5>
                <p class="text-secondary mb-0">
                  Lunedì - Venerdì: 9:00 - 18:00<br/>
                  Sabato: 9:00 - 13:00<br/>
                  Domenica: Chiuso
                </p>
              </div>
            </div>


          </div>
          <div class="mt-5">
            <h3 class="fs-5 fw-bold text-primary mb-3">Dove Siamo</h3>

            <div class="row">
              <div class="col-12 col-md-6">
                <p class="text-secondary">Viale Parioli, 93/G, 00197 Roma (RM)</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5936.6888887486275!2d12.48342137602582!3d41.92844936226031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f612047f3b241%3A0x946d05a9a1a8d687!2sViale%20Parioli%2C%2093%2C%2000197%20Roma%20RM!5e0!3m2!1sen!2sit!4v1759936890533!5m2!1sen!2sit"
                  class="w-100" height="450" style="border:0; border-radius: 10px;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div class="col-12 col-md-6">
                <p class="text-secondary">Via Casilina, 243, 00038 Valmontone (RM)</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.3094865970627!2d12.921184351286703!3d41.77487115405784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13257c49ee836ecb%3A0xddb3b61b5d7cf91e!2sVia%20Casilina%2C%20243%2C%2000038%20Valmontone%20RM!5e0!3m2!1sen!2sit!4v1759936817353!5m2!1sen!2sit"
                  class="w-100" height="450" style="border:0; border-radius: 10px;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <app-modal [modalTitle]="'Grazie!'" [modalBtnCloseText]="'Chiudi'">
      <div #divModalBody></div>
    </app-modal>

  `,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ModalComponent, RecaptchaModule, RecaptchaFormsModule]
})
export class ContactComponent implements OnInit {

  @ViewChild('divModalBody') divModalBody!: ElementRef;
  contactForm!: FormGroup;
  descToDisplay = 'Grazie per averci contattato! Ti risponderemo al più presto.'

  constructor(private fb: FormBuilder,
              // @Inject(RECAPTCHA_SITE_KEY_V2) public siteKey: string
              // @Inject(RECAPTCHA_V3_SITE_KEY) public siteKey: string
  ) {
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required],
    })
  }

  onSubmit() {
    this.openModal()
    console.log(this.contactForm.value);
    // this.formData = { name: '', email: '', message: '' };
  }

  openModal() {
    const modalOfService = new bootstrap.Modal(document.getElementById('modalService'));
    this.divModalBody.nativeElement.innerHTML = `<p>${this.descToDisplay}</p>`;
    modalOfService.toggle();
  }

  resolved(captchaResponse: string | null) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

}
