import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Button, Tab, Tabs, Tabbar, TabbarItem } from 'vant';

Vue.config.productionTip = false

Vue.use(Button).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
