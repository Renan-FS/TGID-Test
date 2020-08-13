import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../controllers/product/product.service";
import {Product} from "../../../models/product.model";
declare var jQuery: any;
declare var addProduct: any;

@Component({
  selector: 'app-product-sell',
  templateUrl: './product-sell.component.html',
  styleUrls: ['./product-sell.component.css']
})
export class ProductSellComponent implements OnInit {

  products: Product[]
  quantity: any;

  addProduct() {
    addProduct();
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    });



    // (function ($) {
    //   $(document).ready(function(){
    //     $('.quant').on("blur", Soma);
    //
    //     function Soma(){
    //       var soma = 0;
    //       $('.quant').each(function(){
    //         var valorItem = parseFloat($(this).val());
    //
    //         if(!isNaN(valorItem))
    //           soma *= parseFloat(this.valorItem);
    //       });
    //
    //       $('#product-amount').val((soma).toFixed(2));
    //     }
    //   });
    // })(jQuery);

  }

}
