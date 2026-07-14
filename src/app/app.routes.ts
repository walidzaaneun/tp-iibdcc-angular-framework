import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { ProductsAPI } from './products-api/products-api';

export const routes: Routes = [
  {path : "home" , component : Home },
  {path : "products" , component : Products },
  {path : "api/products" , component : ProductsAPI }
];
