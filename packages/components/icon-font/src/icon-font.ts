import type { ExtractPropTypes } from "vue";

export const iconFontProps = {
  name: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 16
  }
  // prefix: {
  //   type: String,
  //   default: ""
  // }
};

export type IconFontProps = ExtractPropTypes<typeof iconFontProps>;
