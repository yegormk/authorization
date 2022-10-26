import {
  ILoggedUserInfo,
  IUserInfo,
  ILoginForm,
  IUserAssessment,
  IUserGraph,
} from '../interfaces/responses.interfaces';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ user: ILoginForm }>());

export const loginSuccessful = createAction('[Auth] Successfully logged', props<{ userData: ILoggedUserInfo }>());

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const getAssessments = createAction('[Auth] Getting assessments');

export const getAssessmentsSuccessful = createAction(
  '[Auth] Successfully loaded assessments',
  props<{ userAssessments: IUserAssessment[] }>(),
);

export const getAssessmentsFailure = createAction('[Auth] Failed to load assessments', props<{ error: string }>());

export const getGraph = createAction('[Auth] Get Graph', props<{ id: string }>());

export const getGraphSuccessful = createAction('[Auth] Loaded Graph', props<{ currentGraph: IUserGraph }>());

export const getGraphFailure = createAction('[Auth] Failed to load graph', props<{ error: string }>());

export const getUsers = createAction('[Auth] Getting users');

export const getUsersSuccessful = createAction(
  '[Auth] Successfully loaded users',
  props<{ listOfAllUsers: IUserInfo[] }>(),
);

export const getUsersFailure = createAction('[Auth] Failed to load list of users', props<{ error: string }>());
