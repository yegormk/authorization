import { Component, OnInit } from '@angular/core';

import { authAppState } from '../interfaces/responses.interfaces';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserAssessments } from '../store/auth.selectors';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-asses-reports',
  templateUrl: './asses-reports.component.html',
  styleUrls: ['./asses-reports.component.css'],
})
export class AssesReportsComponent implements OnInit {
  assessments$ = this.store.select(selectUserAssessments);

  constructor(private router: Router, private store: Store<authAppState>) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.store.dispatch(AuthActions.getAssessments());
    }
  }

  openGraph(id: number): void {
    this.store.dispatch(AuthActions.getGraph({ id: String(id) }));
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('graphData');
    this.router.navigate(['/home']);
  }
}
