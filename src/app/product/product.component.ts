import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service'
import { Product } from './product';
import { ActivatedRoute } from '@angular/router'
import { CartService } from '../cart/cart.service';
declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct: String;


  constructor(
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
    ) { }

      ngOnInit() {         
            this.getProducts()   
        }
      
  getProducts() {
    this.productService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
  }

    addToCart(product: Product) {
       this.cartService.addToCart(product);
       alertify.success(this.addedProduct = product.productName+ " sepete eklendi!")
      }
    

  // getAlert(){
  //   alertify.success('Success message');
  // }
}

