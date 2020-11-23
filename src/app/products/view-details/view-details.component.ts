import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsModel} from '../models/products.model';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  public product: ProductsModel;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.productsService.get(id).subscribe(data => {
        if (data.length > 0) {
          this.product = data[0];
        }
      });
    });
  }
}
