import type { ExtractPropTypes, PropType } from "vue";

export interface SplitOption {
  label: string;
  row: number;
  column: number;
}

export const monitorWallProps = {
  /**
   * @description 是否显示控制器
   */
  controls: Boolean,
  /**
   * @description 根据网格编码查询
   */
  gridCode: String,
  /**
   * @description 根据监控厂家查询
   */
  deviceModel: String,
  /**
   * @description 根据监控类型查询
   */
  deviceType: String,
  /**
   * @description 根据在线状态查询 1：在线 0：离线
   */
  status: String,
  /**
   * @description 行和列之间的间隔
   */
  gap: {
    type: Number,
    default: 10,
  },
  /**
   * @description 分屏配置
   */
  splitOptions: {
    type: Object as PropType<SplitOption[]>,
    default: () => [
      {
        label: "一屏",
        row: 1,
        column: 1,
      },
      {
        label: "四分屏",
        row: 2,
        column: 2,
      },
      {
        label: "九分屏",
        row: 3,
        column: 3,
      },
    ],
  },
};

export type MonitorWallProps = ExtractPropTypes<typeof monitorWallProps>;
