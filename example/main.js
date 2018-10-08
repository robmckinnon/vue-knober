import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import VueKnober from '../src';

Vue.component('knober', VueKnober);
Vue.config.debug = true;

const app = new Vue({
  render: h => h(App)
}).$mount('#app');