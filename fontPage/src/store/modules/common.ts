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
  animationUpdateMainAreaScrollTop({ commit, state }: any, value: number) {
    var cosParameter = state.mainAreaScrollTop / 2,
      scrollCount = 0,
      oldTimestamp = window.performance.now(),
      scrollDuration = 1000;
    function step(newTimestamp: number) {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) commit("updateMainAreaScrollTop", 0);
      if (state.mainAreaScrollTop === 0) return;
      commit(
        "updateMainAreaScrollTop",
        Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
      );
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
    // let initTop = state.mainAreaScrollTop,
    //   step = (initTop / 100) * 15,
    //   timer: any = null;
    // timer = setInterval(() => {
    //   initTop -= step;
    //   // eslint-disable-next-line no-console
    //   console.log(initTop);
    //   if (initTop <= 0) {
    //     clearInterval(timer);
    //     initTop = 0;
    //   }
    //   commit("updateMainAreaScrollTop", initTop);
    // }, 15);
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
