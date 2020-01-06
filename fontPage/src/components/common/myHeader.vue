<template>
  <div class="myHeader">
    <div class="my-tab">首页</div>
  </div>
</template>
<script>
export default {
  name: "myHeader"
};
</script>
<style lang="scss" scoped>
$height: 50px;
$padding: 20px;
.myHeader {
  height: $height;
  background: $theme;
  color: white;
  line-height: $height;
  padding: 0 $padding;
  font-size: 18px;
  .my-tab {
  }
}
</style>
