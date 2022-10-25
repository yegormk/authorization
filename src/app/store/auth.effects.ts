import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, switchMap } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { ApiBaseService } from '../services/api-base.service';

@Injectable()
export class authEffects {
  constructor(private actions$: Actions, private authService: ApiBaseService) {}

  public login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(response =>
        this.authService.login(response.user).pipe(
          map(response => AuthActions.loginSuccessful({ userData: response })),
          catchError(error => of(AuthActions.loginFailure({ error }))),
        ),
      ),
    );
  });

  public getAssessments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getAssessments),
      switchMap(action =>
        this.authService.getAssessments().pipe(
          map(response => {
            return AuthActions.getAssessmentsSuccessful({ userAssessments: response })
          }),
          catchError(error => EMPTY), // of(AuthActions.getAssessmentsFailure({ error }))
        ),
      ),
    );
  });

  public getGraph$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getGraph),
      mergeMap(action =>
        this.authService.getGraph(action.id).pipe(
          map(response => AuthActions.getGraphSuccessful({ currentGraph: response })),
          catchError(error => of(AuthActions.getGraphFailure({ error }))),
        ),
      ),
    );
  });

  public getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getUsers),
      mergeMap(action =>
        this.authService.getUsers().pipe(
          map(response => AuthActions.getUsersSuccessful({ listOfAllUsers: response })),
          catchError(error => of(AuthActions.getUsersFailure({ error }))),
        ),
      ),
    );
  });
}
