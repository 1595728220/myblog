import axios from "axios";
const state = {
  requireUrl: "/api/practical/list",
  loading: false,
  practicalList: [],
  limitQuery: {
    query: "",
    keyword: ""
  },
  keywords: []
};

// getters
const getters = {
  searchQuery(state: any) {
    return state.limitQuery.query;
  }
};
// actions
const actions = {
  requireMypractical({ state, commit }: any) {
    if (state.practicalList.length === 0) {
      commit("updateLoading", true);
    }
    axios
      .post(state.requireUrl, state.limitQuery)
      .then((res: any) => {
        commit("updateLoading", false);
        let data = res.data;
        commit("updatePracticalList", data.list);
        commit("updateKeywords", data.keywords);
        commit("updateSearchQuery", "");
      })
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.error(err.message);
        commit("updateLoading", false);
      });
  }
};

// mutations
const mutations = {
  updateLoading(state: any, value: boolean) {
    state.loading = value;
  },
  updatePracticalList(state: any, list: Array<any>) {
    state.practicalList = list;
  },
  updateKeywords(state: any, value: Array<string>) {
    state.keywords = value;
  },
  updateSearchQuery(state: any, value: string) {
    state.limitQuery.query = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
