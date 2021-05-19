<template>
  <div class="album-card">
    <h2 v-text="title"></h2>
    <image-card
      v-for="item in list"
      :key="item.id"
      :imageSrc="item.thumbnailUrl"
      :fileName="item.title"
      :id="item.id"
    />
  </div>
</template>

<script>
import imageCard from "./image-card.vue";
export default {
  name: "AlbumCard",
  components: { imageCard },
  props: ["title", "list"],
};
</script>

<style lang="scss">
.album-card {
  padding: 4px;
  border: 1px solid red;
  border-radius: 10px;
}
</style>