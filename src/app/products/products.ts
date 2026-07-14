import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: any;

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  protected handleDelete(product: any) {
    let confirmation = confirm('etes vous sur de vouloir suprrimer produit id :' + product.id);
    if (confirmation == true) {
      this.productService.deleteProduct(product);
    }
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.productService.getAllProducts();
  }
}
