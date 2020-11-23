import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {ProductsModel} from '../models/products.model';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public isProductsLoading = true;
  public products: any;
  public setOfCheckedId = new Set<number>();

  private checked = false;
  private indeterminate = false;

  constructor(private productsService: ProductsService, private messageService: NzMessageService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.products.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.products.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  deleteSelected(): void {
    this.productsService.deleteSelected(Array.from(this.setOfCheckedId))
      .subscribe(() => {
        this.messageService.create('success', 'Selected product has been deleted');
        this.isProductsLoading = true;
        this.getProducts();
      }, error => {
        this.messageService.create('error', 'Could not delete selected products');
      });
  }

  delete(product: ProductsModel): void {
    this.productsService.delete(product.id).subscribe(() => {
      this.messageService.create('success', 'Product has been deleted');
      this.isProductsLoading = true;
      this.getProducts();
    });
  }

  private getProducts(): void {
    this.productsService.list().subscribe(data => {
      this.products = data;
      this.isProductsLoading = false;
    }, error => {
      this.isProductsLoading = false;
    });
  }
}
