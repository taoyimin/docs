import AMap from './a-map.vue';
import { load } from '@amap/amap-jsapi-loader';
/**
 * 高德地图组件属性
 */
export interface AMapProps {
    /**
     * 加载配置
     */
    loadOptions?: Partial<Parameters<typeof load>[0]>;
    /**
     * 地图配置
     */
    mapOptions?: AMap.MapOptions | {
        layers: AMapLayer[] | AMapLayersCreate;
    };
    /**
     * 地图图层
     */
    layers?: AMapLayer[];
    /**
     * 是否显示图层控制按钮
     */
    layersControl?: boolean;
    /**
     * 图层控制按钮
     */
    layersButtons?: AMapLayerButton[];
}
/**
 * 图层类型
 */
export type AMapLayerType = 'default' | 'satellite' | 'roadNet' | 'traffic';
/**
 * 图层
 */
export type AMapLayer = AMapLayerType | (Required<AMap.MapOptions>['layers'][number] & {
    map: AMap.Map;
});
/**
 * 图层按钮
 */
export interface AMapLayerButton {
    name: string;
    image?: string;
    layers: AMapLayer[];
}
/**
 * 图层创建方法
 */
export type AMapLayersCreate = (AMap: AMap.NameSpace) => AMapLayer[];
/**
 * 组件事件
 */
export interface AMapEmits {
    (e: 'loaded', map: AMap.Map, AMap: AMap.NameSpace, Loca: any): void;
}
/**
 * 组件实例
 */
export type AMapInstance = InstanceType<typeof AMap>;
