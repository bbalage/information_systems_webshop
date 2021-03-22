import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required, Validators.pattern(/[1-9a-zA-Z]/)],
    title: [''],
    description: [''],
    price: [0, Validators.min(1)],
    imgUrl: ['https://matchory.com/assets/corals/images/default_product_image.png', Validators.pattern(/^http/)],
    brand: ['']
  });

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  get id () {
    return this.productForm.get('id');
  }

  get price () {
    return this.productForm.get('price');
  }

  get imgUrl () {
    return this.productForm.get('imgUrl');
  }

  ngOnInit(): void {
  }

  addProduct() {
    const product = this.productForm.value;
    this.productService.addProduct(product);
    this.router.navigateByUrl("/");
  }

}
