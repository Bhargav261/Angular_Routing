import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componet/home/home.component';
import { ContactComponent } from './componet/contact/contact.component';
import { AboutComponent } from './componet/about/about.component';
import { ServicesComponent } from './componet/services/services.component';

const routes: Routes = [
  {
    component : HomeComponent,
    path: ""
  },
  {
    component : ContactComponent,
    path :"contact"
  },
  {
    component : AboutComponent,
    path :"about"
  },
  {
    component: ServicesComponent,
    path:"service"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
