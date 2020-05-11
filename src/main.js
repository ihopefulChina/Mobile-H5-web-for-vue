import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import touch from 'vue-directive-touch';
Vue.use(touch);

// import Loading from '@/components/Loading'
// Vue.component('Loading', Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");