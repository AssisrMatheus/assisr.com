import IActivity from "./../../../interfaces/IActivity";

export interface IActivityFetchAction {
  type: typeof ACTIVITY_FETCH;
  profileName: string;
}

export interface IActivitySuccessAction {
  type: typeof ACTIVITY_SUCCESS;
  activityList: IActivity[];
}

export interface IActivityFailureAction {
  type: typeof ACTIVITY_FAILURE;
  error: string | undefined;
}

export type GithubActionTypes =
  | IActivityFetchAction
  | IActivitySuccessAction
  | IActivityFailureAction;

// Types
export const ACTIVITY_FETCH = "github/ACTIVITY_FETCH";
export const ACTIVITY_SUCCESS = "github/ACTIVITY_SUCCESS";
export const ACTIVITY_FAILURE = "github/ACTIVITY_FAILURE";
