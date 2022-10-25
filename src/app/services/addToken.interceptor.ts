import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') !== null) {
      req = req.clone({
        setHeaders: {
          'X-Token': '' + localStorage.getItem('token'),
        },
      });
    }

    return next.handle(req);
  }
}
