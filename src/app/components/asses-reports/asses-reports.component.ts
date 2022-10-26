import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { IAuthAppState } from '../../interfaces/responses.interfaces';
import { selectUserAssessments } from '../../store/auth.selectors';
import * as authActions from '../../store/auth.actions';
import { ApiAuthService } from '../../services/api-auth.service';

@Component({
  selector: 'app-asses-reports',
  templateUrl: './asses-reports.component.html',
  styleUrls: ['./asses-reports.component.css'],
})
export class AssesReportsComponent implements OnInit {
  assessments$ = this.store.select(selectUserAssessments);

  constructor(
    private router: Router,
    private store: Store<IAuthAppState>,
    private service: ApiAuthService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getAssessments());
  }

  openGraph(id: number): void {
    this.store.dispatch(authActions.getGraph({ id: String(id) }));
  }

  logOut(): void {
    this.service.logout();
  }
}
