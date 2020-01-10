<template>
  <div class="project">
    <top-background :title="title"></top-background>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
export default {
  name: "project",
  components: {
    "top-background": topBackground
  },
  data() {
    return {
      title: "人生苦短",
      requireUrl:
        "https://api.github.com/users/1595728220/repos?sort=updated&direction=desc&visibility=all"
    };
  },
  mounted() {
    this.requireMyProject();
  },
  methods: {
    requireMyProject() {
      this.$axios.get(this.requireUrl).then(res => {
        // eslint-disable-next-line no-console
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.project {
  // height: 200vh;
  .topBackground {
    background-color: #5c705a;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130' viewBox='0 0 120 120'%3E%3Cpolygon fill='%2386ee7c' fill-opacity='0.47' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 '/%3E%3C/svg%3E");
  }
}
</style>
