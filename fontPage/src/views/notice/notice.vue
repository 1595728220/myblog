<template>
  <div class="notice">
    <top-background :title="title"></top-background>
    <div class="notice-content">
      <div class="left">
        <Timeline>
          <TimelineItem
            color="green"
            v-for="(item, index) of tableData"
            :key="index"
          >
            <span>{{ item.title }}</span>
          </TimelineItem>
        </Timeline>
      </div>
      <div class="right">
        <span>分类统计</span>
      </div>
    </div>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
import { mapActions, mapState } from "vuex";
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
    ...mapState("notice", ["tableData"])
  },
  mounted() {
    this.loadTable();
  },
  methods: {
    ...mapActions("notice", ["loadTable"])
    // loadTable() {
    //   this.$axios
    //     .post("/api/notice/list", this.limitQuery)
    //     .then(res => {
    //       let data = res.data;
    //       // eslint-disable-next-line no-console
    //       console.log(data);
    //     })
    //     .catch(err => {
    //       this.$message.error(err.message);
    //     });
    // }
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
  }
}
</style>
