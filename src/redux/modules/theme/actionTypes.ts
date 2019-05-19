// Types
export const CHANGE_THEME = "theme/CHANGE_THEME";

export interface IChangeThemeAction {
  type: typeof CHANGE_THEME;
  theme: "default" | "nes";
}
