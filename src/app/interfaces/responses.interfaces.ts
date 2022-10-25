export interface loggedUserInfo {
  first_name: string;
  last_name: string;
  role: string;
  token: string;
}

export interface loginForm {
  email: string;
  password: string;
}

export interface userAssessment {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}

export interface userGraph {
  data: {
    Agreeableness: number;
    Drive: number;
    Luck: number;
    Openness: number;
  };
  type: string;
}

export interface userInfo {
  first_name: string;
  last_name: string;
  email: string;
  groups: string[];
}

export interface userLoginData {
  pending: boolean;
  error: string;
  userData: loggedUserInfo;
}

export interface usersAssessmentData {
  pending: boolean;
  error: string;
  listOfAssessments: userAssessment[];
}

export interface userGraphData {
  pending: boolean;
  error: string;
  currentUserGraph: userGraph;
}

export interface listOfUsersData {
  pending: boolean;
  error: string;
  listOfUsers: userInfo[];
}

export interface authAppState {
  currentUser: userLoginData;
  listOfAssessments: usersAssessmentData;
  userGraph: userGraphData;
  listOfUsers: listOfUsersData;
}
