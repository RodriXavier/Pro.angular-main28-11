import { VendedoresComponent } from './vendedores/vendedores.component';
import { VentaComponent } from './venta/venta.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'',component: InicioComponent},
    {path:'proveedores',component: ProveedoresComponent },
    {path:'productos',component: ProductosComponent},
    {path:'venta',component: VentaComponent},
    {path:'vendedores',component: VendedoresComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
