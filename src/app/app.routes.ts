import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LawyersComponent} from './lawyers/lawyers.component';
import {ServicesComponent} from './services/services.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'avvocati', component: LawyersComponent },
  { path: 'servizi', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contatti', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
