# 监控视频接口

## getMonitorPage

查询监控分页列表。

|参数|说明|类型|
| ----|---- |---- |
|current|当前页| `number` |
|size|每页数据量| `number` |
|deviceName|监控名称| `string` |
|deviceModel|监控厂家| `string` |
|address|设备地址| `string` |
|bind|是否绑定| `string` |
|cameraType|摄像头类型| `string` |
|channelCode|通道号| `string` |
|companyName|公司名称| `string` |
|deviceNo|设备编码| `string` |
|deviceSource|设备来源| `string` |
|deviceType|设备类型| `string` |
|gridCode|网格编码| `string` |
|publicId|公共编号| `string` |
|status|设备状态| `string` |

```ts
import { getMonitorPage } from '@szxc/apis'

const monitors = await getMonitorPage();
```

## getMonitorDetail

查询监控详情。

|参数|说明|类型|
| ----|---- |---- |
|id|监控id| `string` |

```ts
import { getMonitorDetail } from '@szxc/apis'

const monitor = await getMonitorDetail({ id: '123456' });
```

## getMonitorUrl

查询监控详情及播放地址。

|参数|说明|类型|
| ----|---- |---- |
|id|监控id| `string` |

```ts
import { getMonitorUrl } from '@szxc/apis'

const { info, urls, success, errorMessage } = await getMonitorUrl({ id: '123456' });
```

## getMonitorGridList

查询监控网格列表。

|参数|说明|类型|
| ----|---- |---- |
|gridCode|网格编码| `string` |
|deviceModel|设备厂家| `string` |
|deviceType|设备类型| `string` |
|status|在线状态 1：在线 0：离线| `string` |

```ts
import { getMonitorGridList } from '@szxc/apis'

const monitorGrids = await getMonitorGridList({ gridCode: '36' });
```