<template>
  <div class="image-card">
    <img :src="imageSrc" :alt="fileName" />
    <div v-text="fileName"></div>
    <button @click="favoritesHandler">Add</button>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: ["imageSrc", "fileName", "id"],
  methods: {
    favoritesHandler() {
      this.$store.commit("HANDLE_FAVORITES_LIST", this.id);
    },
  },
};
</script>

<style lang="scss">
.image-card {
  display: flex;
  align-items: center;
  background: #f7f8f9;
  border-radius: 8px;
  padding: 4px;
  img {
    border-radius: 8px;
    height: 32px;
    width: 32px;
    object-fit: cover;
    margin-right: 12px;
  }
  div {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #1c214c;
  }
  & + .image-card {
    margin-top: 12px;
  }
}
</style>