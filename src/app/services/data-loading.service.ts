import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { ApiAuthService } from './api-auth.service';
import { tap } from 'rxjs';
import {
  IUserInfo,
  IUserAssessment,
  IUserGraph,
} from '../interfaces/responses.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataLoadingService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: ApiAuthService,
  ) {}

  getAssessments() {
    return this.http.get<IUserAssessment[]>(`${this.authService.urlApi}userassessments`);
  }

  getGraph(id: string) {
    let params = new HttpParams().append('id', id);
    return this.http.get<IUserGraph>(`${this.authService.urlApi}userassessment/graph`, { params: params }).pipe(
      tap((userAsses: IUserGraph) => {
        localStorage.setItem('graphData', JSON.stringify(userAsses.data));
        this.router.navigate(['/graph']);
      }),
    );
  }

  getUsers() {
    return this.http.get<IUserInfo[]>(`${this.authService.urlApi}users`);
  }
}
