import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routing components
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'galleria', component: GalleryComponent},
  {path:'palvelut', component: ServicesComponent},
  {path:'yhteystiedot', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
