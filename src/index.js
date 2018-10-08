import VueKnober from './knober.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-knob', VueKnober);
}
export default VueKnober;