<template>
  <div>
    <div class="d" v-for="(value, key) in albumList" :key="key">
      <div class="s" v-text="key"></div>
      <ImageItem
        v-for="item in value"
        :key="item.id"
        :imageSrc="item.thumbnailUrl"
        :fileName="item.title"
      />
    </div>
  </div>
</template>

<script>
import ImageItem from "@/components/image-item";
export default {
  name: "AlbumView",
  components: { ImageItem },
  computed: {
    albumList() {
      let list = [...this.$store.state.imagesList];
      let arr = {};
      list
        .sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
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
    },
  },
};
</script>

<style lang="scss">
</style>