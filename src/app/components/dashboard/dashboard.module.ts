import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InmobiliariosComponent } from './inmobiliarios/inmobiliarios.component';
import { CrearInmobiliarioComponent } from './crear-inmobiliario/crear-inmobiliario.component';
import { EditarInmobiliarioComponent } from './editar-inmobiliario/editar-inmobiliario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    InmobiliariosComponent,
    CrearInmobiliarioComponent,
    EditarInmobiliarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
