import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.use(VueAxios, axios)

//引入moment
import moment from 'moment';
Vue.prototype.moment = moment

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
