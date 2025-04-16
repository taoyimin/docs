import { vRemove } from './src/directive/index.mjs';

const LivRemove = {
  install(app) {
    app.directive("remove", vRemove);
  },
  directive: vRemove
};

export { LivRemove, vRemove as LivRemoveDirective, LivRemove as default, vRemove };
//# sourceMappingURL=index.mjs.map
