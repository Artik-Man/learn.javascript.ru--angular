import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'hot-weather-widget',
    loadChildren: () => import('./modules/hot-weather-widget/hot-weather-widget.module').then(m => m.HotWeatherWidgetModule),
  },
  {
    path: 'hot-weather-widget-service',
    loadChildren: () => import('./modules/hot-weather-widget-service/hot-weather-widget.module').then(m => m.HotWeatherWidgetServiceModule),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
