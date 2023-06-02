import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store: store,
  render: function (h) { return h(App) },
}).$mount('#app')
