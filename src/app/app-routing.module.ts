import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'hot-weather-widget',
    loadChildren: () => import('./modules/hot-weather-widget/hot-weather-widget.module').then(m => m.HotWeatherWidgetModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
