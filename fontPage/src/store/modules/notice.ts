import axios from "axios";
import { Message } from "view-design";
const state = {
  requireUrl: "/api/notice/list",
  loading: false,
  limitQuery: {
    pageNum: 1,
    pageSize: 15,
    query: ""
  },
  total: 0,
  tableData: []
};

// getters
const getters = {};
// actions
const actions = {
  loadTable({ commit, state }: any) {
    axios
      .post(state.requireUrl, state.limitQuery)
      .then(res => {
        let data = res.data;
        commit("updateTableData", data.list);
        commit("updateTotal", data.total);
      })
      .catch(err => {
        Message.error(err.message);
      });
  }
};

// mutations
const mutations = {
  updateTableData(state: any, value: boolean) {
    state.tableData = value;
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
