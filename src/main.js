import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Row, Col, Button } from 'vant'
Vue.use(Row).use(Col).use(Button)

function Responsive(resolution) {
  let w = document.documentElement.clientWidth || document.body.clientWidth
  if (w > 750) w = 750
	document.documentElement.style.fontSize = w / resolution + 'px';
}

Responsive(7.5)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
