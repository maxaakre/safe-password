import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


const VueCookie = require('vue-cookie');

// Tell Vue to use the plugin
Vue.use(VueCookie);


Vue.config.productionTip = false;

new Vue({
  created() {
    const loggedIn = sessionStorage.getItem("users");
    if (loggedIn) {
      store.commit("auth", JSON.parse(loggedIn));
    }
  },
 
  
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
