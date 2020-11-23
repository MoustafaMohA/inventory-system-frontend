import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateProductComponent} from './create-product/create-product.component';
import {ListComponent} from './list/list.component';
import {ViewDetailsComponent} from './view-details/view-details.component';
import {ProductsRoutingModule} from './products-routing.module';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSpaceModule} from 'ng-zorro-antd/space';


@NgModule({
  declarations: [CreateProductComponent, ListComponent, ViewDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzIconModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzMessageModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSpaceModule
  ]
})
export class ProductsModule {
}
