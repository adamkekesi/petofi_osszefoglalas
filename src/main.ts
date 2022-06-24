import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SuiVue from "semantic-ui-vue";
import "semantic-ui-css/semantic.min.css";
import * as VueGoogleMaps from "vue2-google-maps";
import "./content/events/index";
import PortalVue from "portal-vue";

Vue.config.productionTip = false;
Vue.use(SuiVue as any);
Vue.use(VueGoogleMaps as any, {
  load: {
    key: "",
    libraries: "places,drawing,visualization",
  },
  installComponents: true,
});
Vue.use(PortalVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
