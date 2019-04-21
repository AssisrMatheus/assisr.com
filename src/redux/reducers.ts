import { combineReducers } from "redux";

import { reducer as activity } from "./modules/activity/reducer";

const combinedReducers = combineReducers({
  activity
});

export default combinedReducers;

export type AppState = ReturnType<typeof combinedReducers>;
