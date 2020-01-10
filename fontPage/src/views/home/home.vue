<template>
  <div class="home">
    <top-background :title="title"></top-background>
  </div>
</template>
<script>
import topBackground from "@/components/common/topBackground.vue";
export default {
  name: "home",
  components: {
    "top-background": topBackground
  },
  data() {
    return {
      title: "人生苦短"
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  // height: 200vh;
  .topBackground {
    background-image: url("../../assets/home/jumbotron.jpg");
  }
}
</style>
