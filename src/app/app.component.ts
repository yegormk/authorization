import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthorizationComponent } from './authorization/authorization.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public form: MatDialog) {}

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.openAuthForm();
    }
  }

  openAuthForm() {
    let formInfo = this.form.open(AuthorizationComponent);
  }

  isAdmin() {
    return localStorage.getItem('role') === 'Admin';
  }
}
