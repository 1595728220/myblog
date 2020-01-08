<template>
  <div class="myHeader" :class="{ floatHeader: isFloat }" ref="header">
    <div class="main-width">
      <div class="left">
        <Icon type="ios-american-football-outline" />
        <span class="title">KunBoSu</span>
      </div>
      <div class="right">
        <div class="my-tab">
          <span>首页</span>
        </div>
        <div class="my-tab">
          <span>首页</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myHeader",
  data() {
    return {
      isFloat: document.documentElement.scrollTop < 120
    };
  },
  computed: {},
  mounted() {
    document.addEventListener("wheel", e => {
      // eslint-disable-next-line no-console
      this.isFloat = document.documentElement.scrollTop < 120;
    });
  },
  method: {},
  destroyed() {
    document.removeEventListener("wheel", () => {});
  }
};
</script>
<style lang="scss" scoped>
$height: 80px;
$padding: 20px;
$tab-height: 50px;
.myHeader {
  width: 100%;
  height: $height;
  background: #082846c7;
  color: white;
  line-height: $height;
  font-size: 18px;
  opacity: 0.9;
  position: fixed;
  top: 0;
  transition: all 0.5s ease;

  &.floatHeader {
    top: 50px;
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
        font-size: 28px;
        font-weight: bold;
      }
    }
    .right {
      flex: 1;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      padding-left: 50px;
      .my-tab {
        height: $tab-height;
        line-height: $tab-height;
        text-align: center;
        cursor: pointer;
        color: #9acfea;
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
        &:hover {
          color: white;
        }
        &:hover::after {
          width: 100%;
        }
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
