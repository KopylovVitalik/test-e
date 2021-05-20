<template>
  <div class="favorites-view">
    <image-group
      class="album-card"
      v-for="(value, key) in albumList"
      :key="key"
      :list="value"
      :title="key"
    />
  </div>
</template>

<script>
import ImageGroup from "~/components/image-group.vue";
export default {
  name: "AlbumView",
  components: { ImageGroup },
  props: ["list"],
  computed: {
    albumList() {
      let arr = {};
      this.list
        .sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .forEach((el) => {
          let s = el.title.substring(0, 1);
          if (s in arr) {
            arr[s].push(el);
            return;
          }
          arr[s] = [el];
        });
      return arr;
      // const groupBy = (arr) =>
      //   arr
      //     .map((el) => el.title.substring(0, 1))
      //     .reduce((acc, val, i) => {
      //       acc[val] = (acc[val] || []).concat(arr[i]);
      //       return acc;
      //     }, {});
      // retun groupBy([...this.$store.state.imagesList]);
    },
  },
};
</script>

<style lang="scss">
.favorites-view {
  columns: 4;
  & > * {
    break-inside: avoid;
  }
}
</style>