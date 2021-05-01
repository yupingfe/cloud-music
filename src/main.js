import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import {
  Button, Tab, Tabs, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload ,Grid, GridItem, 
  CellGroup,Image as VanImage, List, Cell
} from 'vant';
import ajax from './requests'
Vue.config.productionTip = false

Vue.use(Button).use(Tab).use(Tabs).use(Tabbar)
    .use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload)
    .use(Grid).use(GridItem).use(CellGroup).use(VanImage).use(List).use(Cell)
Vue.prototype.$ajax = ajax


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
