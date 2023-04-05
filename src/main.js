import Vue from 'vue'
import App from './App.vue'
import display from './components/dIsplay.vue'
Vue.component('dIsplay', display);
Vue.config.productionTip = false;

new Vue({
  // el:"#app",
  render: h => h(App),
}).$mount('#app')
