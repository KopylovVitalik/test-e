<template>
  <div>
    <div v-if="$store.state.favoritesList.length">
      <image-card
        v-for="item in favList"
        :key="item.id"
        :imageSrc="item.thumbnailUrl"
        :fileName="item.title"
        :id="item.id"
      />
    </div>
    <div v-else>Favorites List is empty</div>
  </div>
</template>

<script>
import ImageCard from "@/components/image-card";
export default {
  name: "FavoritesView",
  components: { ImageCard },
  props: ["list"],
  computed: {
    favList() {
      return this.list.filter((el) =>
        this.$store.state.favoritesList.includes(el.id)
      );
    },
  },
};
</script>

<style lang="scss">
</style>