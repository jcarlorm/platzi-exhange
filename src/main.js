import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/tailwind.css'
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
import { dollarFilter, percentFilter } from '@/filters/numeral'
import router from '@/router'

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
