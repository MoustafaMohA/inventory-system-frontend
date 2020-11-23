import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCardModule} from 'ng-zorro-antd/card';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NzGridModule} from 'ng-zorro-antd/grid';
import { HomeComponent } from './home/home.component';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {AuthenticationInterceptor} from './core/services/authentication-interceptor';
import { NotfoundComponent } from './notfound/notfound.component';
import {NzResultModule} from 'ng-zorro-antd/result';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzCardModule,
    NzGridModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    NzResultModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
