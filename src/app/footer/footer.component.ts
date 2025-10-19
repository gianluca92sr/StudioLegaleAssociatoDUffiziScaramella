import {Component, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';
import {TrimPipe} from '../core/pipe/trim.pipe';

@Component({
  selector: 'app-footer',
  template: `

    <footer class="border-top border-primary bg-primary text-white py-5">
      <div class="container-fluid px-4">
        <div class="row">
          <div class="col-12">
            <!--            <div class="d-flex gap-2 align-items-center mb-3">-->
            <img width="200px" src="/logoWhite.png" alt="logoWhite">
            <!--            </div>-->
          </div>
        </div>

        <div class="row g-4 align-items-start mt-3">
          <div class="col-md-6">
            <h3 class="h6 fw-semibold mb-3">Lo Studio</h3>
            <p class="text-white mb-3" style="text-align: justify">
              Lo Studio Legale Associato D'Uffizi & Scaramella offre consulenza legale specializzata
              in vari ambiti del diritto, con un approccio personalizzato e attento alle esigenze dei clienti.
            </p>
          </div>

          <div class="col-md-3">
            <h3 class="h6 fw-semibold mb-3">Contatti</h3>
            <ul class="list-unstyled text-white">
              <li class="d-flex align-items-start mb-2">
                <i class="bi bi-geo-alt-fill"></i>
                <span class="ms-2">Viale Parioli, 93/G, 00197 Roma (RM)</span>
              </li>
              <li class="d-flex align-items-start mb-2">
                <i class="bi bi-geo-alt-fill"></i>
                <span class="ms-2">Via Casilina, 243, 00038 Valmontone (RM)</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-telephone-fill"></i>
                <span class="ms-2">{{ phone }}</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-printer-fill"></i>
                <span class="ms-2">{{ fax }}</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="bi bi-envelope-at-fill"></i>
                <span class="ms-2">{{ email }}</span>
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <h3 class="h6 fw-semibold mb-3">Orari</h3>
            <ul class="list-unstyled text-white">
              <li>Lunedì - Venerdì: 9:00 - 18:00</li>
              <li>Sabato: 9:00 - 13:00</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="d-flex gap-2">
              <a href='mailto:{{email}}' #mailTo title="Invia Email">
                <button class="btn btn-outline-light p-2">
                  <i class="bi bi-envelope"></i>
                </button>
              </a>
              <a href="tel:{{phone | trim}}" #telTo title="Chiama">
                <button class="btn btn-outline-light p-2">
                  <i class="bi bi-telephone"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="border-top border-primary mt-4 pt-3 text-center text-white">
          <p>© {{ currentYear }} Studio Legale Associato D'Uffizi & Scaramella. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  `,
  imports: [
    TrimPipe
  ],
  standalone: true
})
export class FooterComponent implements OnInit {
  @ViewChild("mailTo") mailTo!: ElementRef;
  @ViewChild("telTo") telTo!: ElementRef;

  currentYear = new Date().getFullYear();
  email: string = "segreteria@duffiziscaramella.it";
  phone: string = "+39 06 9597413";
  fax: string = "+39 06 87758752"

  ngOnInit(): void {

  }
}
