export declare const LivDataDescriptions: import("liv-web/es/utils").SFCWithInstall<(<T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    attrs: any;
    slots: Partial<Record<string, (_: {
        data: T | undefined;
    }) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {};
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        data?: T | Promise<T> | undefined;
        fields: import("./src/data-descriptions").DataDescriptionsFields<T>;
    } & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Partial<Record<string, (_: {
        data: T | undefined;
    }) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {};
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
})> & Record<string, any>;
export default LivDataDescriptions;
export * from './src/data-descriptions';
