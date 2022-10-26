import { Component } from '@angular/core';

enum roles {
  Admin = 'Admin',
  User = 'User',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAdmin() {
    return localStorage.getItem('role') === roles.Admin;
  }
}
