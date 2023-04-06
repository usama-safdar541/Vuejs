import Vue from "vue";
import App from "./App.vue";
import display from "./components/dIsplay.vue";
import nativeobjs from "./components/nativeobj.vue";
import dynamic from "./components/dynamic.vue";
import conditionals from "./components/conditionals.vue";
Vue.component("conditionals" , conditionals);
Vue.component("dynamic", dynamic);

Vue.component("dIsplay", display);
Vue.component("nativeobj", nativeobjs);
Vue.config.productionTip = false;

new Vue({
  // el:"#app",
  render: (h) => h(App),
}).$mount("#app");
