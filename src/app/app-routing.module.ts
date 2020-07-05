import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screem/login/login.component';
import { ListaComprasComponent } from './screem/lista-compras/lista-compras.component';
import { ProcesarCompraComponent } from './screem/procesar-compra/procesar-compra.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'lista-compra', component: ListaComprasComponent },
  { path: 'procesar-compra/:compra', component: ProcesarCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
