// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import data from './data'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex)

const store = new Vuex.Store({
  state: data,
  getters: {
    works (state) {
      return state.works
    },
    detail (state) {
      return slug => state.works.find(work => {
        return work.slug === slug
      })
    },
    activities (state) {
      return state.activities
    },
    posts (state) {
      return state.posts 
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
