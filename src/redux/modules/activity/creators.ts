import IActivity from "./../../../interfaces/IActivity";

import {
  ACTIVITY_FAILURE,
  ACTIVITY_FETCH,
  ACTIVITY_SUCCESS,
  GithubActionTypes
} from "./types";

export const createActivityFetch = (
  profileName: string
): GithubActionTypes => ({
  profileName,
  type: ACTIVITY_FETCH
});

export const createActivitySuccess = (
  activityList: IActivity[]
): GithubActionTypes => ({
  activityList,
  type: ACTIVITY_SUCCESS
});

export const createActivityFailure = (error: string): GithubActionTypes => ({
  error,
  type: ACTIVITY_FAILURE
});
