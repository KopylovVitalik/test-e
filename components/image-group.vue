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
import ImageCard from "@/components/image-card";
export default {
  name: "ImageGroup",
  components: { ImageCard },
  props: ["title", "list"],
};
</script>

<style lang="scss">
.image-group {
  border-radius: 10px;
  margin-bottom: 24px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__title {
    text-transform: uppercase;
    margin: 0 0 8px;
    padding-left: 24px;
  }
}
</style>