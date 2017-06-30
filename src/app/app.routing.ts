import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**',  redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {}
