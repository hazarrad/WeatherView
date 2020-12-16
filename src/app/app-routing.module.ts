import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { LandingComponent } from './landing/landing.component';



const routes: Routes = [
   
          { path: '',component: WeatherComponent},
          { path: 'land', component: LandingComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
