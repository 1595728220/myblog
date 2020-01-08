<template>
  <div class="my-index">
    <my-header></my-header>
    <div class="main-area">
      <router-view></router-view>
    </div>
    <!-- <my-footer></my-footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from "@/components/common/myHeader";
// import myFooter from "@/components/common/myFooter";
export default {
  name: "index",
  components: {
    myHeader
    // myFooter
  }
};
</script>
<style lang="scss" scoped>
.my-index {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .main-area {
    flex: 1;
    overflow: auto;
  }
}
</style>
