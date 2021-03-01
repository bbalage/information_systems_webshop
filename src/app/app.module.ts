import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ShoppingCartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
