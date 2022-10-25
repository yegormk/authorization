import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { authAppState } from '../interfaces/responses.interfaces';
import { ApiBaseService } from '../services/api-base.service';
import * as AuthActions from '../store/auth.actions';
import { selectListOfUsers } from '../store/auth.selectors';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'groups'];
  dataSource$ = this.store.select(selectListOfUsers);

  constructor(private service: ApiBaseService, private store: Store<authAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.getUsers());
  }
}
