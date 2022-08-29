import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//简单粗暴 直接增加
import axios from 'axios';
// Vue.prototype.axios = axios 

//优雅规范 依赖模块vue-axios
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)

//引入ElementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//use vue提供的挂载第三方模块的方法
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
