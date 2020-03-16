import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'assets/reset.css'
import 'assets/xima.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/swiper.css'
import 'assets/detail.css'
import 'assets/play.css'
import 'assets/play1.css'
import 'assets/searchD.css'
import 'assets/category.css'
import 'assets/category2.css'
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')

Vue.use(  VueAwesomeSwiper)