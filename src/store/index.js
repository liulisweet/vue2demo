import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: sessionStorage.getItem('name')
  },
  getters: {
  },
  mutations: {
    updateUserInfo(state, payload) {
      state.user = payload
      window.sessionStorage.setItem('name', payload)
    },
    //退出登录
    loguot(state) {
      state.user = ''
      window.sessionStorage.removeItem('name')
    }
  },
  actions: {
    //如果需要调用login 需要调用 $store.dispatch('login','zhangsan')
    login(store, payload) {
      store.commit('updateUserInfo', payload)
    }
  },
  modules: {
  }
})
