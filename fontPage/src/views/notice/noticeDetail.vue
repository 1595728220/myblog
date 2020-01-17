<template>
  <div class="noticeDetail">
    <top-background :title="noticeDetail.title"></top-background>
    <div class="notice-detail-content">
      <Spin size="large" v-if="loading" fix></Spin>
      <div class="left">
        <div v-html="noticeDetail.content"></div>
      </div>
      <div class="right">
        <div class="hash-jump" :class="{ 'is-hover': isFloat }">
          <div class="title">
            <span>跳转</span>
            <span @click="clickBack">返回</span>
          </div>
          <ul v-if="catalog.length > 0">
            <li v-for="(item, index) of catalog" :key="index">
              <a :href="'#' + item.name">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "noticeDetail",
  components: {
    "top-background": topBackground
  },
  props: {
    id: {}
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("noticeDetail", ["noticeDetail", "loading", "catalog"]),
    ...mapGetters("common", { mainAreaScrollTop: "getMainAreaScrollTop" }),
    isFloat() {
      return this.mainAreaScrollTop > 370;
    }
  },
  mounted() {
    this.requireNoticeDetail(this.id);
  },
  methods: {
    ...mapActions("noticeDetail", ["requireNoticeDetail"]),
    clickBack() {
      this.$router.push("/notice");
    }
  }
};
</script>
<style lang="scss" scoped>
.noticeDetail {
  min-height: calc(100vh - 40px);
  .topBackground {
    background-color: #7eee96;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='163' height='163' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%236bca80' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  }
  .notice-detail-content {
    padding-top: 50px;
    padding-bottom: 50px;
    width: $main-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    .left {
      width: 60%;
      margin-right: 50px;
      & > div {
        width: 100%;
      }
      /deep/ h1 {
        line-height: 80px;
      }
    }
    .right {
      width: 300px;
      .hash-jump {
        border: 1px solid #ccc;
        padding-bottom: 0;
        width: 300px;
        .title {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          padding: 10px;
          & > span {
            font-size: 16px;
            font-weight: bold;

            &:last-child {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
        &.is-hover {
          position: fixed;
          top: 130px;
        }
        ul {
          padding: 10px;
        }
        li {
          padding-left: 10px;
          &:not(:last-child) {
            border-bottom: 1px solid #ccc;
          }
        }
        a {
          line-height: 30px;
          word-break: keep-all;
        }
      }
    }
  }
}
</style>
