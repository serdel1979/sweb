import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Err404Component } from './components/err404/err404.component';

const routes: Routes = [ 
  {path: 'login',  pathMatch:'full', redirectTo: 'login'},
  {path: 'logout',  component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'dashboard', loadChildren: ()=> import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: '**', pathMatch: 'full', component: Err404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
