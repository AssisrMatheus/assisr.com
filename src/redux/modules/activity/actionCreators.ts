import IActivity from "./../../../interfaces/IActivity";

import {
  ACTIVITY_FAILURE,
  ACTIVITY_FETCH,
  ACTIVITY_FETCH_FINISH,
  ACTIVITY_SUCCESS,
  IActivityFailureAction,
  IActivityFetchAction,
  IActivityFetchFinishAction,
  IActivitySuccessAction
} from "./actionTypes";

export const doActivityFetch = (
  githubProfileName: string,
  youtubeChannelId: string,
  beatSaberUserId: string
): IActivityFetchAction => ({
  beatSaberUserId,
  githubProfileName,
  type: ACTIVITY_FETCH,
  youtubeChannelId
});

export const doActivitySuccess = (
  list: IActivity[]
): IActivitySuccessAction => ({
  list,
  type: ACTIVITY_SUCCESS
});

export const doActivityFailure = (error: string): IActivityFailureAction => ({
  error,
  type: ACTIVITY_FAILURE
});

export const doActivityFetchFinish = (): IActivityFetchFinishAction => ({
  type: ACTIVITY_FETCH_FINISH
});
