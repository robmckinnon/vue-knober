import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import VueKnober from '../dist/vue-knober.min';

Vue.component('knober', VueKnober);
Vue.config.debug = true;

const app = new Vue({
  render: h => h(App)
}).$mount('#app');