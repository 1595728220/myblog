<template>
  <div class="home">
    <top-background :title="title"></top-background>
  </div>
</template>
<script>
import topBackground from "@/components/home/topBackground.vue";
export default {
  name: "home",
  components: {
    "top-background": topBackground
  },
  data() {
    return {
      title: "人类悲欢，只觉吵闹"
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
}
</style>
