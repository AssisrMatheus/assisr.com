import IActivity from "./../../../interfaces/IActivity";
import {
  ACTIVITY_FAILURE,
  ACTIVITY_FETCH,
  ACTIVITY_SUCCESS,
  GithubActionTypes
} from "./types";

export interface IGithubState {
  activityList: IActivity[];
  error: string | undefined;
  fetching: boolean;
}

// Reducer
const initialState: IGithubState = {
  activityList: [],
  error: undefined,
  fetching: false
};

export const reducer = (
  state = initialState,
  action: GithubActionTypes
): IGithubState => {
  switch (action.type) {
    case ACTIVITY_FETCH:
      return {
        ...state,
        fetching: true
      };
    case ACTIVITY_SUCCESS:
      return {
        ...state,
        activityList: action.activityList,
        error: undefined,
        fetching: false
      };
    case ACTIVITY_FAILURE:
      return {
        ...state,
        activityList: [],
        error: action.error,
        fetching: false
      };
    default:
      return state;
  }
};
