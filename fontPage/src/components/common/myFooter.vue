<template>
  <div class="myFooter">
    <span>个人博客( 邮箱web_skb@163.com )</span>
  </div>
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
  background: $theme;
  color: white;
  line-height: $height;
  padding: 0 $padding;
  font-size: 12px;
  text-align: center;
}
</style>
