import VueKnober from './knober.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-knober', VueKnober);
}
export default VueKnober;