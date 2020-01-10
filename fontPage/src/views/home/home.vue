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
      title: "睹物思人，奈何物是人非"
    };
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
}
</style>
