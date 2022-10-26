import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { IAuthAppState } from '../../interfaces/responses.interfaces';
import * as authActions from '../../store/auth.actions';
import { ApiAuthService } from '../../services/api-auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(
    private router: Router,
    private store: Store<IAuthAppState>,
    private service: ApiAuthService,
  ) {}

  ngOnInit(): void {
    if (this.service.isLoggedIn()) {
      this.router.navigate(['/assessments']);
    }
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.store.dispatch(
      authActions.login({
        user: { email: this.loginForm.value.email, password: this.loginForm.value.password },
      }),
    );
  }
}
