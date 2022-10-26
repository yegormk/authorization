import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import {
  IUsersAssessmentData,
  IUserLoginData,
  IUserGraphData,
  IListOfUsersData,
} from '../interfaces/responses.interfaces';

const initialStateUserLogin: IUserLoginData = {
  pending: false,
  error: '',
  userData: {
    firstName: '',
    lastName: '',
    role: '',
    token: '',
  },
};

const initialStateUserAssessment: IUsersAssessmentData = {
  pending: false,
  error: '',
  listOfAssessments: [],
};

const initialStateGraph: IUserGraphData = {
  pending: false,
  error: '',
  currentUserGraph: {
    data: {
      agreeableness: 0,
      drive: 0,
      luck: 0,
      openness: 0,
    },
    type: '',
  },
};

const initialStateGetUsers: IListOfUsersData = {
  pending: false,
  error: '',
  listOfUsers: [],
};

export const login = createReducer(
  initialStateUserLogin,
  on(AuthActions.login, (state, { user }) => {
    return {
      ...state,
      pending: true,
    };
  }),
  on(AuthActions.loginSuccessful, (state, { userData }) => {
    return {
      ...state,
      pending: false,
      userData: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: userData.role,
        token: userData.token,
      },
    };
  }),
  on(AuthActions.loginFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
);

export const getAssessments = createReducer(
  initialStateUserAssessment,
  on(AuthActions.getAssessments, state => {
    return {
      ...state,
      pending: true,
      listOfAssessments: [],
    };
  }),
  on(AuthActions.getAssessmentsSuccessful, (state, { userAssessments }) => {
    return {
      ...state,
      pending: false,
      listOfAssessments: userAssessments,
    };
  }),
  on(AuthActions.getAssessmentsFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
);

export const getGraph = createReducer(
  initialStateGraph,
  on(AuthActions.getGraph, (state, { id }) => {
    return {
      ...state,
      pending: true,
    };
  }),
  on(AuthActions.getGraphSuccessful, (state, { currentGraph }) => {
    return {
      ...state,
      pending: false,
      currentUserGraph: currentGraph,
    };
  }),
  on(AuthActions.getGraphFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
);

export const getUsers = createReducer(
  initialStateGetUsers,
  on(AuthActions.getUsers, state => {
    return {
      ...state,
      pending: true,
    };
  }),
  on(AuthActions.getUsersSuccessful, (state, { listOfAllUsers }) => {
    return {
      ...state,
      pending: false,
      listOfUsers: listOfAllUsers,
    };
  }),
  on(AuthActions.getUsersFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
);
