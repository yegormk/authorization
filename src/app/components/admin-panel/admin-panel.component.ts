import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { IAuthAppState } from '../../interfaces/responses.interfaces';
import * as authActions from '../../store/auth.actions';
import { selectListOfUsers } from '../../store/auth.selectors';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'groups'];
  dataSource$ = this.store.select(selectListOfUsers);

  constructor(private store: Store<IAuthAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getUsers());
  }
}
