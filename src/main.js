import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

if ( process.env.NODE_ENV === 'development' ) {
  // axios.defaults.baseURL="http://localhost:8888";
  axios.defaults.baseURL="http://localhost:3000";
} else {
  axios.defaults.baseURL="";
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
