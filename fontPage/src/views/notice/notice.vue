<template>
  <div class="notice">
    <top-background :title="title"></top-background>
    <div class="notice-content">
      <Spin size="large" v-if="loading" fix></Spin>
      <div class="left">
        <Timeline>
          <TimelineItem
            color="green"
            v-for="(item, index) of tableData"
            :key="index"
            @click.native="clickToDetail(item.nid)"
          >
            <Icon type="ios-trophy" slot="dot" :size="24"></Icon>
            <Icon type="ios-arrow-forward" slot="dot" :size="24"></Icon>
            <div>{{ item.title }}</div>
            <div>
              <span class="description">
                {{ item.notice_describe }}
              </span>
              <span class="time">{{
                $tagTime(item.update_time, "yyyy年MM月dd日 HH时mm分")
              }}</span>
            </div>
          </TimelineItem>
        </Timeline>
      </div>
      <div class="right">
        <h2>分类统计</h2>
        <ul>
          <li
            :class="{ 'is-select': selectKeywords === '' }"
            @click="handleKeywordsChange('')"
          >
            <span>全部分类</span>
            <Badge :count="totalClass" className="badge-alone"></Badge>
          </li>
          <li
            v-for="(count, key, index) of classifyList"
            :key="index"
            :class="{ 'is-select': selectKeywords === key }"
            @click="handleKeywordsChange(key)"
          >
            <span>{{ key }}</span>
            <Badge :count="count" className="badge-alone"></Badge>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "notice",
  components: {
    "top-background": topBackground
  },
  data() {
    return {
      title: "红颜弹指老，刹那芳华"
    };
  },
  computed: {
    ...mapState("notice", ["tableData", "loading"]),
    ...mapGetters("notice", ["classifyList", "totalClass", "selectKeywords"])
  },
  mounted() {
    this.loadTable();
  },
  methods: {
    ...mapActions("notice", ["loadTable", "handleKeywordsChange"]),
    clickToDetail(id) {
      this.$router.push(`/noticeDetail/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.notice {
  min-height: calc(100vh - 40px);

  .topBackground {
    background-color: #7eee96;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='163' height='163' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%236bca80' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  }
  .notice-content {
    padding-top: 50px;
    width: $main-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    .ivu-spin-fix {
      z-index: 11;
    }
    .left {
      padding-top: 50px;
      .ivu-icon-ios-arrow-forward {
        display: none;
      }
      /deep/ .ivu-timeline-item {
        cursor: pointer;
        &:not(:last-child) {
          padding-bottom: 50px;
        }
        &:hover {
          .ivu-icon-ios-trophy {
            display: none;
          }
          .ivu-icon-ios-arrow-forward {
            display: inline-block;
          }
          .ivu-timeline-item-content > div:first-child {
            transform: translate(10px);
            font-size: 24px;
          }
        }
      }
      /deep/ .ivu-timeline-item-content {
        & > div:first-child {
          font-size: 20px;
          height: 24px;
          line-height: 14px;
          transition: all 0.2s;
        }
        & > div:nth-child(2) {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          .time {
            color: #aaa;
          }
        }
      }
    }
    .right {
      width: 300px;
      text-align: center;
      & > h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }
      ul {
        border: 1px solid #333;
        li {
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          padding-left: 10px;
          padding-right: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          /deep/ .ivu-badge-count {
            background: #19be6b;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #333;
          }
          &.is-select {
            background: $blue;
            color: #fff;
            /deep/ .ivu-badge-count {
              box-shadow: none;
            }
          }
        }
      }
    }
  }
}
</style>
