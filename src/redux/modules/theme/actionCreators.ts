import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  IChangeLanguageAction,
  IChangeThemeAction
} from "./actionTypes";

export const doChangeTheme = (
  theme: IChangeThemeAction["theme"]
): IChangeThemeAction => ({
  theme,
  type: CHANGE_THEME
});

export const doChangeLanguage = (
  languageCode: IChangeLanguageAction["languageCode"]
): IChangeLanguageAction => ({
  languageCode,
  type: CHANGE_LANGUAGE
});
