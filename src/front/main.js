import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./components/Mixin";
import axios from "axios";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import "bootstrap/dist/css/bootstrap.css";
//import "../../public/front_css/styles.css";
//Vue.use(example_test);
//Vue.prototype.$comjs = comjs;
Vue.prototype.$axios = axios;
Vue.use(VueSweetalert2);
Vue.mixin(mixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#front-app");
