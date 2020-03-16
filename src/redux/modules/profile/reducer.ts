import { createReducer } from "redux-starter-kit";

export interface IActivityState {
  profile: IActivity[];
}

// Reducer
const initialState: IActivityState = {
  profile: {},
  fetching: true
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
