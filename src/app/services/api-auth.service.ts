import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ILoggedUserInfo, ILoginForm } from '../interfaces/responses.interfaces';

import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthService {
  constructor(private http: HttpClient, private router: Router) {}

  public urlApi = 'https://ds-test-api.herokuapp.com/api/';

  login(user: ILoginForm) {
    return this.http.post<ILoggedUserInfo>(`${this.urlApi}login`, user).pipe(
      tap((userResponse: ILoggedUserInfo) => {
        localStorage.setItem('token', userResponse.token);
        localStorage.setItem('role', userResponse.role);
        this.router.navigate(['/assessments']);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('graphData');
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
