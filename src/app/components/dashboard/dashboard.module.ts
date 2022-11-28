import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';
import { VentaComponent } from './venta/venta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { CrudProdComponent } from './productos/crud-prod/crud-prod.component';
import { ErrorStatusComponent } from './error-status/error-status.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    ProveedoresComponent,
    ProductosComponent,
    VentaComponent,
    NavbarComponent,
    VendedoresComponent,
    CrudProdComponent,
    ErrorStatusComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
