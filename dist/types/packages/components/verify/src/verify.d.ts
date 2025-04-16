import Verify from './verify.vue';
/**
 * 验证码类型
 * @remarks blockPuzzle:方块拼图 clickWord:点击文字
 */
export type VerifyType = 'blockPuzzle' | 'clickWord';
/**
 * 验证码模式
 * @remarks pop:弹出式 fixed:固定式
 */
export type VerifyMode = 'pop' | 'fixed';
/**
 * 获取验证码/校验验证码接口请求数据类型
 */
export interface VerifyReqData {
    captchaType: VerifyType;
    pointJson: string;
    token: string;
}
/**
 * 获取验证码/校验验证码接口返回数据类型
 */
export interface VerifyRepData {
    captchaType: VerifyType;
    jigsawImageBase64: string;
    originalImageBase64: string;
    pointJson: string;
    result: boolean;
    secretKey: string;
    token: string;
}
/**
 * 验证码组件属性
 */
export interface VerifyProps {
    /**
     * 获取验证码方法
     * @param data 请求参数
     * @returns 获取验证码的Promise
     */
    get?: (data: VerifyReqData) => Promise<VerifyRepData>;
    /**
     * 校验验证码方法
     * @param data 请求参数
     * @returns 校验验证码的Promise
     */
    check?: (data: VerifyReqData) => Promise<VerifyRepData>;
    /**
     * 验证码类型
     * @remarks blockPuzzle:滑块拼图 clickWord:点击文字
     * @defaultValue 'blockPuzzle'
     */
    type?: VerifyType;
    /**
     * 验证码的显示方式
     * @remarks pop:弹出式 fixed:固定式
     * @defaultValue 'pop'
     */
    mode?: VerifyMode;
    /**
     * 验证码图片和移动条容器的间隔，默认单位是px
     * @defaultValue 5
     */
    vSpace?: number;
    /**
     * 滑动条内的提示，仅当type为blockPuzzle时生效
     * @defaultValue '向右滑动完成验证'
     */
    explain?: string;
    /**
     * 验证码图片大小，其中包含了width、height两个参数，分别代表图片的宽度和高度
     * @defaultValue { width: '310px', height: '155px' }
     */
    imgSize?: {
        width: string;
        height: string;
    };
}
/**
 * 验证结果
 */
export interface VerifyResult {
    captchaVerification: string;
}
/**
 * 验证码组件事件
 */
export type VerifyEmits = {
    /**
     * 验证码生成完毕
     */
    ready: [instance: any];
    /**
     * 验证成功
     */
    success: [result: VerifyResult];
};
/**
 * 验证码组件实例
 */
export type VerifyInstance = InstanceType<typeof Verify>;
