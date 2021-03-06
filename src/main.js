import 'common/rem'
import Vue from 'vue'
import routes from 'router'
import store from 'store/store'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import { routerMode } from 'common/env'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition }
    }
  }
})

new Vue({
  router,
  store,
}).$mount('#app')
