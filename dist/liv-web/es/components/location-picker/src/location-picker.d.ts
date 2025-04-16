import type { AMapProps } from '../../a-map';
import LocationPicker from './location-picker.vue';
/**
 * 位置选择器组件属性
 */
export interface LocationPickerProps extends AMapProps {
    /**
     * 坐标系类型
     * @defaultValue 'gcj02'
     */
    type?: 'gcj02' | 'wgs84';
}
/**
 * 位置选择器组件事件
 */
export type LocationPickerEmits = {
    change: [location: [number | null, number | null]];
    confirm: [location: [number, number]];
};
/**
 * 位置选择器组件实例
 */
export type LocationPickerInstance = InstanceType<typeof LocationPicker>;
