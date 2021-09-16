import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./components/Mixin";
import axios from "axios";
// import $ from 'jquery';
// window.$ = $;
//import comjs from '../../public/front_js/scripts.js'
//import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

//Vue.use(example_test);
//Vue.prototype.$comjs = comjs;  
Vue.prototype.$axios = axios ;


Vue.mixin(mixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#front-app");
