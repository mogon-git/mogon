// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import store from './store/store'



Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
/* eslint-disable no-new */

Vue.directive('changeColor', function (el, binding) {
  el.style.color = '#' + Math.random().toString(16).slice(2, 8);
})

// router.beforeEach((to, from, next) => {
//   console.log(to.name)
//   if (to.name != '/') {
//     next('/')
//   } else {
//     next()
//   }
// })
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
