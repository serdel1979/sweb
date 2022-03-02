import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Err404Component } from './components/err404/err404.component';
import { CrearInmobiliarioComponent } from './components/dashboard/crear-inmobiliario/crear-inmobiliario.component';

const routes: Routes = [ 
  
  {path: 'dashboard', loadChildren: ()=> import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: 'login',  component: LoginComponent},
  {path: 'logout',  redirectTo:'login'},
  {path: '', component: LoginComponent},
  {path: '**', pathMatch: 'full', component: Err404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
