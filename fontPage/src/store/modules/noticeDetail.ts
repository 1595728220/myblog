import axios from "axios";
const state = {
  requireUrl: "/api/notice/detail",
  loading: false,
  noticeDetail: {},
  updateCatalog: []
};

// getters
const getters = {};
// actions
const actions = {
  requireNoticeDetail({ commit, state }: any, value: number | string) {
    commit("updateLoading", true);
    axios
      .get(`${state.requireUrl}?nid=${value}`)
      .then(res => {
        commit("updateLoading", false);
        let data = res.data;
        commit("updateNoticeDetail", data.noticeDetail);
        commit("updateCatalog", data.catalog);
      })
      .catch(err => {
        commit("updateLoading", false);
        // eslint-disable-next-line no-console
        console.error(err.message);
      });
  }
};

// mutations
const mutations = {
  updateLoading(state: any, value: boolean) {
    state.loading = value;
  },
  updateNoticeDetail(state: any, value: string) {
    state.noticeDetail = value;
  },
  updateCatalog(state: any, value: string) {
    state.catalog = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
