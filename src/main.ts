import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './fui';
import 'normalize.css';
import './assets/md-theme/vue.css';
import './assets/docs-theme/index.css';
import './assets/styles/common.scss';

// 注册全局的组件
import components from '@/components';
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
