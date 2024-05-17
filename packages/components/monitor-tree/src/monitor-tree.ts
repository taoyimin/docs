import type { ExtractPropTypes, PropType } from "vue";
import type { TreeComponentProps } from "element-plus/es/components/tree/src/tree.type";
import { iconPropType } from "@szxc/utils";

const treeProps = {
  data: {
    type: Array,
    default: () => [],
  },
  emptyText: {
    type: String,
    default: "",
  },
  renderAfterExpand: {
    type: Boolean,
    default: true,
  },
  nodeKey: {
    type: String,
    default: "gridCode",
  },
  checkStrictly: {
    type: Boolean,
    default: true,
  },
  defaultExpandAll: Boolean,
  expandOnClickNode: {
    type: Boolean,
    default: true,
  },
  checkOnClickNode: Boolean,
  checkDescendants: {
    type: Boolean,
    default: false,
  },
  autoExpandParent: {
    type: Boolean,
    default: true,
  },
  defaultCheckedKeys: Array as PropType<
    TreeComponentProps["defaultCheckedKeys"]
  >,
  defaultExpandedKeys: Array as PropType<
    TreeComponentProps["defaultExpandedKeys"]
  >,
  currentNodeKey: [String, Number] as PropType<string | number>,
  renderContent: Function,
  showCheckbox: {
    type: Boolean,
    default: true,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  allowDrag: Function,
  allowDrop: Function,
  props: {
    type: Object as PropType<TreeComponentProps["props"]>,
    default: () => ({
      children: "children",
      label: "gridName",
      disabled: "disabled",
      isLeaf: "isLeaf",
    }),
  },
  lazy: {
    type: Boolean,
    default: true,
  },
  highlightCurrent: Boolean,
  load: Function as PropType<TreeComponentProps["load"]>,
  filterNodeMethod: Function as PropType<
    TreeComponentProps["filterNodeMethod"]
  >,
  accordion: Boolean,
  indent: {
    type: Number,
    default: 18,
  },
  icon: {
    type: iconPropType,
  },
};

export const monitorTreeProps = {
  ...treeProps,
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
};

export type MonitorTreeProps = ExtractPropTypes<typeof monitorTreeProps>;
