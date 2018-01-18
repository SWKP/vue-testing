import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App'

import 'vue-smooth-picker/dist/css/style.css'
import SmoothPicker from 'vue-smooth-picker'
Vue.use(SmoothPicker);

Vue.use(VueResource);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
