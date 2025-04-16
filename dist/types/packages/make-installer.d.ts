import type { App, Plugin } from 'vue';
export declare const makeInstaller: (components?: Plugin[]) => {
    version: string;
    install: (app: App) => void;
};
