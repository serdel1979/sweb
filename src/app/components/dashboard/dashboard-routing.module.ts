import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { InmobiliariosComponent } from './inmobiliarios/inmobiliarios.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'inmobiliarios', component: InmobiliariosComponent},
    {path: 'logout', component: LoginComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
