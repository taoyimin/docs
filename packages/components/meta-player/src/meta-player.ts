import type { ExtractPropTypes } from "vue";
import type { MonitorUrl } from "@szxc/apis";

/** 新天翼云眼播放器支持的视频流协议 */
export type MetaPlayerProtocol = "tyyyhls" | "tyyyrtsp";

export const metaPlayerProps = {
  /**
   * @description 监控视频详情
   */
  monitor: {
    type: Object,
    required: true,
  },
  /**
   * @description 播放地址列表
   */
  urls: {
    type: Array<MonitorUrl<MetaPlayerProtocol>>,
    required: true,
  },
};

export const metaPlayerEmits = {
  ["error"]: (errorMessage: string) => {},
};

export type MetaPlayerProps = ExtractPropTypes<typeof metaPlayerProps>;
export type MetaPlayerEmits = typeof metaPlayerEmits;
