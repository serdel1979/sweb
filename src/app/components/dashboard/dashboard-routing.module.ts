import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearInmobiliarioComponent } from './crear-inmobiliario/crear-inmobiliario.component';
import { DashboardComponent } from './dashboard.component';
import { InmobiliariosComponent } from './inmobiliarios/inmobiliarios.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'inmobiliarios', component: InmobiliariosComponent},
  ]},
  {path: 'crear_inmobiliario', component: CrearInmobiliarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
