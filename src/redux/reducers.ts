import { combineReducers } from "redux";

import { reducer as activity } from "./modules/activity/reducer";
import { reducer as theme } from "./modules/theme/reducer";

const combinedReducers = combineReducers({
  activity,
  theme
});

export default combinedReducers;

export type AppState = ReturnType<typeof combinedReducers>;
