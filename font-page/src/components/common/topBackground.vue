<template>
  <div class="topBackground">
    <div class="top-content">
      <span class="title">{{ title }}</span>
      <slot name=""></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "topBackground",
  props: {
    title: {}
  }
};
</script>
<style lang="scss" scoped>
.topBackground {
  width: 100%;
  height: 450px;
  // background-image: url("../../assets/home/jumbotron.jpg");
  padding-top: 230px;
  .top-content {
    width: $main-width;
    margin: 0 auto;
  }
  .title {
    font-size: 63px;
    color: #fff;
  }
}
</style>
