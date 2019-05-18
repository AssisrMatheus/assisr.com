import { combineReducers } from "redux";

// Reducers
import { reducer as activity } from "./modules/activity/reducer";
import { reducer as theme } from "./modules/theme/ducks";

const combinedReducers = combineReducers({
  activity,
  theme
});

export type StateType = ReturnType<typeof combinedReducers>;
export default combinedReducers;
