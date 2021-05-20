<template>
  <div class="image-group">
    <h2 v-text="title" class="image-group__title" />
    <div class="image-group__cards">
      <image-card
        v-for="item in list"
        :key="item.id"
        :imageSrc="item.thumbnailUrl"
        :fileName="item.title"
        :id="item.id"
      />
    </div>
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
.image-group {
  padding: 4px;
  border-radius: 10px;
  margin-bottom: 24px;
  &__title {
    text-transform: uppercase;
    margin-bottom: 8px;
    padding-left: 24px;
  }
}
</style>