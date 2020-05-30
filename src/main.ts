import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavFooter from '@/components/NavFooter.vue'
import Layout from '@/components/Layout.vue'
import icons from '@/components/icons.vue'

Vue.config.productionTip = false

Vue.component('NavFooter', NavFooter)
Vue.component('Layout', Layout)
Vue.component('icons', icons)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
