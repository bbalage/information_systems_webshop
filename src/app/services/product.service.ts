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
    await this.loadStorageIfEmpty();
    return this.storage;
  }

  async filterProducts(query: string) {
    await this.loadStorageIfEmpty();
    
    return this.storage.filter((product) => {
      if (!product.title) {
        return false;
      }
      
      return product.title.includes(query);
    });
  }

  async addProduct(product: Product) {
    await this.loadStorageIfEmpty();
    this.storage.unshift(product);
  }
}
