import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ViewUI from "view-design";

// 单独引入message组件
import { Message } from "view-design";

// 公共方法
import baseMethod from "./global/baseMethod";
// import "view-design/dist/styles/iview.css";
// import "../my-theme/dist/iview.css";
import "view-design/dist/styles/iview.css";

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
    $axios: any;
    $message: any;
  }
}

Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
const SUCCESS_CODE = 200;
// 添加一个响应拦截器
axios.interceptors.response.use(
  response => {
    let err = { message: "" };
    let data = response.data;
    // 如果是直接返回的数据，没有状态码
    if (data.code === undefined) {
      return response;
    }
    switch (data.code) {
      // 成功
      case SUCCESS_CODE:
        return response;
      // 其他错误
      default:
        err.message = data.message;
        Vue.prototype.$message.error(err.message);
        return Promise.reject(err);
    }
  },
  err => {
    // eslint-disable-next-line no-console
    console.log(err.response);
    if (err && err.response && err.response.data && err.response.data.msg) {
      err.message = err.response.data.msg;
    } else {
      err.message = "请求超时";
    }
    Vue.prototype.$message.error(err.message);
    return Promise.reject(err);
  }
);
Vue.use(ViewUI);
Vue.use(baseMethod);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
