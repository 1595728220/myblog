<template>
  <div class="about">
    <top-background :title="title"></top-background>
    <div class="about-content">
      <div class="detail">
        <div class="about-me">
          <h1>关于我</h1>
          <span
            >毕业于温州大学瓯江学院的的前端小菜鸡，目前主要使用的是vue框架</span
          >
        </div>
        <div class="about-connect">
          <h1>联系方式</h1>
          <p>QQ：1595728220</p>
          <p>邮箱：web_skb@163.com、1595728220@qq.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
export default {
  name: "about",
  components: {
    "top-background": topBackground
  },
  data() {
    return {
      title: "无情者伤人，有情者自伤"
    };
  }
};
</script>
<style lang="scss" scoped>
.about {
  min-height: calc(100vh - 40px);
  // height: 200vh;
  .topBackground {
    background-color: #07ffea;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%235a5a5a' stroke-width='61.6' stroke-opacity='0.05' %3E%3Ccircle fill='%2307ffea' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2306f4d0' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230be3b4' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2310d39b' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2314c385' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2317b371' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%231aa461' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%231d9652' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%231f8846' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23207b3c' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23216e33' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2321622c' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23215626' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23204b22' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%231f401e' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%231f361d' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%231d2d1a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%231a2417' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
  .about-content {
    width: $main-width;
    margin: 0 auto;
    padding: 20px 0;
    min-height: 230px;
    position: relative;
    .detail {
      font-size: 18px;
      & > div {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
