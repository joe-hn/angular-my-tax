import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { materialModule } from './angular-material/material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import localesHN from '@angular/common/locales/es-HN';
import { LoginComponent } from './screem/login/login.component';
import { ListaComprasComponent } from './screem/lista-compras/lista-compras.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProcesarCompraComponent } from './screem/procesar-compra/procesar-compra.component';

registerLocaleData(localesHN, 'es-HN');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaComprasComponent,
    CabeceraComponent,
    MenuComponent,
    ProcesarCompraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    materialModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
