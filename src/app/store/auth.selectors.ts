import { createSelector } from '@ngrx/store';
import {
  authAppState,
  usersAssessmentData,
  userLoginData,
  userGraphData,
  listOfUsersData,
} from '../interfaces/responses.interfaces';

export const selectLogin = createSelector(
  (state: authAppState) => {
    return state.currentUser;
  },
  (user: userLoginData) => user,
);

export const selectUserAssessments = createSelector(
  (state: authAppState) => {
    return state.listOfAssessments;
  },
  (listOfAssessments: usersAssessmentData) => {
    return listOfAssessments;
  },
);

export const selectGraph = createSelector(
  (state: authAppState) => {
    return state.userGraph;
  },
  (currentGraph: userGraphData) => currentGraph,
);

export const selectListOfUsers = createSelector(
  (state: authAppState) => {
    return state.listOfUsers;
  },
  (listOfUsers: listOfUsersData) => listOfUsers,
);
