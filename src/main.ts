import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vuesax from 'vuesax';

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/styles/custom.css';

Vue.config.productionTip = false;
Vue.use(Vuesax);

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
