import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './views/component/nav/nav.component';
import { ProductCreateComponent } from './views/component/product-create/product-create.component';
import { ProductSellComponent } from './views/component/product-sell/product-sell.component';
import { HomeComponent } from './views/component/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './views/component/footer/footer.component';
import { ProductUpdateComponent } from './views/component/product-update/product-update.component';

import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";
import { ProductDeleteComponent } from './views/component/product-delete/product-delete.component';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductCreateComponent,
    ProductSellComponent,
    HomeComponent,
    FooterComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
