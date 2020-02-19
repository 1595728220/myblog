<template>
  <div class="home">
    <top-background :title="title"></top-background>
    <div class="home-content">
      <div class="left">
        <List item-layout="vertical" header="我的笔记">
          <ListItem
            v-for="(item, index) of limitNoticeList"
            :key="index"
            @click.native="clickToDetail(item.nid)"
          >
            <ListItemMeta
              :description="$tagTime(item.update_time, 'yyyy-MM-dd')"
            >
              <template slot="title">
                <span>{{ item.title }}</span>
                <Tag
                  color="primary"
                  v-for="(el, ind) of item.keywords.split(',')"
                  :key="ind"
                  >{{ el }}</Tag
                >
              </template>
            </ListItemMeta>
            {{ item.notice_describe }}
          </ListItem>
        </List>
      </div>
      <div class="right">
        <div class="project-title">我的项目</div>
        <project-item
          v-bind="item"
          v-for="(item, index) of limitProjectList"
          :key="index"
        ></project-item>
      </div>
    </div>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
import projectItem from "@/components/common/projectItem.vue";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "home",
  components: {
    "top-background": topBackground,
    "project-item": projectItem
  },
  data() {
    return {
      title: "睹物思人，奈何物是人非"
    };
  },
  computed: {
    ...mapState("notice", ["tableData"]),
    ...mapState("project", ["projectList"]),
    limitProjectList() {
      let tmpArr = [...this.projectList];
      tmpArr = tmpArr.slice(0, 3);
      return tmpArr;
    },
    limitNoticeList() {
      let tmpArr = [...this.tableData];
      tmpArr = tmpArr.slice(0, 6);
      return tmpArr;
    }
  },
  mounted() {
    this.requireMyProject();
    this.loadTable();
  },
  methods: {
    ...mapActions("project", ["requireMyProject"]),
    ...mapActions("notice", ["loadTable"]),
    clickToDetail(id) {
      this.$router.push(`/noticeDetail/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 40px);
  // height: 200vh;
  .topBackground {
    background-image: url("../../assets/home/jumbotron.jpg");
  }
  .home-content {
    padding-top: 50px;
    padding-bottom: 50px;
    width: $main-width;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    .left {
      width: 700px;
      /deep/ .ivu-list-header {
        font-size: 24px;
      }
      /deep/ .ivu-list-item-meta-title .ivu-tag {
        margin-left: 10px;
        line-height: 20px;
      }
      .ivu-list-item {
        cursor: pointer;
        border-bottom: 1px solid #e8eaec;
      }
    }
    .right {
      width: 400px;
      & > div:not(:last-child) {
        margin-bottom: 20px;
      }
      .project-title {
        font-size: 24px;
        text-align: left;
      }
    }
  }
}
</style>
