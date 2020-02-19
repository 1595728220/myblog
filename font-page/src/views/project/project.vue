<template>
  <div class="project">
    <top-background :title="title"></top-background>
    <div class="project-list">
      <Spin size="large" v-if="loading" fix></Spin>
      <Row :gutter="40">
        <i-col span="8" v-for="(item, index) of projectList" :key="index">
          <project-item v-bind="item"></project-item>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
import projectItem from "@/components/common/projectItem.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "project",
  components: {
    "top-background": topBackground,
    "project-item": projectItem
  },
  data() {
    return {
      title: "事无两样，心有别"
    };
  },
  computed: {
    ...mapState("project", ["loading", "projectList"])
  },
  mounted() {
    this.requireMyProject();
  },
  methods: {
    ...mapActions("project", ["requireMyProject"])
  }
};
</script>
<style lang="scss" scoped>
.project {
  min-height: calc(100vh - 40px);
  .topBackground {
    background-color: #5c705a;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130' viewBox='0 0 120 120'%3E%3Cpolygon fill='%2386ee7c' fill-opacity='0.47' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 '/%3E%3C/svg%3E");
  }
  .project-list {
    width: $main-width;
    margin: 0 auto;
    padding: 20px 0;
    min-height: 230px;
    position: relative;
    .ivu-row {
      width: 100%;
      margin-bottom: -20px;
      .ivu-col {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
