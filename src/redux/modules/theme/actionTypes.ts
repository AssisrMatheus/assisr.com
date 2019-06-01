// Types
export const CHANGE_THEME = "theme/CHANGE_THEME";
export const CHANGE_LANGUAGE = "theme/CHANGE_LANGUAGE";

export interface IChangeThemeAction {
  type: typeof CHANGE_THEME;
  theme: "default" | "nes";
}

export interface IChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  languageCode: "en" | "pt" | string;
}
