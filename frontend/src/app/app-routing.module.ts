import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductSellComponent} from "./views/component/product-sell/product-sell.component";
import {ProductCreateComponent} from "./views/component/product-create/product-create.component";
import {HomeComponent} from "./views/component/home/home.component";
import {ProductUpdateComponent} from "./views/component/product-update/product-update.component";
import {ProductDeleteComponent} from "./views/component/product-delete/product-delete.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products/sell",
    component: ProductSellComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
