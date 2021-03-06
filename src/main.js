// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/poka.js'
import '@/assets/MaterialSlider.css'
import '@/assets/icon_outline.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

import * as PokaComponents from './poka-component.js'
Object.values(PokaComponents).forEach(PokaComponents => Vue.component(PokaComponents.name, PokaComponents))

Vue.material.theming.theme = window._setting('darkMode') ? "default-dark" : "default"
window._theme = {
  switchToDark() {
    Vue.material.theming.theme = "default-dark";
    window._setting('darkMode', true)
  },
  switchToLight() {
    Vue.material.theming.theme = "default";
    window._setting('darkMode', false)
  }
}

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})