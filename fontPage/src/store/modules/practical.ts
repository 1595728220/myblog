import axios from "axios";
const state = {
  requireMypracticalUrl: "/api/practical/list",
  requireAddJumpTimesUrl: "/api/practical/visit",
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
  },
  filterPracticalList(state: any) {
    let checkedKeywords = state.keywords
      .filter((el: any) => el.checked)
      .map((el: any) => el.keyword);
    return state.practicalList.filter((el: any) =>
      checkedKeywords.includes(el.keywords)
    );
  }
};
// actions
const actions = {
  requireMypractical({ state, commit }: any) {
    if (state.practicalList.length === 0) {
      commit("updateLoading", true);
    }
    axios
      .post(state.requireMypracticalUrl, state.limitQuery)
      .then((res: any) => {
        commit("updateLoading", false);
        let data = res.data;
        commit("updatePracticalList", data.list);
        commit(
          "updateKeywords",
          data.keywords.map((el: string) => {
            return { keyword: el, checked: true };
          })
        );
      })
      .catch((err: any) => {
        // eslint-disable-next-line no-console
        console.error(err.message);
        commit("updateLoading", false);
      });
  },
  requireAddJumpTimes({ state, dispatch }: any, pid: string | number) {
    axios
      .put(state.requireAddJumpTimesUrl, { pid })
      .then((res: any) => {
        dispatch("requireMypractical");
      })
      .catch((err: any) => {
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
  updatePracticalList(state: any, list: Array<any>) {
    state.practicalList = list;
  },
  updateKeywords(state: any, value: Array<string>) {
    state.keywords = value;
  },
  updateSearchQuery(state: any, value: string) {
    state.limitQuery.query = value;
  },
  updateKeyword(state: any, { index, checked }: any) {
    state.keywords[index].checked = checked;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
