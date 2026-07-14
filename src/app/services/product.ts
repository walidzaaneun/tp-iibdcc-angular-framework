import { Service } from '@angular/core';

@Service()
export class Product {
  products = [
    { id: 1, name: 'Macbook pro 13', price: 9000, selected: true },
    { id: 2, name: 'Iphone 15', price: 7000, selected: false },
    { id: 3, name: 'Samsung A3', price: 3000, selected: true },
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  deleteProduct(product : any) {
    this.products = this.products.filter((p: any) => p.id != product.id);
  }
}
