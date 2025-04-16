import { vAuthority } from './src/directive';
import type { App } from 'vue';
export declare const LivAuthority: {
    install(app: App): void;
    directive: import("vue").ObjectDirective<any, any, string, string>;
};
export default LivAuthority;
export { vAuthority, vAuthority as LivAuthorityDirective };
