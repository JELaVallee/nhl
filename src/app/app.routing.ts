import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule {}
