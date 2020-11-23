import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      setHeaders: {Authorization: `Bearer ${sessionStorage.getItem('token') || ''}`}
    })).pipe(tap(() => {
    }, (error: any) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        window.location.href = '/login';
      }
    }));
  }
}
