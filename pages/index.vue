<template>
  <popup-container :list="filteredList"></popup-container>
</template>

<script>
import PopupContainer from "@/components/popup-container";

export default {
  components: { PopupContainer },

  methods: {},
  computed: {
    filteredList() {
      return this.imagesList;
    },
  },
  async asyncData({ store, $axios }) {
    const res = await $axios.$get("http://jsonplaceholder.typicode.com/photos");
    const parsedData = res.slice(0, 99);
    store.commit("SET_IMAGES_LIST", parsedData);
  },
};
</script>

<style lang="scss">
body {
  background-image: url("../static/img/bg.jpg");
}
</style>
