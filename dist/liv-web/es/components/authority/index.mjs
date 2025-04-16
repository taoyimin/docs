import { vAuthority } from './src/directive/index.mjs';

const LivAuthority = {
  install(app) {
    app.directive("authority", vAuthority);
  },
  directive: vAuthority
};

export { LivAuthority, vAuthority as LivAuthorityDirective, LivAuthority as default, vAuthority };
//# sourceMappingURL=index.mjs.map
