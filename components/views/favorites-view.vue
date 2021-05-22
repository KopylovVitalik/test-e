<template>
  <default-view modifier="favorites">
    <image-card
      v-for="item in list"
      :key="item.id"
      :imageSrc="item.thumbnailUrl"
      :fileName="item.title"
      :id="item.id"
    />
  </default-view>
</template>

<script>
import ImageCard from "@/components/image-card";
import DefaultView from "@/components/views/default-view";
export default {
  name: "FavoritesView",
  components: { ImageCard, DefaultView },
  props: ["list"],
};
</script>

<style lang="scss">
</style>