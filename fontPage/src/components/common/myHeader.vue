<template>
  <div class="myHeader"></div>
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
  background: $blue;
  line-height: $height;
  padding: 0 $padding;
  font-size: 18px;
}
</style>
