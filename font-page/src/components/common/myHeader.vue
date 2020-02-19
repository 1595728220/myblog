<template>
  <div class="myHeader" :class="{ floatHeader: isFloat }" ref="header">
    <div class="main-width">
      <div class="left">
        <Icon type="logo-vimeo" size="42" />
        <span class="title">KunBoSu</span>
      </div>
      <div class="right">
        <div class="my-tab">
          <router-link to="/home">首页</router-link>
        </div>
        <div class="my-tab">
          <router-link to="/project">个人项目</router-link>
        </div>
        <div class="my-tab">
          <router-link to="/notice">博客</router-link>
        </div>
        <div class="my-tab">
          <router-link to="/practical">实用</router-link>
        </div>
        <div class="my-tab">
          <router-link to="/about">关于</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "myHeader",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("common", { mainAreaScrollTop: "getMainAreaScrollTop" }),
    isFloat() {
      return this.mainAreaScrollTop < 150;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
$height: 80px;
$padding: 20px;
$tab-height: 50px;
.myHeader {
  width: 100%;
  height: $height;
  // box-sizing: border-box;
  z-index: 10;
  color: #333;
  line-height: $height;
  font-size: 18px;
  position: fixed;
  top: 0;
  transition: all 0.5s ease;
  background: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  a {
    color: #333;
    font-weight: 600;
  }
  .my-tab:hover {
    a {
      color: #9acfea;
    }
  }
  &.floatHeader {
    background: #082846c7;
    color: white;
    top: 50px;
    a {
      color: #9acfea;
    }
    .my-tab:hover {
      a {
        color: white;
      }
    }
  }
  .main-width {
    width: $main-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    .left {
      flex: 1;
      .title {
        font-size: 42px;
        font-weight: bold;
        margin-left: 10px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-left: 50px;
      .my-tab {
        height: $tab-height;
        line-height: $tab-height;
        text-align: center;
        cursor: pointer;
        &::after {
          content: "";
          display: block;
          width: 0;
          height: 5px;
          background: $blue;
          transition: all 0.2s cubic-bezier(0.46, 1, 0.23, 1.52);
          border-radius: 3px;
          margin: 0 auto;
        }

        &:hover::after {
          width: 100%;
        }
        &:not(:last-child) {
          margin-right: 50px;
        }
      }
    }
  }
}
</style>
