import { CHANGE_THEME, IChangeThemeAction } from "./actionTypes";

export const doChangeTheme = (
  theme: IChangeThemeAction["theme"]
): IChangeThemeAction => ({
  theme,
  type: CHANGE_THEME
});
