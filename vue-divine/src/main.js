import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App'

Vue.use(VueResource);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
