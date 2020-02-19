import axios from "axios";
const state = {
  requireUrl:
    "https://api.github.com/users/1595728220/repos?sort=updated&direction=desc&visibility=all",
  loading: false,
  projectList: []
};

// getters
const getters = {};
// actions
const actions = {
  requireMyProject({ state, commit }: any) {
    if (state.projectList.length === 0) {
      commit("updateLoading", true);
    }
    axios
      .get(state.requireUrl)
      .then((res: any) => {
        commit("updateLoading", false);
        commit("updateProjectList", res.data);
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
  updateProjectList(state: any, list: Array<any>) {
    state.projectList = list;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
