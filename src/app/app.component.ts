import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Product[] = [];

  searchQuery: string = "";

  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    title: [''],
    description: [''],
    price: [0],
    imgUrl: ['https://matchory.com/assets/corals/images/default_product_image.png'],
    brand: ['']
  });

  constructor(private productService: ProductService,
    private formBuilder: FormBuilder) { };

  async ngOnInit() {
    this.products = await this.productService.loadProducts();
  }

  async search() {
    this.products = await this.productService.filterProducts(this.searchQuery);
  }

  addProduct() {
    const product = this.productForm.value;
    this.productService.addProduct(product);
  }
}
