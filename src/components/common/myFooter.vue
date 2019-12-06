<template>
  <div class="myFooter"></div>
</template>
<script>
export default {
  name: "myFooter"
};
</script>
<style lang="scss" scoped>
$height: 30px;
$padding: 20px;
.myFooter {
  height: $height;
  background: $blue;
  line-height: $height;
  padding: 0 20px;
  font-size: 12px;
}
</style>
