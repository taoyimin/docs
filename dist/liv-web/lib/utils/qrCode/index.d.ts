import { type QRCodeToDataURLOptions } from 'qrcode';
export interface QrDownloadOption {
    qrContent: string;
    title: string;
}
type QrcodeFn = {
    toDataURL: (content: string, options?: QRCodeToDataURLOptions) => Promise<string>;
    downLoadQRCode: (content: string, fileName?: string, options?: QRCodeToDataURLOptions) => Promise<void>;
};
export declare const qrCode: QrcodeFn;
export {};
