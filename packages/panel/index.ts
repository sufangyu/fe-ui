import { VueConstructor } from 'vue';
import Panel from './src/index.vue';

export default {
  ...Panel,
  install(Vue: VueConstructor) {
    Vue.component(Panel.name, Panel);
  }
};
