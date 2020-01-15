import axios from "axios";
const state = {
  requireUrl: "/api/notice/list",
  loading: false,
  limitQuery: {
    query: "",
    keyword: ""
  },
  keywords: [],
  tableData: [],
  total: 0
};

// getters
const getters = {
  classifyList({ keywords }: any) {
    let classList = keywords.map((el: any) => {
      return el.keywords.split(",");
    });
    classList = classList.flat();
    let setList = Array.from(new Set(classList)),
      classObj: any = {};
    setList.forEach(key => {
      classObj[<string>key] = classList.filter((el: any) => el === key).length;
    });
    return classObj;
  },
  totalClass(state: any, getters: any) {
    return state.total;
  },
  selectKeywords(state: any) {
    return state.limitQuery.keyword;
  }
};
// actions
const actions = {
  loadTable({ commit, state }: any) {
    axios
      .post(state.requireUrl, state.limitQuery)
      .then(res => {
        let data = res.data;
        commit("updateTableData", data.list);
        commit("updateKeywords", data.keywords);
        commit("updateTotal", data.total);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err.message);
      });
  },
  handleKeywordsChange({ commit, dispatch }: any, value: any) {
    commit("updateKeyword", value);
    dispatch("loadTable");
  }
};

// mutations
const mutations = {
  updateTableData(state: any, value: boolean) {
    state.tableData = value;
  },
  updateKeywords(state: any, value: boolean) {
    state.keywords = value;
  },
  updateKeyword(state: any, value: boolean) {
    state.limitQuery.keyword = value;
  },
  updateTotal(state: any, value: boolean) {
    state.total = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
