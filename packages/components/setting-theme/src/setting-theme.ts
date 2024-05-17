import type { ExtractPropTypes } from "vue";

export const settingThemeProps = {
  bus: {
    type: Object
  }
};

export type SettingThemeProps = ExtractPropTypes<typeof settingThemeProps>;
