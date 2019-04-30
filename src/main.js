import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { store } from "./store/store";
import VueRouter from "vue-router";

Vue.use(VueRouter);

library.add(faCoffee);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store: store,
  el: "#app",
  components: { App },
  template: "<App/>"
});
