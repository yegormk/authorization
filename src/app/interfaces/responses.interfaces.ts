export interface ILoggedUserInfo {
  firstName: string;
  lastName: string;
  role: string;
  token: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IUserAssessment {
  id: number;
  name: string;
  active: boolean;
  image_url: string;
}

export interface IUserGraph {
  data: {
    agreeableness: number;
    drive: number;
    luck: number;
    openness: number;
  };
  type: string;
}

export interface IUserInfo {
  firstName: string;
  lastName: string;
  email: string;
  groups: string[];
}

export interface IUserLoginData {
  pending: boolean;
  error: string;
  userData: ILoggedUserInfo;
}

export interface IUsersAssessmentData {
  pending: boolean;
  error: string;
  listOfAssessments: IUserAssessment[];
}

export interface IUserGraphData {
  pending: boolean;
  error: string;
  currentUserGraph: IUserGraph;
}

export interface IListOfUsersData {
  pending: boolean;
  error: string;
  listOfUsers: IUserInfo[];
}

export interface IAuthAppState {
  currentUser: IUserLoginData;
  listOfAssessments: IUsersAssessmentData;
  userGraph: IUserGraphData;
  listOfUsers: IListOfUsersData;
}
