// Actions
export const CHANGE_LANGUAGE = "theme/CHANGE_LANGUAGE";

export interface IChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  languageCode: "en-US" | "pt-BR" | string;
}

export const doChangeLanguage = (
  languageCode: IChangeLanguageAction["languageCode"]
): IChangeLanguageAction => ({
  languageCode,
  type: CHANGE_LANGUAGE
});

export const CHANGE_THEME = "theme/CHANGE_THEME";

export interface IChangeThemeAction {
  type: typeof CHANGE_THEME;
  themeCode: "default" | "nes";
}

export const doChangeTheme = (
  themeCode: IChangeThemeAction["themeCode"]
): IChangeThemeAction => ({
  themeCode,
  type: CHANGE_THEME
});

// State
export interface IThemeState {
  currentLanguage: IChangeLanguageAction["languageCode"];
  currentTheme: IChangeThemeAction["themeCode"];
}

const initialState: IThemeState = {
  currentLanguage: window.navigator.language,
  currentTheme: "default"
};

// Typings
export type ThemeActionTypes = IChangeLanguageAction | IChangeThemeAction;

// Reducer
export const reducer = (
  state = initialState,
  action: ThemeActionTypes
): IThemeState => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.languageCode
      };
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.themeCode
      };
    default:
      return state;
  }
};
