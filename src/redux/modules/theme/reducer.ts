import { createReducer } from "redux-starter-kit";

import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  IChangeLanguageAction,
  IChangeThemeAction
} from "./actionTypes";

export interface IThemeState {
  theme: IChangeThemeAction["theme"];
  language: IChangeLanguageAction["languageCode"];
}

const browserLanguage =
  window.navigator.languages[window.navigator.languages.length - 1] || "en";

console.log(`Loaded language: ${browserLanguage}`);

// Reducer
const initialState: IThemeState = {
  language: browserLanguage,
  theme: "default"
};

export const reducer = createReducer(initialState, {
  [CHANGE_THEME]: (state: IThemeState) => {
    state.theme = state.theme === "nes" ? "default" : "nes";
  },
  [CHANGE_LANGUAGE]: (state: IThemeState) => {
    state.language = state.language === "en" ? "pt" : "en";
  }
});
