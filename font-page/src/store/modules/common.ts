const state = {
  mainAreaScrollTop: 0
};

// getters
const getters = {
  getMainAreaScrollTop(state: any) {
    return state.mainAreaScrollTop;
  }
};
// actions
const actions = {
  /**
   *
   * @param param0 context对象
   * @param param1 参数对象，value:滚动的目标高度，scrollDuration:滚动的持续时间
   */
  animationUpdateMainAreaScrollTop(
    { commit, state }: any,
    { value, scrollDuration = 1000 }: any
  ) {
    let cosParameter = (state.mainAreaScrollTop - value) / 2,
      reduceHeight = state.mainAreaScrollTop - 2 * cosParameter,
      scrollCount = 0,
      oldTimestamp = window.performance.now();
    function step(newTimestamp: number) {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) commit("updateMainAreaScrollTop", value);
      if (state.mainAreaScrollTop === value) return;
      commit(
        "updateMainAreaScrollTop",
        Math.round(
          reduceHeight + cosParameter + cosParameter * Math.cos(scrollCount)
        )
      );
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
};

// mutations
const mutations = {
  updateMainAreaScrollTop(state: any, value: number) {
    state.mainAreaScrollTop = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
