<template>
  <div class="image-item">
    <img :src="imageSrc" :alt="fileName" />
    <div v-text="fileName"></div>
  </div>
</template>

<script>
export default {
  name: "ImageItem",
  props: ["imageSrc", "fileName"],
};
</script>

<style lang="scss">
.image-item {
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
  & + .image-item {
    margin-top: 12px;
  }
}
</style>