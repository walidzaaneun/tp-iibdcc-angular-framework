import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class ProductAPI {

  private http = inject(HttpClient);

  getAllProducts() {
    return this.http.get('http://localhost:8083/products');
  }

  deleteProduct(product: any) {
    return this.http.delete('http://localhost:8083/products/'+product.id);
  }
}
