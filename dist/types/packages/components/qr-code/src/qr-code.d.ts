import type { ImageProps as ElImageProps } from 'element-plus';
import type { QRCodeToDataURLOptions } from 'qrcode';
export interface QrCodeProps {
    /**
     * 二维码内容
     */
    content: string;
    /**
     * 二维码大小
     * @defaultValue 100
     */
    size?: number;
    /**
     * 二维码图片参数
     */
    options?: QRCodeToDataURLOptions;
}
/**
 * 二维码组件包含透传属性在内的全部属性
 */
export type QrCodeFullProps = Partial<ElImageProps & QrCodeProps>;
