import { createReducer } from "redux-starter-kit";

import { CHANGE_THEME, IChangeThemeAction } from "./actionTypes";

export interface IThemeState {
  theme: IChangeThemeAction["theme"];
}

// Reducer
const initialState: IThemeState = {
  theme: "default"
};

export const reducer = createReducer(initialState, {
  [CHANGE_THEME]: (state: IThemeState) => {
    state.theme = state.theme === "nes" ? "default" : "nes";
  }
});
