<template>
  <div class="my-index">
    <my-header></my-header>
    <div class="main-area" @wheel="handleWheel" ref="mainArea">
      <router-view></router-view>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from "@/components/common/myHeader";
import myFooter from "@/components/common/myFooter";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "index",
  components: {
    myHeader,
    myFooter
  },
  methods: {
    ...mapMutations("common", [
      "updateMainAreaScrollTop" // 将 `this.updateMainAreaScrollTop()` 映射为 `this.$store.commit('updateMainAreaScrollTop')`
    ]),
    handleWheel($event) {
      let scrollTop = this.$refs.mainArea.scrollTop;
      this.updateMainAreaScrollTop(scrollTop);
    }
  },
  computed: {
    ...mapGetters("common", { mainAreaScrollTop: "getMainAreaScrollTop" })
  },
  watch: {
    mainAreaScrollTop(val) {
      this.$refs.mainArea.scrollTop = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.my-index {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .main-area {
    flex: 1;
    overflow: auto;
  }
}
</style>
