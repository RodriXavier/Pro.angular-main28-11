import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorStatusComponent } from './components/dashboard/error-status/error-status.component';

const routes: Routes = [
  {path:'error-status/:status', component:ErrorStatusComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent },
  {path:'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path:'**',redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
