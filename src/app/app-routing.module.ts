import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionInventarioComponent } from './components/administracion-inventario/administracion-inventario.component';
import { EditarProductoComponent } from './components/administracion-inventario/editar-producto/editar-producto.component';
import { ProductoComponent } from './components/administracion-inventario/producto/producto.component';
import { AdministracionUsuariosComponent } from './components/administracion-usuarios/administracion-usuarios.component';
import { AsignarUsuariosComponent } from './components/administracion-usuarios/asignar-usuarios/asignar-usuarios.component';
import { EditarUsuariosComponent } from './components/administracion-usuarios/editar-usuarios/editar-usuarios.component';
import { VerUsuariosComponent } from './components/administracion-usuarios/ver-usuarios/ver-usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AsignarProductosComponent } from './components/administracion-inventario/asignar-productos/asignar-productos.component';
import { ReportesVentaComponent } from './components/administracion-usuarios/reportes-venta/reportes-venta.component';
import { ReportesComponent } from './components/administracion-usuarios/reportes/reportes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Administracion-de-usuarios', component: AdministracionUsuariosComponent},
  {path: 'Administracion-de-inventario', component: AdministracionInventarioComponent},
  {path: 'Perfil', component: PerfilComponent},
  {path: 'Editar-producto', component: EditarProductoComponent},
  {path: 'Ver-usuarios',component: VerUsuariosComponent},
  {path: 'Editar-usuarios', component: EditarUsuariosComponent},
  {path: 'Asignar-usuarios', component:AsignarUsuariosComponent},
  {path: 'Producto', component:ProductoComponent},
  {path: 'Asignar-productos', component:AsignarProductosComponent},
  {path: 'Reporte-ventas', component: ReportesVentaComponent},
  {path: 'Reportes', component: ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
