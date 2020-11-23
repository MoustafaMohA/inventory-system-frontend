import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../services/products.service';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private productsService: ProductsService, private messageService: NzMessageService) {
  }

  create(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.valid) {
      const product = this.validateForm.value;
      product.createdUser = 1;
      this.productsService.create(product).subscribe(value => {
        this.messageService.create('success', 'A new product has been created');
      }, error => this.messageService.create('error', `Can not create this product ${error.message}`));
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      productName: [null, [Validators.required]],
      productDescription: [null],
      price: [null, [Validators.required]]
    });
  }

}
