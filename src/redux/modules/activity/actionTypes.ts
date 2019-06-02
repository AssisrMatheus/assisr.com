import IActivity from "./../../../interfaces/IActivity";

// Types
export const ACTIVITY_FETCH = "activity/ACTIVITY_FETCH";
export const ACTIVITY_SUCCESS = "activity/ACTIVITY_SUCCESS";
export const ACTIVITY_FAILURE = "activity/ACTIVITY_FAILURE";
export const ACTIVITY_FETCH_FINISH = "activity/ACTIVITY_FETCH_FINISH";

export interface IActivityFetchAction {
  type: typeof ACTIVITY_FETCH;
  beatSaberUserId: string;
  githubProfileName: string;
  youtubeChannelId: string;
}

export interface IActivitySuccessAction {
  type: typeof ACTIVITY_SUCCESS;
  list: IActivity[];
}

export interface IActivityFailureAction {
  type: typeof ACTIVITY_FAILURE;
  error: string | undefined;
}

export interface IActivityFetchFinishAction {
  type: typeof ACTIVITY_FETCH_FINISH;
}
