import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";

// 公共方法
import baseMethod from "./global/baseMethod";
// import "view-design/dist/styles/iview.css";
import "../my-theme/dist/iview.css";

declare module "vue/types/vue" {
  interface Vue {
    $isEmpty: any;
    $replaceAllStr: any;
    $getListValue: any;
    $regSpecial: any;
    $removal: any;
    $monthCalcDay: any;
    $dateEqual: any;
    $tagTime: any;
    $debounce: any;
    $displace: any;
    $deleteIndexOfArray: any;
    $splicing: any;
  }
}

Vue.use(ViewUI);
Vue.use(baseMethod);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
