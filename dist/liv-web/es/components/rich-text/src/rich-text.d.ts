import type { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import type { CSSProperties } from 'vue';
export type RichTextToolBarProps = {
    /**
     * 工具栏模式
     * @defaultValue 'default'
     */
    mode?: 'default' | 'simple';
    /**
     * 工具栏样式
     */
    style?: string | CSSProperties;
    /**
     * 工具栏默认配置
     * @see https://www.wangeditor.com/v5/toolbar-config.html
     */
    defaultConfig?: Partial<IToolbarConfig>;
};
export interface RichTextEditorProps {
    /**
     * 编辑器模式
     * @defaultValue 'default'
     */
    mode?: 'default' | 'simple';
    /**
     * 编辑器样式
     */
    style?: string | CSSProperties;
    /**
     * 编辑器默认配置
     * @see https://www.wangeditor.com/v5/editor-config.html
     */
    defaultConfig?: Partial<IEditorConfig>;
}
/**
 * 富文本组件属性
 */
export interface RichTextProps {
    /**
     * 工具栏配置
     * @remarks 可以通过该属性配置富文本的工具栏
     * @see https://www.wangeditor.com/v5/for-frame.html#%E4%BD%BF%E7%94%A8-1
     */
    toolbar?: RichTextToolBarProps;
    /**
     * 编辑器配置
     * @remarks 可以通过该属性配置富文本的编辑器
     * @see https://www.wangeditor.com/v5/for-frame.html#%E4%BD%BF%E7%94%A8-1
     */
    editor?: RichTextEditorProps;
}
