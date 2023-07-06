import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdministracionUsuariosComponent } from './components/administracion-usuarios/administracion-usuarios.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AdministracionInventarioComponent } from './components/administracion-inventario/administracion-inventario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AgregarProductoComponent } from './components/administracion-inventario/agregar-producto/agregar-producto.component';
import { InventarioComponent } from './components/administracion-inventario/inventario/inventario.component';
import { AsignarProductosComponent } from './components/administracion-inventario/asignar-productos/asignar-productos.component';
import { ReportesVentaComponent } from './components/administracion-inventario/reportes-venta/reportes-venta.component';
import { UsuariosComponent } from './components/administracion-usuarios/usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './components/administracion-usuarios/agregar-usuarios/agregar-usuarios.component';
import { AsignarUsuariosComponent } from './components/administracion-usuarios/asignar-usuarios/asignar-usuarios.component';
import { EditarProductoComponent } from './components/administracion-inventario/editar-producto/editar-producto.component';
import { EditarUsuariosComponent } from './components/administracion-usuarios/editar-usuarios/editar-usuarios.component';
import { VerUsuariosComponent } from './components/administracion-usuarios/ver-usuarios/ver-usuarios.component';
import { ProductoComponent } from './components/administracion-inventario/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministracionUsuariosComponent,
    NavigationComponent,
    AdministracionInventarioComponent,
    PerfilComponent,
    AgregarProductoComponent,
    InventarioComponent,
    AsignarProductosComponent,
    ReportesVentaComponent,
    UsuariosComponent,
    AgregarUsuariosComponent,
    AsignarUsuariosComponent,
    EditarProductoComponent,
    EditarUsuariosComponent,
    VerUsuariosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
