import { createSelector } from '@ngrx/store';
import {
  IAuthAppState,
  IUsersAssessmentData,
  IUserLoginData,
  IUserGraphData,
  IListOfUsersData,
} from '../interfaces/responses.interfaces';

export const selectLogin = createSelector(
  (state: IAuthAppState) => {
    return state.currentUser;
  },
  (user: IUserLoginData) => user,
);

export const selectUserAssessments = createSelector(
  (state: IAuthAppState) => {
    return state.listOfAssessments;
  },
  (listOfAssessments: IUsersAssessmentData) => {
    return listOfAssessments;
  },
);

export const selectGraph = createSelector(
  (state: IAuthAppState) => {
    return state.userGraph;
  },
  (currentGraph: IUserGraphData) => currentGraph,
);

export const selectListOfUsers = createSelector(
  (state: IAuthAppState) => {
    return state.listOfUsers;
  },
  (listOfUsers: IListOfUsersData) => listOfUsers,
);
