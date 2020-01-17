<template>
  <div class="practical">
    <top-background :title="title"></top-background>
    <div class="practical-content">
      <Spin size="large" v-if="loading" fix></Spin>
      <div class="practical-content-header">
        <Input
          search
          enter-button
          clearable
          placeholder="请输入关键词"
          v-model="query"
          @on-clear="requireMypractical"
          @on-enter="requireMypractical"
          @on-search="requireMypractical"
        />
        <Tag
          checkable
          color="primary"
          @on-change="handleTagChange"
          :name="index"
          v-for="(item, index) of keywords"
          :key="index"
          >{{ item.keyword }}</Tag
        >
      </div>
      <List item-layout="vertical" header="实用网址">
        <ListItem
          v-for="(item, index) of filterPracticalList"
          :key="index"
          @click.native="clickAddr(index)"
        >
          <ListItemMeta :description="item.practical_describe">
            <template slot="title">
              <span>{{ item.title }}</span>
              <Tag color="primary">{{ item.keywords }}</Tag>
            </template>
          </ListItemMeta>
          <template slot="action"
            ><li>
              <Icon type="ios-attach" :size="24" /> {{ item.jump_times }}
            </li>
          </template>
        </ListItem>
      </List>
    </div>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "practical",
  components: {
    "top-background": topBackground
  },
  data() {
    return {
      title: "人生无完美，曲折亦风景"
    };
  },
  computed: {
    ...mapState("practical", ["loading", "keywords"]),
    ...mapGetters("practical", ["searchQuery", "filterPracticalList"]),
    query: {
      get() {
        return this.searchQuery;
      },
      set(val) {
        this.updateSearchQuery(val);
      }
    }
  },
  mounted() {
    this.requireMypractical();
  },
  methods: {
    ...mapActions("practical", ["requireMypractical", "requireAddJumpTimes"]),
    ...mapMutations("practical", ["updateSearchQuery", "updateKeyword"]),
    clickAddr(index) {
      let clickObj = this.filterPracticalList[index];
      this.requireAddJumpTimes(clickObj.pid);
      window.open(clickObj.link);
    },
    handleTagChange(checked, name) {
      this.updateKeyword({ index: name, checked });
    }
  }
};
</script>
<style lang="scss" scoped>
.practical {
  min-height: calc(100vh - 40px);
  // height: 200vh;
  .topBackground {
    background-color: #487346;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='405' height='405' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%23608f57' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%2374ad69' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%23608f57' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%2374ad69' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%2389CC7C' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%237f8f53' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%239bad64' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23B6CC76' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%239bad64' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%237f8f53' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23B6CC76' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%237f8f53' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23B6CC76' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%239bad64' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23B6CC76' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E");
  }
  .practical-content {
    padding-top: 50px;
    padding-bottom: 50px;
    width: $main-width;
    margin: 0 auto;
    position: relative;
    .practical-content-header {
      display: flex;
      align-items: center;
      & > :first-child {
        margin-right: 10px;
      }
    }
    .ivu-list-item {
      cursor: pointer;
      border-bottom: 1px solid #e8eaec;
    }
    /deep/ .ivu-list-item-meta-title .ivu-tag {
      margin-left: 10px;
      line-height: 20px;
    }
    /deep/ .ivu-input-icon {
      right: 46px;
    }
    .ivu-input-wrapper {
      width: 250px !important;
    }
  }
}
</style>
