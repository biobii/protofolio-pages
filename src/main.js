// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import data from './data'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: data,
  getters: {
    odd (state) {
      let odd = []
      state.works.forEach(work => {
        if (work.id % 2 !== 0)
          odd.push(work)
      })
      return odd
    },
    even (state) {
      let even = []
      state.works.forEach(work => {
        if (work.id % 2 === 0)
          even.push(work)
      })
      return even
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
