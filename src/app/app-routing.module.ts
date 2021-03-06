import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '1-hot-weather-widget',
    loadChildren: () => import('./modules/1-hot-weather-widget/hot-weather-widget.module').then(m => m.HotWeatherWidgetModule),
  },
  {
    path: '2-hot-weather-widget',
    loadChildren: () => import('./modules/2-hot-weather-widget/hot-weather-widget.module').then(m => m.HotWeatherWidgetModule),
  },
  {
    path: '3-github-search',
    loadChildren: () => import('./modules/3-github-search/github-search.module').then(m => m.GithubSearchModule),
  },
  {
    path: '4-hot-weather-widget',
    loadChildren: () => import('./modules/4-hot-weather-widget/hot-weather-widget.module').then(m => m.HotWeatherWidgetModule),
  },
  {
    path: '5-login-form',
    loadChildren: () => import('./modules/5-login-form/login-form.module').then(m => m.LoginFormModule),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
