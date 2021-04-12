import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  storage: Product[] = [];

  constructor(private http: HttpClient) { }

  async loadStorageIfEmpty() {
    if (!this.storage || this.storage.length === 0) {
      this.storage = await this.http.get<Product[]>('assets/products.json').toPromise();
    }
  }

  async loadProducts() {
    return this.http.get<Product[]>('api/products').toPromise();
  }

  async filterProducts(query: string) {
    return this.http.get<Product[]>('api/products').toPromise();
  }

  async addProduct(product: Product) {
    this.http.post<Product>('api/products', product).toPromise();
  }
}
