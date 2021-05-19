<template>
  <div class="favorites-view">
    <album-card
      class="album-card"
      v-for="(value, key) in albumList"
      :key="key"
      :list="value"
      :title="key"
    />
  </div>
</template>

<script>
import AlbumCard from "~/components/album-card.vue";
export default {
  name: "AlbumView",
  components: { AlbumCard },
  computed: {
    albumList() {
      let list = [...this.$store.state.imagesList];
      let arr = {};
      list
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