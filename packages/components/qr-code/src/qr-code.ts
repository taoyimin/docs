import type { ExtractPropTypes } from "vue";

export const qrCodeProps = {
  content: {
    type: String,
    default: ""
  },
  options: {
    type: Object,
    default: {}
  },
  size: {
    type: Number,
    default: 100
  },
  previewTeleported: {
    type: Boolean,
    default: true
  }
};

export type QrCodeProps = ExtractPropTypes<typeof qrCodeProps>;
