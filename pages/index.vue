<template>
  <popup-container :list="imagesList"></popup-container>
</template>

<script>
import PopupContainer from "@/components/popup-container";

export default {
  components: { PopupContainer },
  async asyncData({ store, $axios }) {
    const res = await $axios.$get(
      "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=100"
    );
    return { imagesList: res };
  },
};
</script>

<style lang="scss">
body {
  background-image: url("../static/img/bg.jpg");
}
</style>
