<template>
  <div class="myFooter">
    <div class="footer-main">
      <span>Power by Su KunBo</span>
      <span>个人博客( 邮箱web_skb@163.com )</span>
      <span @click="clickTop" class="click-top">TOP</span>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "myFooter",
  methods: {
    ...mapActions("common", [
      "animationUpdateMainAreaScrollTop" // 将 `this.updateMainAreaScrollTop()` 映射为 `this.$store.commit('updateMainAreaScrollTop')`
    ]),
    clickTop() {
      // eslint-disable-next-line no-console
      this.animationUpdateMainAreaScrollTop({ value: 0, scrollDuration: 600 });
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 30px;
$padding: 20px;
.myFooter {
  width: 100%;
  height: $height;
  // background: $theme;
  color: #333;
  line-height: $height;
  padding: 0 $padding;
  font-size: 12px;
  text-align: center;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  .footer-main {
    width: $main-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    .click-top {
      cursor: pointer;
      text-decoration: underline;
      font-weight: bold;
    }
  }
}
</style>
