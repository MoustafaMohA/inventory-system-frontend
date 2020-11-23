import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {ViewDetailsComponent} from './view-details/view-details.component';
import {CreateProductComponent} from './create-product/create-product.component';

const routes: Routes = [
  {path: '', component: ListComponent, pathMatch: 'full', data: {breadcrumb: 'Products'}},
  {path: 'view/:id', component: ViewDetailsComponent,  data: {breadcrumb: 'Product Details'}},
  {path: 'new', component: CreateProductComponent,  data: {breadcrumb: 'Create new'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {
}
