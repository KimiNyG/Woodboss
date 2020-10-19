import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routing components
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'galleria', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
