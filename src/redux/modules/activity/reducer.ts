import { createReducer } from "redux-starter-kit";

import IActivity from "./../../../interfaces/IActivity";

import {
  ACTIVITY_FAILURE,
  ACTIVITY_FETCH,
  ACTIVITY_FETCH_FINISH,
  ACTIVITY_SUCCESS,
  IActivityFailureAction,
  IActivitySuccessAction
} from "./actionTypes";

export interface IActivityState {
  activityList: IActivity[];
  error: string[];
  fetching: boolean;
}

// Reducer
const initialState: IActivityState = {
  activityList: [],
  error: [],
  fetching: false
};

export const reducer = createReducer(initialState, {
  [ACTIVITY_FETCH]: (state: IActivityState) => {
    state.fetching = true;
  },
  [ACTIVITY_SUCCESS]: (
    state: IActivityState,
    action: IActivitySuccessAction
  ) => {
    state.activityList = state.activityList
      .concat(action.list)
      .sort((a: any, b: any) => {
        return a.timestamp > b.timestamp ? -1 : 1;
      });
    state.error = initialState.error;
  },
  [ACTIVITY_FAILURE]: (
    state: IActivityState,
    action: IActivityFailureAction
  ) => {
    state.fetching = false;
    if (action.error) {
      state.error.push(action.error);
    }
  },
  [ACTIVITY_FETCH_FINISH]: (state: IActivityState) => {
    state.fetching = false;
  }
});
