# 事件相关接口

## getEventDetail

获取事件详情。

|参数|说明|类型|
| ----|---- |---- |
|id|事件id| `string` |

```ts
import { getEventDetail } from '@szxc/apis'

const eventDetail = await getEventDetail({ id: '123' })
```

## getEventProcess

获取事件流程。

|参数|说明|类型|
| ----|---- |---- |
|eventId|事件id| `string` |

```ts
import { getEventProcess } from '@szxc/apis'

const eventProcess = await getEventProcess({ eventId: '123' })
```

::: details 类型声明
```ts
export interface Event {
  /** 事件id */
  id: string;
  /** 事件编号 */
  eventNo: string;
  /** 事件类别 */
  typeStr: string;
  /** 所属网格 */
  gridName: string;
  /** 处理网格 */
  dealGridName: string;
  /** 上报时间 */
  addTime: string;
  /** 事件来源 */
  sourceStr: string;
  /** 当前状态 */
  status: string;
  /** 当前状态 */
  statusStr: string;
  /** 超时状态 */
  overTimeStatusStr: string;
  /** 督办情况 */
  superviseFlag: string;
  /** 督办情况 中文 */
  superviseFlagStr: string;
  /** 归档情况 */
  archiveFlag: string;
  /** 归档情况 中文 */
  archiveFlagStr: string;
  /** 所属网格 */
  gridId?: string;
  /** 地点位置 */
  location?: Location;
  /** 地点位置 */
  longitude?: number | string;
  /** 地点位置 */
  latitude?: number | string;
}

export interface EventProgress {
  /** 流程id */
  id: string;
  /** 事件id */
  eventId: string;
  /** 详细描述 */
  desc: string;
  /** 图片地址 */
  imageUrl: string;
  /** 流程类型 字典 */
  dealType: string;
  /** 流程类型 中文 */
  dealTypeName: string;
  /** 流程时间 */
  dealTime: string;
  /** 流程人 */
  realName: string;
  /** 积分列表 */
  eventPointList?: any;
  /** 流转网格 */
  roamGridName: string;
  /** 流程人网格 */
  userGridName: string;
  /** 处理类型 */
  dealResultName: string;
  /** 耗时 */
  timeConsume: string;
  /** 被指派人名称 */
  appointUserName: string;
  /** 催办网格 */
  superviseRemindGridName: string;
  /** 评价类型 */
  evaluateTypeName: string;
}
```
:::