import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { ApiAuthService } from '../services/api-auth.service';
import { DataLoadingService } from '../services/data-loading.service';

@Injectable()
export class authEffects {
  constructor(
    private actions$: Actions,
    private authService: ApiAuthService,
    private dataLoadingService: DataLoadingService,
  ) {}

  public login$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(response =>
        this.authService.login(response.user).pipe(
          map(response => AuthActions.loginSuccessful({ userData: response })),
          catchError(error => of(AuthActions.loginFailure({ error }))),
        ),
      ),
    ),
  );

  public getAssessments$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.getAssessments),
      switchMap(action =>
        this.dataLoadingService.getAssessments().pipe(
          map(response => {
            return AuthActions.getAssessmentsSuccessful({ userAssessments: response });
          }),
          catchError(error => of(AuthActions.getAssessmentsFailure({ error }))),
        ),
      ),
    ),
  );

  public getGraph$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.getGraph),
      mergeMap(action =>
        this.dataLoadingService.getGraph(action.id).pipe(
          map(response => AuthActions.getGraphSuccessful({ currentGraph: response })),
          catchError(error => of(AuthActions.getGraphFailure({ error }))),
        ),
      ),
    ),
  );

  public getUsers$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActions.getUsers),
      mergeMap(action =>
        this.dataLoadingService.getUsers().pipe(
          map(response => AuthActions.getUsersSuccessful({ listOfAllUsers: response })),
          catchError(error => of(AuthActions.getUsersFailure({ error }))),
        ),
      ),
    ),
  );
}
