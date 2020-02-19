import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import common from "./modules/common";
import project from "./modules/project";
import notice from "./modules/notice";
import noticeDetail from "./modules/noticeDetail";
import practical from "./modules/practical";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    common,
    project,
    notice,
    noticeDetail,
    practical
  }
});
