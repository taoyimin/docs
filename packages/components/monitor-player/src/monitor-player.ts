import type { ExtractPropTypes, PropType } from "vue";
import type { XgPlayerProtocol, XgPlayerNetworkOptions } from "../../xg-player";
import type { MetaPlayerProtocol } from "../../meta-player";

/** 视频流协议 */
export type MonitorProtocol =
  | XgPlayerProtocol
  | TianYiPlayerProtocol
  | JSMpegPlayerProtocol
  | MetaPlayerProtocol;

/** 老天翼播放器支持的视频流协议 */
export type TianYiPlayerProtocol = "httpFlv";

/** JSMpeg播放器支持的视频流协议 */
export type JSMpegPlayerProtocol = "rtsp";

export const monitorPlayerProps = {
  /**
   * @description 监控视频id
   */
  id: {
    type: String,
    required: true,
  },
  /**
   * @description 播放器网络配置
   */
  networkOptions: Object as PropType<XgPlayerNetworkOptions>,
};

export type MonitorPlayerProps = ExtractPropTypes<typeof monitorPlayerProps>;
