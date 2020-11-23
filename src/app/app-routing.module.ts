import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RouteGuardService} from './core/services/route-guard.service';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'products',
      loadChildren: () => import('./products/products.module').then(module => module.ProductsModule)
    }],
    canActivate: [RouteGuardService]
  },
  {
    path: '**',
    component: NotfoundComponent,
    canActivate: [RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
