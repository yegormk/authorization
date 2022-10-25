import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  loggedUserInfo,
  userInfo,
  loginForm,
  userAssessment,
  userGraph
} from '../interfaces/responses.interfaces';
import { delay, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  currentGraph!: userGraph;

  constructor(private http: HttpClient, private router: Router) {}

  public urlApi = 'https://ds-test-api.herokuapp.com/api/';

  login(user: loginForm) {
    return this.http.post<loggedUserInfo>(`${this.urlApi}login`, user).pipe(
      tap((userResponse: loggedUserInfo) => {
        localStorage.setItem('token', userResponse.token);
        localStorage.setItem('role', userResponse.role);
        this.router.navigate(['']);
      }),
    );
  }

  getAssessments() {
    return this.http.get<userAssessment[]>(`${this.urlApi}userassessments`);
  }

  getGraph(id: string) {
    let params = new HttpParams().append('id', id);
    return this.http.get<userGraph>(`${this.urlApi}userassessment/graph`, { params: params }).pipe(
      tap((userAsses: userGraph) => {
        localStorage.setItem('graphData', JSON.stringify(userAsses.data));
        this.router.navigate(['/graph']);
      }),
    );
  }

  getUsers() {
    return this.http.get<userInfo[]>(`${this.urlApi}users`);
  }
}
