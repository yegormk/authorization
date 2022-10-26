import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiAuthService } from './api-auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private service: ApiAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.isLoggedIn()) {
      req = req.clone({
        setHeaders: {
          'X-Token': '' + localStorage.getItem('token'),
        },
      });
    }

    return next.handle(req);
  }
}
